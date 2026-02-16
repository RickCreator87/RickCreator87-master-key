📄 src/utils/secretLoader.js
Loads secrets from environment variables and validates them.

`javascript
import dotenv from "dotenv";
import logger from "./logger.js";

dotenv.config();

export function loadSecrets() {
  const required = ["APPID", "PRIVATEKEY", "WEBHOOK_SECRET"];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length) {
    logger.error("Missing required secrets:", missing);
    throw new Error(Missing secrets: ${missing.join(", ")});
  }

  return {
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    webhookSecret: process.env.WEBHOOK_SECRET
  };
}
`

