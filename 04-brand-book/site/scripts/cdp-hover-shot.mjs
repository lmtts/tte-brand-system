// Same as cdp-shot.mjs but moves the real mouse over an element (matched by
// its exact text content) before capturing, to verify CSS :hover states
// actually fire in the browser — a plain screenshot can't show :hover.
//
// Usage:
//   node cdp-hover-shot.mjs <url> <elementIdToScrollTo|""> <outPngPath> <exactTextToHover> [width] [height]

const [, , url, scrollToId, outPath, hoverText, width, height] = process.argv;

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
    mobile: false,
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
await new Promise((r) => setTimeout(r, 1200));

if (scrollToId) {
  await send("Runtime.evaluate", {
    expression: `document.getElementById(${JSON.stringify(scrollToId)}).scrollIntoView({behavior:"instant", block:"start"})`,
  });
  await new Promise((r) => setTimeout(r, 1800));
}

const rectResult = await send("Runtime.evaluate", {
  expression: `(() => { const el = Array.from(document.querySelectorAll('span')).find(s => s.textContent.trim() === ${JSON.stringify(hoverText)} && s.children.length === 0); const r = el.getBoundingClientRect(); return { x: r.left + r.width/2, y: r.top + r.height/2 }; })()`,
  returnByValue: true,
});
const { x, y } = rectResult.result.value;

await send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y });
await new Promise((r) => setTimeout(r, 300));

const { data } = await send("Page.captureScreenshot", { format: "png" });
const fs = await import("node:fs");
fs.writeFileSync(outPath, Buffer.from(data, "base64"));
console.log("saved", outPath);
ws.close();
process.exit(0);
