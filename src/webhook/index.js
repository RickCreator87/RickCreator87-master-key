// src/webhooks/index.js
import { registerInstallationHandlers } from "./installation.js";
import { registerRepoEventHandlers } from "./repo-events.js";
import { registerOrgEventHandlers } from "./org-events.js";

export function registerWebhookHandlers({ webhooks, context }) {
  registerInstallationHandlers({ webhooks, context });
  registerRepoEventHandlers({ webhooks, context });
  registerOrgEventHandlers({ webhooks, context });

  console.log("[master-key] Webhook handlers registered.");
}