# 0002 — WordPress latest posts (build-time, fail on error)

- **Status:** accepted (2025-12-27)
- **Context:** Blog content now lives on WordPress (`blog.jonathanflower.com`). Homepage should showcase the latest 5 posts without duplicating content locally.
- **Decision:** Fetch the latest posts during `+page.server.ts` load with configurable base URL, limit, and timeout. Build fails if the fetch fails (freshness preferred over availability).
- **Consequences:**
  - ✅ Always shows the newest posts at deploy time
  - ✅ Avoids client-side hydration or runtime fetches
  - ⚠️ Builds require outbound network access to WordPress; if WP is down, deploy is blocked
  - ⚠️ CI/CD must allow network egress (GitHub Actions does by default)
- **Notes:** To relax the constraint later, we could cache the most recent successful response in the repo or allow a “warning but continue” mode behind an env flag.
