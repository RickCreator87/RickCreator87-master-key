📄 docs/PERMISSIONS.md
`markdown

Permissions & Security Model

The Master Key GitHub App requires elevated permissions because it acts as the
central orchestrator for multiple organizations.

---

Permission Categories

Read Permissions
- metadata
- contents
- organization_plan

Write Permissions
- actions
- checks
- deployments
- issues
- organization_administration
- organization_secrets
- repository_hooks
- workflows

These permissions are required for:
- Secret synchronization
- Workflow validation
- Governance enforcement
- Multi-org automation

---

Security Principles

- No destructive actions are performed automatically
- All AI output is advisory unless explicitly configured otherwise
- All secrets are loaded from environment variables
- No secrets are stored in the repository
`


