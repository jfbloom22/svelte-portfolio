# Phased plan (jonathanflower.com → SvelteKit static)

This repo is a **static-only** SvelteKit portfolio (SSG) deployed to **FastComet**. The goal is a **similar-or-better, more modern** clone of `jonathanflower.com` with **project pages** as first-class content and the **latest 5 WordPress posts** surfaced on the homepage.

## Constraints (non-negotiables)

- Static-only output (no backend/runtime server required).
- Build should **fail** if the WordPress “latest posts” fetch fails (freshness > availability).
- Tailwind stays (Tailwind v4 + CSS variables theme).
- External blog lives on WordPress (`https://blog.jonathanflower.com`).
- Deploy target on FastComet: **account root** folder `jonathanflower.com/` is mapped to serve the apex domain.

## Key decisions + notes

### Deployment method

- We will deploy via **FTP** from GitHub Actions using `SamKirkland/FTP-Deploy-Action`.
- Use `dangerous-clean-slate: true` to ensure remote `jonathanflower.com/` exactly matches local `build/`.

Note: if FastComet supports **FTPS**, prefer it over plain FTP for transport security, but the workflow is otherwise identical.

### Trailing slash strategy

We use `trailingSlash = 'always'` so static output maps cleanly to `.../index.html` on typical shared hosting.

### Tailwind tokens

- Keep the original Webflow token names/values (e.g. `--black`, `--dim-grey`, `--text-black`, `--blue`) as the canonical source.
- Tailwind should reference those variables rather than inventing a parallel color system.

### Fonts

- Use current best practice: **self-host Inter** (e.g. via `@fontsource/inter`) and ensure `font-display: swap` (avoid runtime WebFont loader).

---

## Phase 0 — Project hygiene (do now)

- [ ] Add `docs/` index with what/why/how (short).
- [ ] Add `docs/decisions/` (ADR style) and record:
  - [ ] static-only rationale
  - [ ] trailingSlash choice
  - [ ] “fail build if WP fetch fails”
  - [ ] FTPS vs SFTP decision
- [ ] Add `.env.example` and document which values are required in CI.
- [ ] Ensure `pnpm check` + `pnpm build` are the “golden” commands for contributors.

Deliverable: new contributors can run `pnpm i`, `pnpm check`, `pnpm build` and understand the repo in <10 minutes.

---

## Phase 1 — Deployment pipeline (GitHub Actions → FastComet)

### 1.1 Confirm deploy target

- [ ] Confirm the exact remote root path (the directory listing you see after FTP login) contains `jonathanflower.com/`.
- [ ] Confirm that deploying into remote `jonathanflower.com/` (account root) is isolated and safe to wipe.

### 1.2 Workflow

- [ ] Create `.github/workflows/deploy.yml`:
  - [ ] checkout
  - [ ] setup-node (Node 20)
  - [ ] `pnpm install --frozen-lockfile`
  - [ ] `pnpm check`
  - [ ] `pnpm build`
  - [ ] deploy `build/` → remote `jonathanflower.com/` via FTP

Suggested action configuration (adapt secrets + paths):

```yaml
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./build/
          server-dir: ./jonathanflower.com/
          dangerous-clean-slate: true
```

### 1.3 Safety rules

- [ ] Use a dedicated remote folder (`jonathanflower.com/`) so “clean slate” can’t delete other sites.
- [ ] Use `dangerous-clean-slate: true` only if you’re confident `server-dir` is isolated (we are choosing “dangerous” for deterministic deploys).
- [ ] Add a “manual deploy” trigger (`workflow_dispatch`) for emergencies.

Deliverable: merge to `main` deploys a static site reliably with no manual steps.

---

## Phase 2 — Tailwind theme (CSS variables + structured layers)

Goal: match the original site’s “vibe” with a maintainable theme.

### 2.1 Token extraction

- [ ] Extract tokens from Webflow CSS:
  - colors (`:root` vars)
  - type scale (h1–h6 + body)
  - spacing scale (section padding rules)
  - border radii, shadows
- [ ] Create `src/styles/tokens.css` defining CSS variables (example):
  - `--color-bg`, `--color-fg`, `--color-muted`, `--color-accent`
  - `--font-sans`, `--leading-*`, `--tracking-*`

### 2.2 Tailwind wiring pattern

- [ ] Keep Tailwind entrypoint minimal (one import + layers).
- [ ] Map Tailwind utilities to variables for consistency:
  - background/text/border colors use CSS vars
  - typography utilities use the tokenized scale
- [ ] Add semantic component classes where it reduces duplication (`.jf-section`, `.jf-card`, `.jf-heading`, etc.).

### 2.3 Motion primitives (modern vibe)

- [ ] Define a small animation system:
  - durations/easings as CSS vars
  - `prefers-reduced-motion` safe defaults
  - IntersectionObserver enhancement only for elements that benefit

Deliverable: a stable token/theme layer that prevents one-off styling drift.

---

## Phase 3 — Information architecture + content workflow

### 3.1 Projects as mdsvex

- [ ] Lock a frontmatter schema (required fields) and validate it at build time.
- [ ] Decide image strategy per project (folder per project, naming rules).

### 3.2 Homepage content blocks

- [ ] Keep the site minimal: homepage + projects only.
- [ ] Make the homepage sections mirror the original (hero → bio → skills → projects → social).
- [ ] Add “Latest writing” (WordPress) with:
  - [ ] `target="_blank"` + `rel="noopener noreferrer"`
  - [ ] build fails if fetch fails (already a decision; enforce in CI)

Deliverable: content changes are “edit markdown, commit, deploy”.

---

## Phase 4 — SEO + static correctness

- [ ] Shared SEO defaults in root layout (title template, description fallback).
- [ ] Per-project SEO (title/description/canonical).
- [ ] Add `sitemap.xml` generated from known static routes (home + projects).
- [ ] Add `robots.txt`.

Deliverable: stable URLs, canonical metadata, and basic indexing hygiene.

---

## Phase 5 — Quality gates

- [ ] Ensure `pnpm check` and `pnpm build` run in CI.
- [ ] Decide test scope:
  - [ ] Node-only unit tests by default
  - [ ] Playwright e2e in CI (optional) with explicit `playwright install`

Deliverable: CI failures are actionable and predictable (no flaky “browser missing” surprises).
