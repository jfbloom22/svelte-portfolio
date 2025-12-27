# Deploying to FastComet via FTP

## Overview

- Hosting: FastComet shared hosting
- Domain: `jonathanflower.com`
- Document root: `jonathanflower.com/` at account root
- Deployment method: GitHub Actions → `SamKirkland/FTP-Deploy-Action`

## Required secrets (GitHub repo → Settings → Environments → `prod`)

| Secret | Description |
| --- | --- |
| `FTP_SERVER` | FastComet FTP host (e.g. `ftp.yourdomain.com` or server hostname) |
| `FTP_USERNAME` | FTP username (usually your cPanel username) |
| `FTP_PASSWORD` | FTP password |

Optional: `FTP_PORT` if FastComet assigns a non-default port (defaults to `21`).

## Workflow summary

1. On push to `main`, GitHub Actions runs `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`.
2. After a successful build, `SamKirkland/FTP-Deploy-Action@v4.3.5` uploads `./build/` → `./jonathanflower.com/` via FTP (job targets environment `prod` to access those secrets).
3. `dangerous-clean-slate: true` ensures the remote folder mirrors local output (it deletes anything not in the upload).

## Manual deploy

1. `pnpm check && pnpm build`
2. Upload contents of `build/` to the remote `jonathanflower.com/` folder using your preferred FTP client (FileZilla, Transmit, etc.)

## Notes

- If FastComet enables FTPS on your account, edit the workflow to set `protocol: ftps` for encrypted transport.
- Avoid storing non-site files under `jonathanflower.com/` since the deploy action wipes it every deploy.
- Keep WordPress reachable from CI; if the `pnpm build` step can’t fetch latest posts, the deploy will fail by design.
