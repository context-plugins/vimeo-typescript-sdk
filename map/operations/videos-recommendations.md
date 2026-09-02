<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosRecommendations — operations

Accessor: `client.videosRecommendations` · Source: `src/resources/videos-recommendations.ts` · 1 operation · Request and error types: namespace `VideosRecommendations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getRelatedVideos

- **Signature**: `getRelatedVideos(request: VideosRecommendations.GetRelatedVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, VideosRecommendations.GetRelatedVideosError>`
- **Wire**: `GET /videos/{video_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VideosRecommendations.GetRelatedVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosRecommendations.GetRelatedVideosRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `filter` | `query` | — | `Filter46` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter46` | `filter46Schema` | `src/models/filter46.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

