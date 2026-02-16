# Workflow Policy and Advisor

The Master Key app can act as a CI/CD advisor.

## Goals

- Detect slow or inefficient workflows
- Suggest caching and matrix strategies
- Identify missing concurrency controls
- Flag workflows that violate governance rules

## Implementation Hooks

- `services/workflows.js`:
  - `analyzeWorkflowJob(payload)`

This function can be extended to emit comments, open issues, or log advisory findings to a central dashboard.