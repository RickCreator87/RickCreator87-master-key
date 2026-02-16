📄 src/router.js
This dynamically loads all handlers and binds them to webhook events.

`javascript
import fs from "fs";
import path from "path";

export function loadHandlers(webhooks) {
  const handlersDir = path.join(process.cwd(), "src", "handlers");

  const files = fs.readdirSync(handlersDir);

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    const eventName = file.replace(".js", "");
    const handler = require(path.join(handlersDir, file));

    webhooks.on(eventName, async (event) => {
      try {
        await handler.default(event);
      } catch (err) {
        console.error(Error in handler ${eventName}:, err);
      }
    });

    console.log(Loaded handler for: ${eventName});
  });
}
`


