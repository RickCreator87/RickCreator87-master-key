// src/webhooks/org-events.js
export function registerOrgEventHandlers({ webhooks, context }) {
  webhooks.on("organization.member_added", async ({ payload }) => {
    console.log("[master-key] Org member added:", payload.membership.user.login);
    // Optional: governance checks on membership
  });

  webhooks.on("organization.member_removed", async ({ payload }) => {
    console.log("[master-key] Org member removed:", payload.membership.user.login);
  });

  webhooks.on("team.added_to_repository", async ({ payload }) => {
    console.log("[master-key] Team added to repo:", payload.repository.full_name);
    await context.services.governance.ensureBaselineForRepo(payload.repository);
  });
}