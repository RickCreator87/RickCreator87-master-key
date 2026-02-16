📄 test/handlers.test.js
This test ensures every handler loads and executes without throwing.

`javascript
import fs from "fs";
import path from "path";

describe("Handler Modules", () => {
  const handlersDir = path.join(process.cwd(), "src", "handlers");
  const files = fs.readdirSync(handlersDir);

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    it(loads handler: ${file}, async () => {
      const handler = await import(path.join(handlersDir, file));
      expect(typeof handler.default).toBe("function");

      // Call handler with a minimal mock event
      await handler.default({
        payload: {},
        name: file.replace(".js", "")
      });
    });
  });
});
`

