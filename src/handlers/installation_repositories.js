📄 src/handlers/installation_repositories.js
`javascript
import logger from "../utils/logger.js";

export default async function installationRepositories(event) {
  const { action, repositoriesadded, repositoriesremoved } = event.payload;

  logger.info(Installation repositories event: ${action});

  if (repositories_added?.length) {
    logger.info("Repos added:", repositoriesadded.map(r => r.fullname));
  }

  if (repositories_removed?.length) {
    logger.info("Repos removed:", repositoriesremoved.map(r => r.fullname));
  }
}
`
