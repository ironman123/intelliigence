import { useEffect } from "react";
import { loadScript } from "../lib/loadScript";

// ─── Botpress config — SINGLE SOURCE OF TRUTH ─────────────────────────────────
// Change the bot or engine version HERE and nowhere else.
// NOTE: v2.2 is the version currently live on your site (the bot config below
// was working with it). Botpress v3.x uses a different webchat API — only bump
// `version` after verifying the bot still loads against it.
const BOTPRESS = {
    version: "v2.2",
    botConfigUrl: "https://files.bpcontent.cloud/2026/01/10/05/20260110050901-S2Z3L5PN.js",
};
const ENGINE_ID = "bp-inject";
const CONFIG_ID = "bp-config";

/**
 * Lazy-loaded Botpress chat. Loads when the browser goes idle OR on the first
 * user interaction — whichever comes first — so the third-party scripts stay
 * off the critical path and don't slow first paint.
 *
 * SSR-safe (all work happens in useEffect). Scripts are intentionally NOT torn
 * down on unmount: the Botpress widget is global, and removing it breaks the
 * chat on client-side navigation.
 */
export default function ChatWidget() {
    useEffect(() => {
        let cancelled = false;
        let started = false;

        const events = ["pointerdown", "keydown", "scroll", "touchstart"];
        const requestIdle = window.requestIdleCallback || ((cb) => window.setTimeout(cb, 2500));
        const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
        let idleId;

        function stopTriggers() {
            events.forEach((e) => window.removeEventListener(e, loadChat));
            if (idleId != null) cancelIdle(idleId);
        }

        async function loadChat() {
            if (started || cancelled) return;
            started = true;
            stopTriggers();
            try {
                // 1. engine first
                await loadScript(`https://cdn.botpress.cloud/webchat/${BOTPRESS.version}/inject.js`, { id: ENGINE_ID });
                if (cancelled) return;
                // 2. bot config only AFTER the engine is ready
                await loadScript(BOTPRESS.botConfigUrl, { id: CONFIG_ID });
            } catch (err) {
                console.error("[ChatWidget] Botpress failed to initialise:", err);
            }
        }

        events.forEach((e) => window.addEventListener(e, loadChat, { once: true, passive: true }));
        idleId = requestIdle(loadChat);

        return () => {
            cancelled = true;
            stopTriggers();
        };
    }, []);

    return null;
}


