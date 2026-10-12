<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandPurchasesAndRentals — operations

Accessor: `client.onDemandPurchasesAndRentals` · Source: `src/resources/on-demand-purchases-and-rentals.ts` · 3 operations · Request and error types: namespace `OnDemandPurchasesAndRentals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkIfVodWasPurchasedAlt1

- **Signature**: `checkIfVodWasPurchasedAlt1(request: OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Request, options?: RequestOptions): ApiPromise<OnDemandPage, OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error>`
- **Wire**: `GET /me/ondemand/purchases/{ondemand_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPage`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandPage` | `onDemandPageSchema` | `src/models/on-demand-page.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodPurchases

- **Signature**: `getVodPurchases(request: OnDemandPurchasesAndRentals.GetVodPurchasesRequest, options?: RequestOptions): ApiPromise<OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesError>`
- **Wire**: `GET /users/{user_id}/ondemand/purchases`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPageConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandPurchasesAndRentals.GetVodPurchasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPurchasesAndRentals.GetVodPurchasesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter19` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort33` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter19` | `filter19Schema` | `src/models/filter19.ts` |
| `Sort33` | `sort33Schema` | `src/models/sort33.ts` |
| `OnDemandPageConnection` | `onDemandPageConnectionSchema` | `src/models/on-demand-page-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodPurchasesAlt1

- **Signature**: `getVodPurchasesAlt1(request: OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Request, options?: RequestOptions): ApiPromise<OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error>`
- **Wire**: `GET /me/ondemand/purchases`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPageConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter19` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort33` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter19` | `filter19Schema` | `src/models/filter19.ts` |
| `Sort33` | `sort33Schema` | `src/models/sort33.ts` |
| `OnDemandPageConnection` | `onDemandPageConnectionSchema` | `src/models/on-demand-page-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

