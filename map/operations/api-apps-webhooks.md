<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiAppsWebhooks — operations

Accessor: `client.apiAppsWebhooks` · Source: `src/resources/api-apps-webhooks.ts` · 5 operations · Request and error types: namespace `ApiAppsWebhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addWebhook

- **Signature**: `addWebhook(request: ApiAppsWebhooks.AddWebhookRequest, options?: RequestOptions): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.AddWebhookError>`
- **Wire**: `POST /apps/{app_id}/webhooks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiAppWebhook`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ApiAppsWebhooks.AddWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiAppsWebhooks.AddWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `appId` | `path` | `app_id` | `number` | yes |
| `body` | `body` | — | `AppsWebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppsWebhooksRequest` | `appsWebhooksRequestSchema` | `src/models/apps-webhooks-request.ts` |
| `ApiAppWebhook` | `apiAppWebhookSchema` | `src/models/api-app-webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: ApiAppsWebhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, ApiAppsWebhooks.DeleteWebhookError>`
- **Wire**: `DELETE /apps/{app_id}/webhooks/{webhook_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ApiAppsWebhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiAppsWebhooks.DeleteWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `appId` | `path` | `app_id` | `number` | yes |
| `webhookId` | `path` | `webhook_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getWebhook

- **Signature**: `getWebhook(request: ApiAppsWebhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.GetWebhookError>`
- **Wire**: `GET /apps/{app_id}/webhooks/{webhook_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiAppWebhook`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ApiAppsWebhooks.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiAppsWebhooks.GetWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `appId` | `path` | `app_id` | `number` | yes |
| `webhookId` | `path` | `webhook_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiAppWebhook` | `apiAppWebhookSchema` | `src/models/api-app-webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWebhooks

- **Signature**: `getWebhooks(request: ApiAppsWebhooks.GetWebhooksRequest, options?: RequestOptions): ApiPromise<ApiAppWebhookConnection, ApiError>`
- **Wire**: `GET /apps/{app_id}/webhooks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiAppWebhookConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApiAppsWebhooks.GetWebhooksRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `appId` | `path` | `app_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiAppWebhookConnection` | `apiAppWebhookConnectionSchema` | `src/models/api-app-webhook-connection.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: ApiAppsWebhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.UpdateWebhookError>`
- **Wire**: `PATCH /apps/{app_id}/webhooks/{webhook_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiAppWebhook`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ApiAppsWebhooks.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiAppsWebhooks.UpdateWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `appId` | `path` | `app_id` | `number` | yes |
| `webhookId` | `path` | `webhook_id` | `number` | yes |
| `body` | `body` | — | `AppsWebhooksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppsWebhooksRequest1` | `appsWebhooksRequest1Schema` | `src/models/apps-webhooks-request1.ts` |
| `ApiAppWebhook` | `apiAppWebhookSchema` | `src/models/api-app-webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

