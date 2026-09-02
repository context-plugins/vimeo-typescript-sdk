<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandPosters — operations

Accessor: `client.onDemandPosters` · Source: `src/resources/on-demand-posters.ts` · 4 operations · Request and error types: namespace `OnDemandPosters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVodPoster

- **Signature**: `addVodPoster(request: OnDemandPosters.AddVodPosterRequest, options?: RequestOptions): ApiPromise<Picture, OnDemandPosters.AddVodPosterError>`
- **Wire**: `POST /ondemand/pages/{ondemand_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `OnDemandPosters.AddVodPosterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPosters.AddVodPosterRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editVodPoster

- **Signature**: `editVodPoster(request: OnDemandPosters.EditVodPosterRequest, options?: RequestOptions): ApiPromise<Picture, ResponseError>`
- **Wire**: `PATCH /ondemand/pages/{ondemand_id}/pictures/{poster_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandPosters.EditVodPosterRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `posterId` | `path` | `poster_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesPicturesRequest` | `ondemandPagesPicturesRequestSchema` | `src/models/ondemand-pages-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getVodPoster

- **Signature**: `getVodPoster(request: OnDemandPosters.GetVodPosterRequest, options?: RequestOptions): ApiPromise<Picture, ResponseError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/pictures/{poster_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandPosters.GetVodPosterRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `posterId` | `path` | `poster_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getVodPosters

- **Signature**: `getVodPosters(request: OnDemandPosters.GetVodPostersRequest, options?: RequestOptions): ApiPromise<PictureConnection, OnDemandPosters.GetVodPostersError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `OnDemandPosters.GetVodPostersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandPosters.GetVodPostersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

