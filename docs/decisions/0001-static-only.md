# 0001 — Static-only SvelteKit build

- **Status:** accepted (2025-12-27)
- **Context:** FastComet FTP hosting is optimized for static sites. Original Webflow site was static; we only need marketing + portfolio pages.
- **Decision:** Use `@sveltejs/adapter-static` with `prerender = true` and `trailingSlash = 'always'`. No SSR endpoints or runtime data dependencies.
- **Consequences:**
  - ✅ Simpler hosting + zero backend ops
  - ✅ Predictable deployment (`build/` upload)
  - ⚠️ Any dynamic features (forms, live data) must rely on third-party APIs or client-side enhancement
- **Notes:** If future requirements need server logic (contact form, gated content), reconsider adapter choice or add an external service.
