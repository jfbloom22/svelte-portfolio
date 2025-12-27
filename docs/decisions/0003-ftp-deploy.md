# 0003 — FTP deploy via GitHub Actions

- **Status:** accepted (2025-12-27)
- **Context:** FastComet hosting exposes FTP access to the account root; the domain `jonathanflower.com` is mapped to the folder `jonathanflower.com/`. Using GitHub Actions keeps deploys automated.
- **Decision:** Use `SamKirkland/FTP-Deploy-Action@v4.3.5` from GitHub Actions with password-based FTP, targeting `jonathanflower.com/` and enabling `dangerous-clean-slate`.
- **Consequences:**
  - ✅ Fully automated deploy on `main`
  - ✅ Remote folder always mirrors local `build/`
  - ⚠️ Requires storing FTP credentials as GitHub secrets
  - ⚠️ `dangerous-clean-slate` deletes everything under `server-dir` each deploy — ensure only site files live there
- **Notes:** If FastComet enables FTPS, switch the action’s protocol for encrypted transport. For SFTP, we’d need a stable runner IP or self-hosted runner.
