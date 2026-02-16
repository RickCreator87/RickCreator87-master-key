# Organization Mapping

`src/config/org-map.json` defines how the Master Key app understands each organization.

## Fields

- `repos` — list of repositories or `*` for all
- `secretsProfile` — which secret profile to apply
- `workflowProfile` — which workflow policy profile to apply

## Example

```json
{
  "orgs": {
    "example-org": {
      "repos": ["*"],
      "secretsProfile": "default",
      "workflowProfile": "standard-ci"
    }
  }
}