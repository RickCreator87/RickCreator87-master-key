📄 src/handlers/repository.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function repository(event) {
  const { action, repository } = event.payload;

  logger.info(Repository ${action}: ${repository.full_name});

  await aiDispatcher("repository_event", {
    repo: repository.full_name,
    action
  });
}
`

