<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandGenres — operations

Accessor: `client.onDemandGenres` · Source: `src/resources/on-demand-genres.ts` · 8 operations · Request and error types: namespace `OnDemandGenres`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVodGenre

- **Signature**: `addVodGenre(request: OnDemandGenres.AddVodGenreRequest, options?: RequestOptions): ApiPromise<OnDemandGenre, OnDemandGenres.AddVodGenreError>`
- **Wire**: `PUT /ondemand/pages/{ondemand_id}/genres/{genre_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandGenre`
- **Error**: `OnDemandGenres.AddVodGenreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.AddVodGenreRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `genreId` | `path` | `genre_id` | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandGenre` | `onDemandGenreSchema` | `src/models/on-demand-genre.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVodGenre

- **Signature**: `deleteVodGenre(request: OnDemandGenres.DeleteVodGenreRequest, options?: RequestOptions): ApiPromise<undefined, OnDemandGenres.DeleteVodGenreError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}/genres/{genre_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OnDemandGenres.DeleteVodGenreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.DeleteVodGenreRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `genreId` | `path` | `genre_id` | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getGenreVod

- **Signature**: `getGenreVod(request: OnDemandGenres.GetGenreVodRequest, options?: RequestOptions): ApiPromise<OnDemandPage, OnDemandGenres.GetGenreVodError>`
- **Wire**: `GET /ondemand/genres/{genre_id}/pages/{ondemand_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPage`
- **Error**: `OnDemandGenres.GetGenreVodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.GetGenreVodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `genreId` | `path` | `genre_id` | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandPage` | `onDemandPageSchema` | `src/models/on-demand-page.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getGenreVods

- **Signature**: `getGenreVods(request: OnDemandGenres.GetGenreVodsRequest, options?: RequestOptions): ApiPromise<OnDemandPageConnection, OnDemandGenres.GetGenreVodsError>`
- **Wire**: `GET /ondemand/genres/{genre_id}/pages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandPageConnection`
- **Error**: `OnDemandGenres.GetGenreVodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.GetGenreVodsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `genreId` | `path` | `genre_id` | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter24` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort41` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter24` | `filter24Schema` | `src/models/filter24.ts` |
| `Sort41` | `sort41Schema` | `src/models/sort41.ts` |
| `OnDemandPageConnection` | `onDemandPageConnectionSchema` | `src/models/on-demand-page-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVodGenre

- **Signature**: `getVodGenre(request: OnDemandGenres.GetVodGenreRequest, options?: RequestOptions): ApiPromise<OnDemandGenre, OnDemandGenres.GetVodGenreError>`
- **Wire**: `GET /ondemand/genres/{genre_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandGenre`
- **Error**: `OnDemandGenres.GetVodGenreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.GetVodGenreRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `genreId` | `path` | `genre_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandGenre` | `onDemandGenreSchema` | `src/models/on-demand-genre.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodGenreByOndemandId

- **Signature**: `getVodGenreByOndemandId(request: OnDemandGenres.GetVodGenreByOndemandIdRequest, options?: RequestOptions): ApiPromise<OnDemandGenre, OnDemandGenres.GetVodGenreByOndemandIdError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/genres/{genre_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandGenre`
- **Error**: `OnDemandGenres.GetVodGenreByOndemandIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.GetVodGenreByOndemandIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `genreId` | `path` | `genre_id` | `string` | yes |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandGenre` | `onDemandGenreSchema` | `src/models/on-demand-genre.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodGenres

- **Signature**: `getVodGenres(options?: RequestOptions): ApiPromise<OnDemandGenreConnection, OnDemandGenres.GetVodGenresError>`
- **Wire**: `GET /ondemand/genres`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandGenreConnection`
- **Error**: `OnDemandGenres.GetVodGenresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandGenreConnection` | `onDemandGenreConnectionSchema` | `src/models/on-demand-genre-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVodGenresByOndemandId

- **Signature**: `getVodGenresByOndemandId(request: OnDemandGenres.GetVodGenresByOndemandIdRequest, options?: RequestOptions): ApiPromise<OnDemandGenreConnection, OnDemandGenres.GetVodGenresByOndemandIdError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/genres`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandGenreConnection`
- **Error**: `OnDemandGenres.GetVodGenresByOndemandIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandGenres.GetVodGenresByOndemandIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandGenreConnection` | `onDemandGenreConnectionSchema` | `src/models/on-demand-genre-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

