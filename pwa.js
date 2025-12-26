/* Coherence.25-26 PWA helper
   - Registers service worker
   - Handles "Install" prompt
   - Builds "Offline Pack" URL list from the playlist already embedded in index.html
*/
(function(){
  const log = (...a)=>console.log("[PWA]", ...a);

  const toast = (msg, kind="info")=>{
    if (typeof window.showToast === "function") return window.showToast(msg, kind);
    if (typeof window.evToast === "function") return window.evToast(msg, kind);
    try { console.log("[Toast]", msg); } catch(e){}
    if (kind === "error") alert(msg);
  };

  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById("ev-btn-install");
    if (btn) btn.style.display = "";
    log("beforeinstallprompt captured");
  });

  async function doInstall(){
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    toast(choice.outcome === "accepted" ? "Installed ✅" : "Install dismissed.", "info");
    deferredPrompt = null;
    const btn = document.getElementById("ev-btn-install");
    if (btn) btn.style.display = "none";
  }

  async function registerSW(){
    if (!("serviceWorker" in navigator)) return;
    try {
      const reg = await navigator.serviceWorker.register("./sw.js", { scope: "./" });
      log("SW registered", reg);
    } catch (e) {
      console.warn("SW register failed", e);
    }
  }

  function getPlaylistFromPage(){
    const urls = new Set();

    document.querySelectorAll("#ev-list [data-file-std], #ev-list [data-file-alt]").forEach(el=>{
      const s = el.getAttribute("data-file-std");
      const a = el.getAttribute("data-file-alt");
      if (s) { urls.add("./audio/" + s); }
      if (a) { urls.add("./audio/" + a); }
    });

    if (urls.size === 0) {
      const html = document.documentElement.innerHTML;
      // Extract playlist array from JavaScript
      const playlistMatch = html.match(/const playlist = \[([\s\S]*?)\];/);
      if (playlistMatch) {
        const playlistStr = playlistMatch[1];
        // Extract letter and fileStd/fileAlt
        const trackRe = /letter:\s*"([A-I])"[\s\S]*?fileStd:\s*"([^"]+)"[\s\S]*?(?:fileAlt:\s*"([^"]+)")?/g;
        let m;
        while ((m = trackRe.exec(playlistStr)) !== null) {
          const letter = m[1].toLowerCase();
          const fileStd = m[2];
          const fileAlt = m[3];
          // Sample mode files
          urls.add("./audio/" + fileStd);
          if (fileAlt) urls.add("./audio/" + fileAlt);
          // Full mode files (with letter prefix)
          urls.add("./audio/" + letter + ")" + fileStd);
          if (fileAlt) {
            // Convert _(1) to (1) for Full mode
            const fullAlt = fileAlt.replace("_(1)", "(1)");
            urls.add("./audio/" + letter + ")" + fullAlt);
          }
        }
      } else {
        // Fallback: simple regex
        const re = /file(?:Std|Alt)\s*:\s*\"([^\"]+\.mp3)\"/g;
        let m;
        while ((m = re.exec(html)) !== null) {
          urls.add("./audio/" + m[1]);
        }
      }
    }

    const shell = [
      "./",
      "./index.html",
      "./manifest.webmanifest",
      "./pwa.js",
      "./icons/icon-192x192.png",
      "./icons/icon-512x512.png",
      "./icons/icon-192x192-maskable.png",
      "./icons/icon-512x512-maskable.png"
    ];
    shell.forEach(u=>urls.add(u));
    return Array.from(urls);
  }

  async function offlinePack(){
    if (!("serviceWorker" in navigator)) {
      toast("Offline pack requires Service Worker support.", "error");
      return;
    }
    const urls = getPlaylistFromPage();
    toast(`Offline pack: caching ${urls.length} files…`, "info");

    const reg = await navigator.serviceWorker.ready;

    const result = await new Promise((resolve) => {
      const onMsg = (ev) => {
        if (ev.data && ev.data.type === "CACHE_URLS_RESULT") {
          navigator.serviceWorker.removeEventListener("message", onMsg);
          resolve(ev.data.results);
        }
      };
      navigator.serviceWorker.addEventListener("message", onMsg);

      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type:"CACHE_URLS", urls });
      } else if (reg.active) {
        reg.active.postMessage({ type:"CACHE_URLS", urls });
      } else {
        resolve({ ok:0, fail: urls.length });
      }
    });

    toast(`Offline pack done ✅  Cached: ${result.ok}  Failed: ${result.fail}`, result.fail ? "warn" : "success");
  }

  function wireButtons(){
    const installBtn = document.getElementById("ev-btn-install");
    if (installBtn) installBtn.addEventListener("click", doInstall);

    const offlineBtn = document.getElementById("ev-btn-offline");
    if (offlineBtn) offlineBtn.addEventListener("click", offlinePack);
  }

  window.addEventListener("load", () => {
    registerSW();
    wireButtons();
  });

  window.CoherencePWA = { offlinePack, doInstall };
})();
