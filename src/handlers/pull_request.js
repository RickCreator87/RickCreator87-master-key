📄 src/handlers/pull_request.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function pullRequest(event) {
  const { action, pull_request, repository } = event.payload;

  logger.info(PR ${action} on ${repository.full_name});

  await aiDispatcher("pullrequestevent", {
    repo: repository.full_name,
    action,
    prNumber: pull_request.number,
    author: pull_request.user.login
  });
}
`

