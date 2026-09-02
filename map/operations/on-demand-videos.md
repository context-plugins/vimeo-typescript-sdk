<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnDemandVideos — operations

Accessor: `client.onDemandVideos` · Source: `src/resources/on-demand-videos.ts` · 4 operations · Request and error types: namespace `OnDemandVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVideoToVod

- **Signature**: `addVideoToVod(request: OnDemandVideos.AddVideoToVodRequest, options?: RequestOptions): ApiPromise<OnDemandVideo, OnDemandVideos.AddVideoToVodError>`
- **Wire**: `PUT /ondemand/pages/{ondemand_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `OnDemandVideo`
- **Error**: `OnDemandVideos.AddVideoToVodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandVideos.AddVideoToVodRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `OndemandPagesVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OndemandPagesVideosRequest` | `ondemandPagesVideosRequestSchema` | `src/models/ondemand-pages-videos-request.ts` |
| `OnDemandVideo` | `onDemandVideoSchema` | `src/models/on-demand-video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoFromVod

- **Signature**: `deleteVideoFromVod(request: OnDemandVideos.DeleteVideoFromVodRequest, options?: RequestOptions): ApiPromise<undefined, OnDemandVideos.DeleteVideoFromVodError>`
- **Wire**: `DELETE /ondemand/pages/{ondemand_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OnDemandVideos.DeleteVideoFromVodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnDemandVideos.DeleteVideoFromVodRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVodVideo

- **Signature**: `getVodVideo(request: OnDemandVideos.GetVodVideoRequest, options?: RequestOptions): ApiPromise<Video, ResponseError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandVideos.GetVodVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |

### getVodVideos

- **Signature**: `getVodVideos(request: OnDemandVideos.GetVodVideosRequest, options?: RequestOptions): ApiPromise<OnDemandVideoConnection, ResponseError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnDemandVideoConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnDemandVideos.GetVodVideosRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter29` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort45` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter29` | `filter29Schema` | `src/models/filter29.ts` |
| `Sort45` | `sort45Schema` | `src/models/sort45.ts` |
| `OnDemandVideoConnection` | `onDemandVideoConnectionSchema` | `src/models/on-demand-video-connection.ts` |

