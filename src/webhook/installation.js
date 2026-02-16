// src/webhooks/installation.js
export function registerInstallationHandlers({ webhooks, context }) {
  webhooks.on("installation.created", async ({ payload }) => {
    const account = payload.installation.account;
    console.log("[master-key] App installed on:", account.login);

    await context.services.secrets.syncForInstallation(payload.installation);
  });

  webhooks.on("installation.deleted", async ({ payload }) => {
    const account = payload.installation.account;
    console.log("[master-key] App uninstalled from:", account.login);

    // Optional: cleanup or logging
  });
}