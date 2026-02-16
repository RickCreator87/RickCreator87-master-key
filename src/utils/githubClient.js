📄 src/utils/githubClient.js
Creates authenticated GitHub clients for installations or app-level operations.

`javascript
import { App } from "@octokit/app";
import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

dotenv.config();

const app = new App({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY
});

export async function getInstallationClient(installationId) {
  const jwt = app.getSignedJsonWebToken();

  const installationAccessToken = await app.getInstallationAccessToken({
    installationId
  });

  return new Octokit({
    auth: installationAccessToken
  });
}

export function getAppClient() {
  const jwt = app.getSignedJsonWebToken();

  return new Octokit({
    auth: jwt
  });
}
`
