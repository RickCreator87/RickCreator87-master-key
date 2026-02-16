📄 src/handlers/installation.js
`javascript
import logger from "../utils/logger.js";
import aiDispatcher from "../utils/aiDispatcher.js";

export default async function installation(event) {
  const { action, installation } = event.payload;

  logger.info(Installation event: ${action});

  if (action === "created") {
    await aiDispatcher("installation_created", {
      installationId: installation.id,
      account: installation.account.login
    });
  }

  if (action === "deleted") {
    await aiDispatcher("installation_deleted", {
      installationId: installation.id
    });
  }
}
`
