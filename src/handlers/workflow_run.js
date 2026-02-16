📄 src/handlers/workflow_run.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function workflowRun(event) {
  const { workflow_run, action, repository } = event.payload;

  logger.info(Workflow run ${action} on ${repository.full_name});

  await aiDispatcher("workflowrunevent", {
    repo: repository.full_name,
    workflowName: workflow_run.name,
    status: workflow_run.status,
    conclusion: workflow_run.conclusion
  });
}
`

