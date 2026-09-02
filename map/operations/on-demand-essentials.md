<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandEssentials — operations

Accessor: `client.onDemandEssentials` · Source: `src/resources/on-demand-essentials.ts` · 7 operations · Request and error types: namespace `OnDemandEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createVod

- **Signature**: `createVod(request: OnDemandEssentials.CreateVodRequest, options?: RequestOptions): ApiPromise<OnDemandPage, ResponseError>`
- **Wire**: `POST /users/{user_id}/ondemand/pages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `OnDemandPage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandEssentials.CreateVodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersOndemandPagesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersOndemandPagesRequest` | `usersOndemandPagesRequestSchema` | `src/models/users-ondemand-pages-request.ts` |
| `OnDemandPage` | `onDemandPageSchema` | `src/models/on-demand-page.ts` |

### createVodAlt1

- **Signature**: `createVodAlt1(request: OnDemandEssentials.CreateVodAlt1Request, options?: RequestOptions): ApiPromise<OnDemandPage, ResponseError>`
- **Wire**: `POST /me/ondemand/pages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `OnDemandPage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandEssentials.CreateVodAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeOndemandPagesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeOndemandPagesRequest` | `meOndemandPagesRequestSchema` | `src/models/me-ondemand-pages-request.ts` |
| `OnDemandPage` | `onDemandPageSchema` | `src/models/on-demand-page.ts` |

### deleteVodDraft

- **Signature**: `deleteVodDraft(request: OnDemandEssentials.DeleteVodDraftRequest, options?: RequestOptions): ApiPromise<undefined, OnDemandEssentials.DeleteVodDraftError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OnDemandEssentials.DeleteVodDraftError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandEssentials.DeleteVodDraftRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editVod

- **Signature**: `editVod(request: OnDemandEssentials.EditVodRequest, options?: RequestOptions): ApiPromise<OnDemandPage, OnDemandEssentials.EditVodError>`
- **Wire**: `PATCH /ondemand/pages/{ondemand_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `OnDemandPage`
- **Error**: `OnDemandEssentials.EditVodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandEssentials.EditVodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesRequest` | `ondemandPagesRequestSchema` | `src/models/ondemand-pages-request.ts` |
| `OnDemandPage` | `onDemandPageSchema` | `src/models/on-demand-page.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getUserVods

- **Signature**: `getUserVods(request: OnDemandEssentials.GetUserVodsRequest, options?: RequestOptions): ApiPromise<OnDemandPageConnection, OnDemandEssentials.GetUserVodsError>`
- **Wire**: `GET /users/{user_id}/ondemand/pages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPageConnection`
- **Error**: `OnDemandEssentials.GetUserVodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandEssentials.GetUserVodsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter18` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort32` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter18` | `filter18Schema` | `src/models/filter18.ts` |
| `Sort32` | `sort32Schema` | `src/models/sort32.ts` |
| `OnDemandPageConnection` | `onDemandPageConnectionSchema` | `src/models/on-demand-page-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getUserVodsAlt1

- **Signature**: `getUserVodsAlt1(request: OnDemandEssentials.GetUserVodsAlt1Request, options?: RequestOptions): ApiPromise<OnDemandPageConnection, OnDemandEssentials.GetUserVodsAlt1Error>`
- **Wire**: `GET /me/ondemand/pages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPageConnection`
- **Error**: `OnDemandEssentials.GetUserVodsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandEssentials.GetUserVodsAlt1Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter18` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort32` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter18` | `filter18Schema` | `src/models/filter18.ts` |
| `Sort32` | `sort32Schema` | `src/models/sort32.ts` |
| `OnDemandPageConnection` | `onDemandPageConnectionSchema` | `src/models/on-demand-page-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVod

- **Signature**: `getVod(request: OnDemandEssentials.GetVodRequest, options?: RequestOptions): ApiPromise<OnDemandPage, OnDemandEssentials.GetVodError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPage`
- **Error**: `OnDemandEssentials.GetVodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandEssentials.GetVodRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandPage` | `onDemandPageSchema` | `src/models/on-demand-page.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

