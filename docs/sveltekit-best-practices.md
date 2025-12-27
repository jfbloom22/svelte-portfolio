# SvelteKit best practices (static-first portfolio)

This repo targets a **static-first** SvelteKit setup (SSG) suitable for a portfolio site like `jonathanflower.com`: fast, SEO-friendly, and low-ops.

## Rendering model (SSG)

- Use `@sveltejs/adapter-static` and **prerender** pages at build time.
- Avoid SPA fallback (`adapter-static` `fallback`) unless you *must* support non-prerenderable routes — it has real SEO/perf downsides.
- Prefer server-side `load` (`+page.server.ts`) for build-time content assembly, even for a static site.

**Recommended configuration**

- `svelte.config.js` should configure `adapter-static` with explicit options only if your host needs it (common defaults shown in SvelteKit docs: `pages: 'build'`, `assets: 'build'`, `fallback: undefined`).
- `src/routes/+layout.ts` (or `+layout.js`) should typically export `prerender = true` for “SSG by default”.

## URL strategy (SEO + durability)

- Preserve existing Webflow URLs where possible (`/blog-posts/...`, `/blog-posts/category/...`) to keep SEO equity.
- Decide `trailingSlash` early based on the target host:
  - If the host does **not** serve `/a.html` when requested as `/a`, use `trailingSlash: 'always'` so routes emit `/a/index.html`.
  - Otherwise, keep the default behavior and let SvelteKit normalize.

## Head metadata (SEO)

- Every route should have a unique `<title>` and `<meta name="description">`.
- Put shared defaults in `src/routes/+layout.svelte` and override per-page via `load` data.
- Add OpenGraph and Twitter card tags for sharable pages (homepage, project pages, posts).
- Provide a sitemap (either generated statically at build time, or via a prerendered `sitemap.xml` route).

## Content architecture (blog + projects)

Recommended approaches (static-friendly):

1. **mdsvex** for posts/projects written in Markdown with optional Svelte components.
2. **Typed data (JSON/TS)** when content is short and structured.

Suggested structure:

- `src/content/blog/*.md` (+ frontmatter)
- `src/content/projects/*.md` or `src/content/projects/*.json`
- `src/lib/content/` for loaders, schema validation, and slug helpers

Principles:

- Keep content loading deterministic and build-time safe.
- Avoid calling external APIs at runtime in a static build.

## Styling + design tokens

- Extract core tokens (colors/typography) from the Webflow CSS into:
  - CSS custom properties in a single global stylesheet, and/or
  - a Tailwind theme mapping (if staying with Tailwind utilities)
- Prefer semantic HTML and keep components small; avoid “class soup” duplication by factoring repeated patterns into components.

## Interactivity (hydrate only what needs it)

- Default to SSR/SSG markup only; add client JS only for:
  - animations that can’t be done in CSS,
  - small interactive widgets,
  - progressive enhancement on forms.
- Keep interactive islands isolated so the rest of the page stays static.

## Forms (static deployment reality)

If you want a working “contact me” form on a static deployment, pick one:

- A hosted form provider (Formspree, Basin, etc.)
- Platform-native forms (Netlify Forms, Cloudflare Pages Functions + email, etc.)
- A small API endpoint (SvelteKit server route) **only if** you deploy with an SSR-capable adapter

Decide early because it affects adapter choice and secrets handling.

## Analytics

- Load analytics non-blockingly (defer/async) and consider a web worker approach (e.g. Partytown) if you want to keep main-thread impact near-zero.
- Keep it configurable via environment variables so staging doesn’t pollute prod metrics.

## Testing + CI

- Unit test: utilities + content loaders (Vitest).
- E2E test: critical paths (Playwright):
  - homepage renders,
  - blog index + one post renders,
  - project page renders,
  - no console errors, basic accessibility smoke checks if desired.

## AI-assisted development workflow

When prompting an AI agent for changes in this repo, include:

- **Target deployment** (static-only vs SSR-capable).
- **URL constraints** (preserve existing paths).
- **Source of truth** (`jonathan-flower-portfolio.webflow/` for design/content reference).
- **“Hydration budget”** (what must stay static vs what can run on client).
