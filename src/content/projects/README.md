# Projects content

Each project is authored as Markdown (mdsvex) so it can be prerendered into a static page.

## File naming

- `src/content/projects/<slug>.md`
- The `<slug>` becomes the route: `/project/<slug>/`

## Frontmatter

Use frontmatter at the top of the file:

```md
---
title: Mintcraft
summary: Short homepage blurb for the project list.
role: Lead Engineer
year: 2024
tags:
  - SvelteKit
  - AI
heroImage: /images/projects/mintcraft/hero.webp
---
```

