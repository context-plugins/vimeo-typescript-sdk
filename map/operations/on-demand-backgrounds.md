<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandBackgrounds — operations

Accessor: `client.onDemandBackgrounds` · Source: `src/resources/on-demand-backgrounds.ts` · 5 operations · Request and error types: namespace `OnDemandBackgrounds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createVodBackground

- **Signature**: `createVodBackground(request: OnDemandBackgrounds.CreateVodBackgroundRequest, options?: RequestOptions): ApiPromise<Picture, OnDemandBackgrounds.CreateVodBackgroundError>`
- **Wire**: `POST /ondemand/pages/{ondemand_id}/backgrounds`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `OnDemandBackgrounds.CreateVodBackgroundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandBackgrounds.CreateVodBackgroundRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVodBackground

- **Signature**: `deleteVodBackground(request: OnDemandBackgrounds.DeleteVodBackgroundRequest, options?: RequestOptions): ApiPromise<undefined, OnDemandBackgrounds.DeleteVodBackgroundError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}/backgrounds/{background_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OnDemandBackgrounds.DeleteVodBackgroundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandBackgrounds.DeleteVodBackgroundRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `backgroundId` | `path` | `background_id` | `number` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editVodBackground

- **Signature**: `editVodBackground(request: OnDemandBackgrounds.EditVodBackgroundRequest, options?: RequestOptions): ApiPromise<Picture, OnDemandBackgrounds.EditVodBackgroundError>`
- **Wire**: `PATCH /ondemand/pages/{ondemand_id}/backgrounds/{background_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `OnDemandBackgrounds.EditVodBackgroundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandBackgrounds.EditVodBackgroundRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `backgroundId` | `path` | `background_id` | `number` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesBackgroundsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesBackgroundsRequest` | `ondemandPagesBackgroundsRequestSchema` | `src/models/ondemand-pages-backgrounds-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodBackground

- **Signature**: `getVodBackground(request: OnDemandBackgrounds.GetVodBackgroundRequest, options?: RequestOptions): ApiPromise<Picture, OnDemandBackgrounds.GetVodBackgroundError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/backgrounds/{background_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `OnDemandBackgrounds.GetVodBackgroundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandBackgrounds.GetVodBackgroundRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `backgroundId` | `path` | `background_id` | `number` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodBackgrounds

- **Signature**: `getVodBackgrounds(request: OnDemandBackgrounds.GetVodBackgroundsRequest, options?: RequestOptions): ApiPromise<PictureConnection, OnDemandBackgrounds.GetVodBackgroundsError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/backgrounds`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `OnDemandBackgrounds.GetVodBackgroundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandBackgrounds.GetVodBackgroundsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

