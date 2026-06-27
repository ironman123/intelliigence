import { useMediaQuery } from "../hooks/useMediaQuery";

/**
 * DROP-IN REPLACEMENT for the useBreakpoint() currently defined inside
 * ProductPage.jsx (lines ~18-30).
 *
 * THE BUG (current code):
 *   const [width, setWidth] = useState(
 *     typeof window !== "undefined" ? window.innerWidth : 1280
 *   );
 * On the server `width` is 1280. On the client's first render it becomes the
 * real viewport width. If they differ, React throws a hydration mismatch and
 * the layout repaints — the visible "snap"/wiggle.
 *
 * THE FIX: derive booleans from matchMedia via useSyncExternalStore, which
 * returns a stable value on server + first client render, then updates.
 *
 * Replace the local useBreakpoint with this and swap any `width < 768` style
 * checks for the booleans below.
 */
export function useBreakpoint() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)", true); // default desktop on server
  return { isMobile, isTablet, isDesktop };
}


