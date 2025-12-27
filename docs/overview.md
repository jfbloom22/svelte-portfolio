# Project overview

Static-first SvelteKit rebuild of [jonathanflower.com](https://www.jonathanflower.com), deployed to FastComet via FTP. The repo aims for “same vibe but more modern”, with projects authored locally (mdsvex) and WordPress powering the “Latest writing” list.

## Goals

- Fully prerendered (adapter-static) output in `build/`
- Near-identical look & feel, improved performance + maintainability
- Homepage + `/project/<slug>/` routes only
- “Latest writing” pulls the newest WordPress posts at build time (build fails if fetch fails)

## Commands

```bash
pnpm install          # install deps
pnpm dev              # local dev server
pnpm check            # type + lint checks
pnpm build            # production build (writes to build/)
pnpm preview          # preview build locally
```

## Environments

| Variable | Purpose | Default |
| --- | --- | --- |
| `WORDPRESS_API_BASE` | WordPress REST API base URL | `https://blog.jonathanflower.com` |
| `WORDPRESS_POST_LIMIT` | Number of posts to show on homepage | `5` |
| `WORDPRESS_FETCH_TIMEOUT_MS` | Timeout for build-time fetch | `5000` |

See `.env.example` for a starter file (copy to `.env` for local overrides).

## Content source of truth

- `src/content/projects/*.md` — mdsvex files with frontmatter drive `/project/<slug>/`
- `static/images/...` — project images/assets (reference via absolute `/images/...` URLs)

## Key directories

| Path | Description |
| --- | --- |
| `docs/` | Reference docs, phased plan, deployment notes |
| `src/routes/` | SvelteKit routes (homepage + project detail) |
| `src/lib/content/` | Content loader utilities (projects + WordPress) |
| `src/styles/` | Design tokens source of truth (see `src/styles/tokens.css`) |

## Deployment summary

- CI/CD: GitHub Actions
- Deployment method: FTP (SamKirkland/FTP-Deploy-Action)
- Remote target: `jonathanflower.com/` folder at FastComet account root (serves apex domain)
