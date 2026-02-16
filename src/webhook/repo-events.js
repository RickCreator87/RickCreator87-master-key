// src/webhooks/repo-events.js
export function registerRepoEventHandlers({ webhooks, context }) {
  webhooks.on("repository.created", async ({ payload }) => {
    const repo = payload.repository.full_name;
    console.log("[master-key] Repository created:", repo);

    await context.services.governance.ensureBaselineForRepo(payload.repository);
    await context.services.hygiene.ensureRepoHygiene(payload.repository);
  });

  webhooks.on("repository.deleted", async ({ payload }) => {
    console.log("[master-key] Repository deleted:", payload.repository.full_name);
  });

  webhooks.on("push", async ({ payload }) => {
    const repo = payload.repository.full_name;
    console.log("[master-key] Push event on:", repo);

    await context.services.hygiene.checkPush(payload);
  });

  webhooks.on("workflow_job.completed", async ({ payload }) => {
    const repo = payload.repository.full_name;
    console.log("[master-key] Workflow job completed on:", repo);

    await context.services.workflows.analyzeWorkflowJob(payload);
  });
}