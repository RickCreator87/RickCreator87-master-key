📄 src/handlers/issue_comment.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function issueComment(event) {
  const { action, comment, issue, repository } = event.payload;

  logger.info(Comment ${action} on issue #${issue.number});

  await aiDispatcher("issuecommentevent", {
    repo: repository.full_name,
    issueNumber: issue.number,
    commentAuthor: comment.user.login,
    body: comment.body
  });
}
`

