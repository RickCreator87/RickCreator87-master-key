// src/app.js
import { registerWebhookHandlers } from "./webhooks/index.js";
import { loadPermissionsConfig, loadOrgMapConfig } from "./config-loader.js";
import { createSecretsService } from "./services/secrets.js";
import { createGovernanceService } from "./services/governance.js";
import { createHygieneService } from "./services/hygiene.js";
import { createWorkflowService } from "./services/workflows.js";

export async function createApp({ webhooks }) {
  const permissions = await loadPermissionsConfig();
  const orgMap = await loadOrgMapConfig();

  const context = {
    permissions,
    orgMap,
    services: {},
  };

  context.services.secrets = createSecretsService({ context });
  context.services.governance = createGovernanceService({ context });
  context.services.hygiene = createHygieneService({ context });
  context.services.workflows = createWorkflowService({ context });

  registerWebhookHandlers({ webhooks, context });

  console.log("[master-key] App initialized with config-driven permissions and org mapping.");
  return context;
}