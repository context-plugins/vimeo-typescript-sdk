<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandSeasons — operations

Accessor: `client.onDemandSeasons` · Source: `src/resources/on-demand-seasons.ts` · 3 operations · Request and error types: namespace `OnDemandSeasons`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVodSeason

- **Signature**: `getVodSeason(request: OnDemandSeasons.GetVodSeasonRequest, options?: RequestOptions): ApiPromise<OnDemandSeason, OnDemandSeasons.GetVodSeasonError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/seasons/{season_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandSeason`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandSeasons.GetVodSeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandSeasons.GetVodSeasonRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `seasonId` | `path` | `season_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnDemandSeason` | `onDemandSeasonSchema` | `src/models/on-demand-season.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodSeasonVideos

- **Signature**: `getVodSeasonVideos(request: OnDemandSeasons.GetVodSeasonVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, ApiError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/seasons/{season_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandSeasons.GetVodSeasonVideosRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `seasonId` | `path` | `season_id` | `number` | yes |
| `filter` | `query` | — | `Filter27` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort44` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter27` | `filter27Schema` | `src/models/filter27.ts` |
| `Sort44` | `sort44Schema` | `src/models/sort44.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

### getVodSeasons

- **Signature**: `getVodSeasons(request: OnDemandSeasons.GetVodSeasonsRequest, options?: RequestOptions): ApiPromise<OnDemandSeasonConnection, OnDemandSeasons.GetVodSeasonsError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/seasons`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandSeasonConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `OnDemandSeasons.GetVodSeasonsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandSeasons.GetVodSeasonsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter27` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort43` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter27` | `filter27Schema` | `src/models/filter27.ts` |
| `Sort43` | `sort43Schema` | `src/models/sort43.ts` |
| `OnDemandSeasonConnection` | `onDemandSeasonConnectionSchema` | `src/models/on-demand-season-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

