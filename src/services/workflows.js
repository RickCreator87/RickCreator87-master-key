// src/services/workflows.js
export function createWorkflowService({ context }) {
  async function analyzeWorkflowJob(payload) {
    const repo = payload.repository.full_name;
    const jobName = payload.workflow_job.name;
    console.log("[master-key:workflows] Analyzing workflow job:", repo, jobName);

    // TODO: detect slow jobs, missing cache, missing matrix, etc.
  }

  return {
    analyzeWorkflowJob,
  };
}