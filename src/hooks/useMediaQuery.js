import { useSyncExternalStore } from "react";

/**
 * SSR-safe media query hook.
 *
 * Why useSyncExternalStore: it lets us return a STABLE server snapshot
 * (always `false` / the provided default on the server AND on the first
 * client render) and only switch to the real value after hydration.
 * That eliminates the hydration mismatch that causes layout to "snap"
 * on first paint — the root cause of the wiggling you saw.
 *
 * Usage:
 *   const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query, serverDefault = false) {
  function subscribe(callback) {
    if (typeof window === "undefined") return () => {};
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  }
  const getSnapshot = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : serverDefault;
  const getServerSnapshot = () => serverDefault;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Returns true only after the component has mounted on the client.
 * Use to gate anything that must NOT run during server render or first
 * hydration pass (third-party widgets, viewport-dependent layout, etc.).
 *
 *   const isClient = useIsClient();
 *   if (!isClient) return <Placeholder />;   // identical on server + first client render
 */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,   // client
    () => false   // server + first hydration render
  );
}


