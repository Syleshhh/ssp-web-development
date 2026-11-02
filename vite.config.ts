import { defineConfig, type ViteDevServer, type PreviewServer } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Deployment base.
//  - GitHub Pages (project site) serves under /ssp/  → default below.
//  - The production domain (solidstatepractice.com) serves at the root → build
//    with `VITE_DEPLOY_BASE=root npm run build` (the `root` alias avoids shells
//    that rewrite a bare "/"). Any other value is used verbatim.
// The React Router basename is derived from this at runtime via
// import.meta.env.BASE_URL, so switching domains needs no code changes.
const rawBase = process.env.VITE_DEPLOY_BASE
const base = !rawBase ? '/ssp/' : rawBase === 'root' || rawBase === '/' ? '/' : rawBase

/**
 * GitHub Pages has no server-side SPA rewrite: a hard refresh on /ssp/about
 * would 404. Copying the built index.html to 404.html makes Pages serve the
 * app for any unknown path, which then boots the router and renders the route.
 */
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      const index = resolve(dist, 'index.html')
      if (existsSync(index)) {
        copyFileSync(index, resolve(dist, '404.html'))
      }
    },
  }
}

/**
 * Dev/preview base redirects (only needed locally — GitHub Pages does this at
 * the host level, and a root deployment has no base to redirect):
 *   - the bare base "/ssp" (+ optional ?query/#hash) → "/ssp/"
 *   - any other page navigation outside the base (e.g. "/ss", "/") → "/ssp/",
 *     so unknown URLs land on the app (whose router then routes them home).
 * Only real document requests (GET + Accept: text/html) are redirected, so
 * Vite's own module/asset/HMR requests are left untouched.
 */
function redirectToBase() {
  const bare = base.replace(/\/$/, '')
  const attach = (server: ViteDevServer | PreviewServer) => {
    if (!bare) return // root deployment: nothing to redirect
    server.middlewares.use((req, res, next) => {
      const url = req.url ?? ''

      // Already under the app base → let Vite/the app handle it.
      if (url === base || url.startsWith(base)) return next()

      const redirect = (location: string) => {
        res.statusCode = 302
        res.setHeader('Location', location)
        res.end()
      }

      // Bare base → canonical trailing-slash base, preserving any ?query/#hash.
      if (url === bare || url.startsWith(`${bare}?`) || url.startsWith(`${bare}#`)) {
        return redirect(base + url.slice(bare.length))
      }

      // Any other page navigation outside the base → app home.
      const accept = req.headers.accept ?? ''
      if (req.method === 'GET' && accept.includes('text/html')) {
        return redirect(base)
      }

      next()
    })
  }
  return {
    name: 'redirect-to-base',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}

/**
 * Preload the self-hosted font so it is available at first paint. With the woff2
 * present before render, `font-display: optional` never swaps, which removes the
 * font-swap layout shift. The filename is content-hashed, so we read it from the
 * build bundle and inject a matching <link rel="preload"> into index.html.
 */
function preloadFont() {
  return {
    name: 'preload-font',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string, ctx: { bundle?: Record<string, unknown> }) {
        if (!ctx.bundle) return html
        const font = Object.keys(ctx.bundle).find((f) => f.endsWith('.woff2'))
        if (!font) return html
        return {
          html,
          tags: [
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'font',
                type: 'font/woff2',
                href: base + font,
                crossorigin: '',
              },
              injectTo: 'head-prepend' as const,
            },
          ],
        }
      },
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  // Auto-open the dev server at the configured base (http://localhost:5173/ssp/
  // by default) instead of "/", which the base config would otherwise reject.
  server: {
    open: base,
  },
  plugins: [react(), redirectToBase(), preloadFont(), spaFallback()],
})
