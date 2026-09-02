<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionPlansEssentials — operations

Accessor: `client.subscriptionPlansEssentials` · Source: `src/resources/subscription-plans-essentials.ts` · 1 operation · Request types: namespace `SubscriptionPlansEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPlan

- **Signature**: `getPlan(request: SubscriptionPlansEssentials.GetPlanRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /subscription_plans/{tier}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SubscriptionPlansEssentials.GetPlanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tier` | `path` | `Tier1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tier1` | `tier1Schema` | `src/models/tier1.ts` |

