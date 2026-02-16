📄 src/handlers/membership.js
`javascript
import logger from "../utils/logger.js";

export default async function membership(event) {
  const { action, member, organization } = event.payload;

  logger.info(Membership ${action}: ${member.login} in ${organization.login});
}
`

