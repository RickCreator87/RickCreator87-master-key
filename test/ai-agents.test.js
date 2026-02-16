📄 test/ai-agents.test.js
This test ensures each AI agent returns valid structured JSON.

`javascript
import orchestrator from "../src/ai/agents/orchestrator.js";
import repoGuardian from "../src/ai/agents/repoGuardian.js";
import governanceValidator from "../src/ai/agents/governanceValidator.js";
import workflowAdvisor from "../src/ai/agents/workflowAdvisor.js";

describe("AI Agents", () => {
  const context = { repo: "TestOrg/TestRepo" };

  it("orchestrator returns valid output", async () => {
    const result = await orchestrator("test_task", context);
    expect(result).toHaveProperty("summary");
    expect(result).toHaveProperty("recommended_action");
  });

  it("repoGuardian returns valid output", async () => {
    const result = await repoGuardian("test_task", context);
    expect(result).toHaveProperty("summary");
    expect(result).toHaveProperty("issues_detected");
  });

  it("governanceValidator returns valid output", async () => {
    const result = await governanceValidator("test_task", context);
    expect(result).toHaveProperty("summary");
    expect(result).toHaveProperty("violations");
  });

  it("workflowAdvisor returns valid output", async () => {
    const result = await workflowAdvisor("test_task", context);
    expect(result).toHaveProperty("summary");
    expect(result).toHaveProperty("workflow_issues");
  });
});
`
