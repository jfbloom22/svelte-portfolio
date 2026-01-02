# Jonathan Flower — Portfolio (SvelteKit)

This repo hosts my portfolio site, rebuilt from a Webflow original into a fast, static SvelteKit site.

Live site: https://www.jonathanflower.com

## Why this exists

I migrated the site from Webflow to SvelteKit to get:

- static delivery with minimal client JS
- lower cost of hosting
- higher performance

## Features

- Author content in Markdown with custom Svelte components via mdsvex
- Pull latest WordPress posts at build time
- Automatic deployment via GitHub Actions to my shared hosting server via FTP

## Tech & architecture (medium detail)

- SvelteKit + Svelte 5
- Static site generation via `@sveltejs/adapter-static`
- Content in repo (projects as mdsvex/Markdown with custom components)


## Process note (Svelte MCP)

During the migration I used the Svelte MCP server to quickly reference Svelte 5 and SvelteKit documentation.  The Auto Fixer tool was also very helpful.  learn more: https://svelte.dev/docs/mcp/overview

## Local development

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```

## Project docs

More detail lives in `docs/`:

- `docs/overview.md` — project goals, commands, env vars
- `docs/PHASED-PLAN.md` — roadmap
- `docs/content-authoring.md` — how to work with project content
- `docs/deploy-fastcomet-ftp.md` — CI/CD + manual deploy steps
- `docs/decisions/` — lightweight decision records
