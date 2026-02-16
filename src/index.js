 📄 src/index.js
This initializes the GitHub App, loads secrets, and exports the app instance.

`javascript
import { App } from "@octokit/app";
import dotenv from "dotenv";
import { createNodeMiddleware } from "@octokit/webhooks";
import { webhooks } from "./server.js";

dotenv.config();

export const app = new App({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY,
  webhooks: {
    secret: process.env.WEBHOOK_SECRET
  }
});

// Export middleware for server
export const webhookMiddleware = createNodeMiddleware(webhooks, {
  path: "/webhooks"
});
`
