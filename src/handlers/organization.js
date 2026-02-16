📄 src/handlers/organization.js
`javascript
import logger from "../utils/logger.js";

export default async function organization(event) {
  const { action, membership, organization } = event.payload;

  logger.info(Organization event: ${action} in ${organization.login});

  if (membership) {
    logger.info(Member: ${membership.user.login});
  }
}
`

