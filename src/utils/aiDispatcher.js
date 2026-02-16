📄 src/utils/aiDispatcher.js
This is the central AI routing engine.  
Every handler calls this to send tasks to the correct AI agent.

`javascript
import logger from "./logger.js";
import normalizeEvent from "./eventNormalizer.js";
import orchestrator from "../ai/agents/orchestrator.js";
import repoGuardian from "../ai/agents/repoGuardian.js";
import governanceValidator from "../ai/agents/governanceValidator.js";
import workflowAdvisor from "../ai/agents/workflowAdvisor.js";
import orgMap from "../../config/org-map.json" assert { type: "json" };

export default async function aiDispatcher(taskType, context) {
  logger.info(AI Dispatch: ${taskType});

  const { repo } = context;

  let agent = orchestrator; // default fallback

  if (repo) {
    const org = repo.split("/")[0];
    const orgConfig = orgMap.organizations[org];

    if (orgConfig) {
      switch (orgConfig.ai_profile) {
        case "repoGuardian":
          agent = repoGuardian;
          break;
        case "governanceValidator":
          agent = governanceValidator;
          break;
        case "workflowAdvisor":
          agent = workflowAdvisor;
          break;
        default:
          agent = orchestrator;
      }
    }
  }

  try {
    await agent(taskType, context);
  } catch (err) {
    logger.error("AI agent error:", err);
  }
}
`

