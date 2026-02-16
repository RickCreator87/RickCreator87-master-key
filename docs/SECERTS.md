---

### `docs/SECRETS.md`

```md
# Secrets Management

The Master Key app centralizes secret expectations and synchronization.

## Responsibilities

- Validate that required secrets exist for each org/repo
- Synchronize secrets from a master profile to child orgs
- Optionally rotate secrets on a schedule

## Implementation Hooks

- `services/secrets.js`:
  - `syncForInstallation(installation)`
  - `validateOrgSecrets(orgLogin)`
  - `rotateSecrets(orgLogin)`

These functions are intentionally left as stubs for you to wire into your actual secret source of truth.