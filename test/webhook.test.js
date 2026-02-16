📄 test/webhook.test.js
`javascript
import { verifyWebhookSignature } from "../src/verifyWebhook.js";

describe("Webhook Signature Verification", () => {
  const secret = "testsecret";
  const payload = JSON.stringify({ hello: "world" });

  it("verifies a correct signature", () => {
    const crypto = require("crypto");
    const signature =
      "sha256=" +
      crypto.createHmac("sha256", secret).update(payload).digest("hex");

    const result = verifyWebhookSignature(secret, payload, signature);
    expect(result).toBe(true);
  });

  it("rejects an incorrect signature", () => {
    const result = verifyWebhookSignature(secret, payload, "sha256=wrong");
    expect(result).toBe(false);
  });
});
`

