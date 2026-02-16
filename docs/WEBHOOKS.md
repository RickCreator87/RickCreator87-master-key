📄 docs/WEBHOOKS.md
`markdown

Webhooks Reference

The Master Key GitHub App listens to a wide range of webhook events to support
multi-org automation and governance.

---

Event Routing

Each event is mapped to a handler in src/handlers/.

| Event Type                 | Handler File                        |
|---------------------------|--------------------------------------|
| installation              | installation.js                      |
| installationrepositories | installationrepositories.js         |
| push                      | push.js                              |
| pullrequest              | pullrequest.js                      |
| issues                    | issues.js                            |
| issuecomment             | issuecomment.js                     |
| workflowrun              | workflowrun.js                      |
| checksuite               | checksuite.js                       |
| checkrun                 | checkrun.js                         |
| repository                | repository.js                        |
| organization              | organization.js                      |
| membership                | membership.js                        |

---

Event Processing Pipeline

1. GitHub sends event → /webhooks
2. Event is validated using the webhook secret
3. Router loads the correct handler
4. Handler normalizes context
5. Handler calls aiDispatcher
6. AI agent produces structured JSON output

---

Adding New Events

To add a new event:

1. Create a handler in src/handlers/
2. Add the event to webhook-events.yml
3. Restart the server
`

