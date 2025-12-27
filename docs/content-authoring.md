# Content authoring (projects)

Projects are authored as mdsvex (`.md` or `.svx`) files under `src/content/projects/`. Each file becomes a prerendered `/project/<slug>/` page.

## File naming

- File name = slug. Example: `mintcraft.md` → `/project/mintcraft/`
- Stick to lowercase, hyphen-separated file names.

## Frontmatter schema

```yaml
---
title: "Mintcraft"
summary: "One-line blurb for homepage cards."
role: "Software Architect"
year: 2025            # number or string
tags:
  - AI
  - Product
heroImage: /images/projects/mintcraft/hero.webp
---
```

All fields except `heroImage` are optional, but aim to provide at least `title`, `summary`, `year`.

## Body content

- Use Markdown; mdsvex lets you embed Svelte components if needed.
- Keep headings hierarchical (start with `##` inside project pages).
- Store images in `static/images/projects/<slug>/...` and reference via absolute `/images/...`.

## Adding a project

1. Create `src/content/projects/<slug>.md`
2. Add frontmatter + body
3. Commit images under `static/images/projects/<slug>/`
4. Run `pnpm check && pnpm build`
5. Deploy (CI/CD handles FTP upload)

## Removing/renaming projects

- Deleting a file will remove the page from the static build.
- Renaming the file changes the slug → add redirects if SEO matters (FastComet’s `.htaccess` or Cloudflare rules if applicable).

## Future enhancements

- Add validation to fail the build when required fields are missing.
- Consider storing structured metadata (JSON/TS) for listing views if we need more complex layouts.
