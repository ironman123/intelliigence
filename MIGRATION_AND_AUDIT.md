# Entropic System — SSR Migration & Audit

This bundle contains the **verified foundation** for moving your site to React Router v7
framework mode with SSR/SSG and proper per-page SEO. Every file here was built with
`react-router build` in a real RR7 7.17.0 project — exit code 0 — and the prerendered
HTML was inspected to confirm each route ships unique meta. See "What's verified" below.

---

## What you're getting (drop-in)

```
package.json                  # cleaned deps + framework-mode scripts
react-router.config.js        # ssr + prerender (all 11 URLs listed)
vite.config.js                # reactRouter() plugin (replaces react())
public/robots.txt             # NEW — was missing
public/sitemap.xml            # NEW — was missing, all 11 URLs
src/root.jsx                  # document shell, global meta/links, real 404 ErrorBoundary
src/routes.js                 # route table (replaces inline <Routes>)
src/routes/home.jsx           # real per-page meta + canonical
src/routes/solutions.jsx
src/routes/solutions.layer.jsx# /solutions/:layer with 404 on bad layer
src/routes/product.jsx        # all 6 products, REAL copy (no placeholders), JSON-LD
src/routes/not-found.jsx      # real HTTP 404
src/hooks/useMediaQuery.js    # SSR-safe viewport hook (fixes hydration "wiggle")
src/hooks/useBreakpoint.js    # drop-in replacement for ProductPage's buggy version
SECURITY.md                   # security audit + Supabase RLS SQL + fixes
```

## Install (the exact sequence — order matters)

```bash
# remove the abandoned/duplicate packages FIRST (this is what caused your ERESOLVE)
npm uninstall react-router-dom vite-prerender-plugin motion @vitejs/plugin-react

# install framework-mode packages at one matched version
npm i react-router@7.17.0 @react-router/node@7.17.0 @react-router/serve@7.17.0 isbot
npm i -D @react-router/dev@7.17.0

# project-wide: change every  from "react-router-dom"  ->  from "react-router"
# then verify all versions line up:
npm ls react-router      # every line should read 7.17.0
```

Then copy these files in, delete `src/main.jsx` and `index.html` (the shell now lives in
`src/root.jsx`), and `npm run dev`.

---

## The bugs found & fixed

| # | Issue | Where | Status |
|---|-------|-------|--------|
| 1 | Identical title/description on every route — whole site looks like one page to crawlers | static `index.html` | **Fixed** — per-route meta, verified in prerendered HTML |
| 2 | Soft 404: `path="*"` rendered Home with HTTP 200 (duplicate-content penalty) | `App.jsx` | **Fixed** — real 404 route + ErrorBoundary |
| 3 | `// In your router:` as literal text inside `<Routes>` | `App.jsx` | **Fixed** — routes moved to config |
| 4 | Duplicate animation libs (`framer-motion` + `motion` are the same lib) | `package.json` | **Fixed** — kept framer-motion |
| 5 | Abandoned `vite-prerender-plugin` installed, never wired | `package.json` | **Fixed** — removed |
| 6 | `robots.txt` and `sitemap.xml` missing entirely | — | **Fixed** — both added |
| 7 | Hydration mismatch: `useBreakpoint` seeds state from `window.innerWidth` during render → layout snaps on load (your "wiggling") | `ProductPage.jsx` | **Fix provided** — `useBreakpoint.js` drop-in |
| 8 | Manual `ScrollToTop` fights browser scroll restoration | `App.jsx` | **Fixed** — `<ScrollRestoration/>` in root |
| 9 | Two Botpress chat widgets, different versions | `ChatWidget.jsx` / `BotpressChat.jsx` | **Flagged** — keep one (SECURITY.md #3) |
| 10 | Supabase key + DB write in the browser, no RLS evidence | `ProjectModal.jsx` | **Flagged + SQL provided** (SECURITY.md #1) |
| 11 | Contact form has no spam/abuse protection | `ProjectModal.jsx` | **Flagged + fix** (SECURITY.md #2) |

The SSR audit also checked all 11 components touching `window`/`document`/`localStorage`:
**most are inside event handlers or `useEffect`, which are SSR-safe** (they only run on the
client). The one genuine render-time hazard was #7 above. So the per-component SSR work
remaining is much smaller than the raw grep count suggested.

---

## What's verified vs. what needs your environment

**Verified here (built + inspected):**
- The RR7 framework wiring builds clean (455 modules, exit 0).
- All 11 routes prerender to static HTML.
- Each product page ships its own `<title>`, `<meta description>`, `<link canonical>`,
  and `SoftwareApplication` JSON-LD — confirmed by reading the generated HTML.

**Cannot be verified in my sandbox (needs your assets/secrets) — not a code issue:**
- A full app build (components import `/assets/images/*` and `import.meta.env.*` — your
  images and `.env` aren't in scope here).
- The Supabase `action` refactor (needs live credentials to test).
- Font loading / FOUT (your `index.html` preconnects to Google Fonts but loads no font
  `<link>` — likely a layout-shift source; I'll address in the component pass once I see
  how fonts are referenced in CSS).

---

## Hosting decision (one toggle)

`react-router.config.js` currently has `ssr: true` + a `prerender` list, so every route is
baked to static HTML at build time AND a Node server is available. Because your routes are
fixed and content is static, you can go **fully static** (deploy to any CDN, nothing to
crash at runtime, cheapest hosting): set `ssr: false` and keep the `prerender` list. Leave
it as-is if you plan to add server-rendered dynamic data later.

---

## Recommended next phase (the component pass)

The foundation is done and proven. What remains is hardening the ~47 components and 30 CSS
files — and that genuinely should go component-by-component, because each needs to build and
hydrate cleanly to confirm it's right (handing you 47 untested rewrites would be the opposite
of what you asked for). Suggested order, highest-impact first:

1. `ProductPage.jsx` — apply the `useBreakpoint` fix (#7).
2. `ProjectModal.jsx` — server `action` + RLS + spam protection (SECURITY #1, #2).
3. `ChatWidget` / `BotpressChat` — collapse to one, lazy-load (SECURITY #3).
4. Fonts + CSS — chase remaining FOUC/layout-shift.
5. Structural tidy — group `components/ui` vs `components/sections`, `lib/`, `data/`.

Send me any one of these (or say "go") and I'll do it the same way: real fix, built and
checked, no placeholders.
