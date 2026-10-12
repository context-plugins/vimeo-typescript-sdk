<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandRegions — operations

Accessor: `client.onDemandRegions` · Source: `src/resources/on-demand-regions.ts` · 8 operations · Request and error types: namespace `OnDemandRegions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVodRegion

- **Signature**: `addVodRegion(request: OnDemandRegions.AddVodRegionRequest, options?: RequestOptions): ApiPromise<OnDemandRegion, OnDemandRegions.AddVodRegionError>`
- **Wire**: `PUT /ondemand/pages/{ondemand_id}/regions/{country}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OnDemandRegion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.AddVodRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.AddVodRegionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `country` | `path` | — | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandRegion` | `onDemandRegionSchema` | `src/models/on-demand-region.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVodRegion

- **Signature**: `deleteVodRegion(request: OnDemandRegions.DeleteVodRegionRequest, options?: RequestOptions): ApiPromise<undefined, OnDemandRegions.DeleteVodRegionError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}/regions/{country}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.DeleteVodRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.DeleteVodRegionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `country` | `path` | — | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVodRegions

- **Signature**: `deleteVodRegions(request: OnDemandRegions.DeleteVodRegionsRequest, options?: RequestOptions): ApiPromise<OnDemandRegion[], OnDemandRegions.DeleteVodRegionsError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}/regions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OnDemandRegion[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.DeleteVodRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.DeleteVodRegionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesRegionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesRegionsRequest` | `ondemandPagesRegionsRequestSchema` | `src/models/ondemand-pages-regions-request.ts` |
| `OnDemandRegion` | `onDemandRegionSchema` | `src/models/on-demand-region.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getRegion

- **Signature**: `getRegion(request: OnDemandRegions.GetRegionRequest, options?: RequestOptions): ApiPromise<OnDemandRegion, OnDemandRegions.GetRegionError>`
- **Wire**: `GET /ondemand/regions/{country}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandRegion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.GetRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.GetRegionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandRegion` | `onDemandRegionSchema` | `src/models/on-demand-region.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getRegions

- **Signature**: `getRegions(options?: RequestOptions): ApiPromise<OnDemandRegionConnection, ApiError>`
- **Wire**: `GET /ondemand/regions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandRegionConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandRegionConnection` | `onDemandRegionConnectionSchema` | `src/models/on-demand-region-connection.ts` |

### getVodRegion

- **Signature**: `getVodRegion(request: OnDemandRegions.GetVodRegionRequest, options?: RequestOptions): ApiPromise<OnDemandRegion, OnDemandRegions.GetVodRegionError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/regions/{country}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandRegion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.GetVodRegionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.GetVodRegionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `country` | `path` | — | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandRegion` | `onDemandRegionSchema` | `src/models/on-demand-region.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodRegions

- **Signature**: `getVodRegions(request: OnDemandRegions.GetVodRegionsRequest, options?: RequestOptions): ApiPromise<OnDemandRegionConnection, OnDemandRegions.GetVodRegionsError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/regions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandRegionConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.GetVodRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.GetVodRegionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandRegionConnection` | `onDemandRegionConnectionSchema` | `src/models/on-demand-region-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### setVodRegions

- **Signature**: `setVodRegions(request: OnDemandRegions.SetVodRegionsRequest, options?: RequestOptions): ApiPromise<OnDemandRegion, OnDemandRegions.SetVodRegionsError>`
- **Wire**: `PUT /ondemand/pages/{ondemand_id}/regions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OnDemandRegion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandRegions.SetVodRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandRegions.SetVodRegionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesRegionsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesRegionsRequest1` | `ondemandPagesRegionsRequest1Schema` | `src/models/ondemand-pages-regions-request1.ts` |
| `OnDemandRegion` | `onDemandRegionSchema` | `src/models/on-demand-region.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

