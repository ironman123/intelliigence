/**
 * loadScript — inject an external <script> once, with dedupe + error reporting.
 *
 * Why this exists: raw document.createElement script injection fails silently.
 * If a CDN is down, you get no widget and no clue why. This resolves on load,
 * and on failure it LOGS a clear message and rejects — so breakage is visible
 * and traceable in the console instead of a silent no-op.
 *
 * SSR-safe: on the server (no document) it resolves to null and does nothing.
 *
 * @param {string} src
 * @param {{ id?: string, async?: boolean, defer?: boolean, attrs?: Record<string,string> }} [opts]
 * @returns {Promise<HTMLScriptElement|null>}
 */
export function loadScript(src, { id, async = true, defer = false, attrs = {} } = {}) {
  if (typeof document === "undefined") return Promise.resolve(null);

  // Already injected? Reuse it (dedupe across navigation / re-mounts).
  if (id) {
    const existing = document.getElementById(id);
    if (existing) return Promise.resolve(existing);
  }

  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = async;
    el.defer = defer;
    if (id) el.id = id;
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);

    el.onload = () => resolve(el);
    el.onerror = () => {
      console.error(`[loadScript] failed to load: ${src}`);
      el.remove();
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(el);
  });
}


