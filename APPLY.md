# APPLY — read this first

This bundle mirrors your project's folder layout. Applying it is 3 steps.

## 1. Extract over your project root
Unzip into `C:\Users\kartik\Desktop\web\entropicsystem\` and let it MERGE/overwrite.
It will create/replace:

```
package.json                       (replaces — corrected deps + scripts)
react-router.config.js             (new)
vite.config.js                     (replaces)
public/robots.txt                  (new)
public/sitemap.xml                 (new)
src/root.jsx                       (replaces)
src/routes.js                      (new)
src/routes/home.jsx                (new)
src/routes/solutions.jsx           (new)
src/routes/solutions.layer.jsx     (new)
src/routes/product.jsx             (new)
src/routes/not-found.jsx           (new)
src/components/ProductPage.jsx     (replaces — hydration fix)
src/components/ProjectModal.jsx    (replaces — security hardening)
src/components/ChatWidget.jsx      (replaces — consolidated, lazy)
src/hooks/useMediaQuery.js         (new)
src/hooks/useBreakpoint.js         (new — optional helper)
src/lib/loadScript.js              (new)
src/styles/variables.css           (replaces)
src/styles/base.css                (replaces)
```

## 2. DELETE these old files (extracting cannot remove them)
These are replaced by the new architecture and will cause confusion or errors if left:

```
src/main.jsx          ← entry is now src/root.jsx
index.html            ← document shell is now in src/root.jsx
src/App.jsx           ← replaced by src/root.jsx + src/routes.js
src/components/BotpressChat.jsx   ← dead duplicate of ChatWidget
```

(PowerShell, from project root:)
```powershell
Remove-Item src\main.jsx, index.html, src\App.jsx, src\components\BotpressChat.jsx -ErrorAction SilentlyContinue
```

## 3. Install deps + run
```powershell
npm uninstall react-router-dom vite-prerender-plugin motion @vitejs/plugin-react
npm i react-router@7.17.0 @react-router/node@7.17.0 @react-router/serve@7.17.0 isbot @fontsource-variable/inter
npm i -D @react-router/dev@7.17.0
npm run dev
```

Also: project-wide find/replace `from "react-router-dom"` → `from "react-router"` in any
of YOUR other components that still import it (the files in this bundle are already done).

## If you still get an ENOENT
It means a file `src/routes.js` references isn't on disk. List any missing ones:
```powershell
Select-String -Path src\routes.js -Pattern '"routes/([^"]+)"' -AllMatches |
  ForEach-Object { $_.Matches } |
  ForEach-Object { "src/routes/" + $_.Groups[1].Value } |
  Where-Object { -not (Test-Path $_) }
```
Nothing printed = all present.
