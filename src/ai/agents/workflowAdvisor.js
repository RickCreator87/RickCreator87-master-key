📄 src/ai/agents/workflowAdvisor.js
This agent analyzes CI/CD workflows and recommends optimizations.

`javascript
import fs from "fs";
import path from "path";
import logger from "../../utils/logger.js";

const promptPath = path.join(process.cwd(), "src", "ai", "prompts", "workflow_advisor.md");
const systemPrompt = fs.readFileSync(promptPath, "utf8");

export default async function workflowAdvisor(taskType, context) {
  logger.info(Workflow Advisor evaluating: ${taskType});

  // Placeholder for LLM call
  const response = {
    summary: Workflow Advisor analyzed workflows for '${context.repo}'.,
    workflow_issues: [],
    recommended_optimizations: [],
    confidence: 0.87
  };

  logger.info("Workflow Advisor output:", response);
  return response;
}
`

