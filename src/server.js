📄 src/server.js
This file runs the Express server and binds the webhook middleware.

`javascript
import express from "express";
import dotenv from "dotenv";
import { Webhooks } from "@octokit/webhooks";
import { loadHandlers } from "./router.js";

dotenv.config();

export const webhooks = new Webhooks({
  secret: process.env.WEBHOOK_SECRET
});

const app = express();
app.use(express.json());

// Attach webhook endpoint
app.use("/webhooks", webhooks.middleware);

// Load all event handlers
loadHandlers(webhooks);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(Master Key GitHub App running on port ${PORT});
});
`


