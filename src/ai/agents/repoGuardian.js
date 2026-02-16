📄 src/ai/agents/repoGuardian.js
This agent handles repo hygiene, structure, and consistency.

`javascript
import fs from "fs";
import path from "path";
import logger from "../../utils/logger.js";

const promptPath = path.join(process.cwd(), "src", "ai", "prompts", "repo_guardian.md");
const systemPrompt = fs.readFileSync(promptPath, "utf8");

export default async function repoGuardian(taskType, context) {
  logger.info(Repo Guardian analyzing: ${taskType});

  // Placeholder for LLM call
  const response = {
    summary: Repo Guardian evaluated repository '${context.repo}'.,
    issues_detected: [],
    recommended_fixes: [],
    confidence: 0.88
  };

  logger.info("Repo Guardian output:", response);
  return response;
}
`


