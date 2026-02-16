📄 src/handlers/issues.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function issues(event) {
  const { action, issue, repository } = event.payload;

  logger.info(Issue ${action} on ${repository.full_name});

  await aiDispatcher("issue_event", {
    repo: repository.full_name,
    action,
    issueNumber: issue.number,
    author: issue.user.login
  });
}
`

