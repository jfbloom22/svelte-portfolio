You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## Project context (jonathanflower.com rewrite)

### Goal

Clone `jonathanflower.com` (Webflow original) into this SvelteKit project with:

- Near-identical look/feel and content
- Fast static delivery (SSG via `@sveltejs/adapter-static`)
- Strong SEO (stable URLs, metadata, OpenGraph, sitemap)
- Minimal client-side JS (avoid hydration unless interactive)

### Source of truth

- The exported Webflow site lives in `jonathan-flower-portfolio.webflow/` (HTML/CSS/images/JS).
- Prefer extracting design tokens (colors, typography, spacing) from `jonathan-flower-portfolio.webflow/css/jonathan-flower-portfolio.webflow.css` and recreating layout/components natively in SvelteKit (rather than porting Webflow’s runtime JS).

### URL parity (SEO)

Preserve existing public paths where feasible (e.g. `/blog-posts/...`, `/blog-posts/category/...`) to avoid breaking inbound links. If any paths change, add explicit redirects.

### Content strategy (recommended)

- Blog posts and projects should be authored as local content (Markdown/mdsvex or typed JSON) and rendered at build time.
- Images should live in `static/` and be referenced with stable URLs; prefer modern formats (AVIF/WebP) when possible.

### Non-static features to clarify

The current Webflow site includes a contact form and analytics; in a static-only deployment these require third-party services (e.g. hosted forms/email provider, analytics script strategy).
