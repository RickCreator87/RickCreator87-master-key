📄 docs/ARCHITECTURE.md
`markdown

Master Key Architecture

The Master Key GitHub App is the central automation and governance engine for
the GitDigital ecosystem. It provides multi-org orchestration, AI-driven
analysis, and secure automation.

---

1. High-Level Overview

The system consists of:

- GitHub App Core
  - Webhook receiver
  - Event router
  - Installation management
  - Permission enforcement

- AI Multi-Agent System
  - Orchestrator
  - Repo Guardian
  - Governance Validator
  - Workflow Advisor

- Utility Layer
  - Logging
  - Secret loading
  - GitHub API clients
  - Event normalization

- Configuration Layer
  - Permissions
  - Webhook routing
  - Org mapping

---

2. Data Flow

`
GitHub Event
     ↓
Webhook Receiver
     ↓
Event Router
     ↓
AI Dispatcher
     ↓
Selected AI Agent
     ↓
Structured JSON Output
`

---

3. Directory Structure

See the root-level README for the full repository layout.

---

4. Security Model

- All secrets loaded from environment variables
- No secrets stored in the repository
- Strict permission scoping
- Deterministic AI output for auditability

---

5. Multi-Org Support

The org-map.json file defines:
- Org roles
- AI agent routing
- Priority levels

This enables the Master Key to scale across multiple GitDigital organizations.
`


