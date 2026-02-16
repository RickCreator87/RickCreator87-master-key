📄 src/utils/eventNormalizer.js
Normalizes GitHub webhook payloads into a consistent structure for AI agents.

`javascript
export default function normalizeEvent(event) {
  const { payload, name } = event;

  return {
    eventType: name,
    repo: payload.repository?.full_name || null,
    sender: payload.sender?.login || null,
    action: payload.action || null,
    raw: payload
  };
}
`


