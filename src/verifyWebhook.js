📄 src/verifyWebhook.js
This file verifies incoming webhook signatures manually (useful for custom endpoints or debugging).

`javascript
import crypto from "crypto";

export function verifyWebhookSignature(secret, payload, signature) {
  const computed = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const expected = sha256=${computed};

  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signature)
  );
}
`
