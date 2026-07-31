// Verification-only helper — screenshot (and optionally click/scroll-to) a page section via
// Chrome DevTools Protocol, using nothing but Node 22+'s built-in fetch + WebSocket. No
// puppeteer/playwright dependency.
//
// Why this exists: `chrome --headless --screenshot` alone can't verify this site, because the
// scroll-snap architecture (Lenis + lenis/snap) doesn't respond to a `#hash` in the URL under
// that capture mode — it always renders blank past the first frame. This drives real scrolling
// and clicking through CDP instead.
//
// Setup (once per session):
//   "C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
//     --remote-debugging-port=9333 --user-data-dir=<scratch-dir> about:blank &
//
// Usage:
//   node cdp-shot.mjs <url> <elementIdToScrollTo|""> <outPngPath> <clickSelector|""> [width] [height]

const [, , url, scrollToId, outPath, clickSelector, width, height] = process.argv;

const { webSocketDebuggerUrl } = await fetch("http://localhost:9333/json/new?" + encodeURIComponent(url), {
  method: "PUT",
}).then((r) => r.json());

const ws = new WebSocket(webSocketDebuggerUrl);
let id = 0;
const pending = new Map();

function send(method, params = {}) {
  const thisId = ++id;
  return new Promise((resolve) => {
    pending.set(thisId, resolve);
    ws.send(JSON.stringify({ id: thisId, method, params }));
  });
}

await new Promise((resolve) => ws.addEventListener("open", resolve));

ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result);
    pending.delete(msg.id);
  }
});

await send("Page.enable");
await send("Runtime.enable");

if (width && height) {
  await send("Emulation.setDeviceMetricsOverride", {
    width: Number(width),
    height: Number(height),
    deviceScaleFactor: 1,
    mobile: Number(width) < 768,
  });
}

const loadFired = new Promise((resolve) => {
  function onMsg(ev) {
    const msg = JSON.parse(ev.data);
    if (msg.method === "Page.loadEventFired") {
      ws.removeEventListener("message", onMsg);
      resolve();
    }
  }
  ws.addEventListener("message", onMsg);
});

await send("Page.navigate", { url });
await loadFired;

// give React hydration + GSAP entrance timelines a moment
await new Promise((r) => setTimeout(r, 1200));

if (scrollToId) {
  await send("Runtime.evaluate", {
    expression: `document.getElementById(${JSON.stringify(scrollToId)}).scrollIntoView({behavior:"instant", block:"start"})`,
  });
  // let Lenis/ScrollTrigger settle + any fade-in play out
  await new Promise((r) => setTimeout(r, 1800));
}

if (clickSelector) {
  await send("Runtime.evaluate", {
    expression: `document.querySelector(${JSON.stringify(clickSelector)}).click()`,
  });
  await new Promise((r) => setTimeout(r, 500));
}

const { data } = await send("Page.captureScreenshot", { format: "png" });
const fs = await import("node:fs");
fs.writeFileSync(outPath, Buffer.from(data, "base64"));
console.log("saved", outPath);
ws.close();
process.exit(0);
