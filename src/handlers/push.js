📄 src/handlers/push.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function push(event) {
  const { repository, ref, pusher } = event.payload;

  logger.info(Push event on ${repository.full_name} by ${pusher.name});

  await aiDispatcher("push_event", {
    repo: repository.full_name,
    ref,
    pusher: pusher.name
  });
}
`
