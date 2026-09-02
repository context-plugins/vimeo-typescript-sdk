<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosEssentials — operations

Accessor: `client.videosEssentials` · Source: `src/resources/videos-essentials.ts` · 15 operations · Request and error types: namespace `VideosEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### checkIfUserOwnsVideo

- **Signature**: `checkIfUserOwnsVideo(request: VideosEssentials.CheckIfUserOwnsVideoRequest, options?: RequestOptions): ApiPromise<Video, VideosEssentials.CheckIfUserOwnsVideoError>`
- **Wire**: `GET /users/{user_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VideosEssentials.CheckIfUserOwnsVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.CheckIfUserOwnsVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkIfUserOwnsVideoAlt1

- **Signature**: `checkIfUserOwnsVideoAlt1(request: VideosEssentials.CheckIfUserOwnsVideoAlt1Request, options?: RequestOptions): ApiPromise<Video, VideosEssentials.CheckIfUserOwnsVideoAlt1Error>`
- **Wire**: `GET /me/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VideosEssentials.CheckIfUserOwnsVideoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.CheckIfUserOwnsVideoAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### copyVideo

- **Signature**: `copyVideo(request: VideosEssentials.CopyVideoRequest, options?: RequestOptions): ApiPromise<Video, VideosEssentials.CopyVideoError>`
- **Wire**: `POST /users/{user_id}/videos/{video_id}/copy`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `VideosEssentials.CopyVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.CopyVideoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `UsersVideosCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersVideosCopyRequest` | `usersVideosCopyRequestSchema` | `src/models/users-videos-copy-request.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### copyVideoAlt2

- **Signature**: `copyVideoAlt2(request: VideosEssentials.CopyVideoAlt2Request, options?: RequestOptions): ApiPromise<Video, VideosEssentials.CopyVideoAlt2Error>`
- **Wire**: `POST /me/videos/{video_id}/copy`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `VideosEssentials.CopyVideoAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.CopyVideoAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `MeVideosCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeVideosCopyRequest` | `meVideosCopyRequestSchema` | `src/models/me-videos-copy-request.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideo

- **Signature**: `deleteVideo(request: VideosEssentials.DeleteVideoRequest, options?: RequestOptions): ApiPromise<undefined, VideosEssentials.DeleteVideoError>`
- **Wire**: `DELETE /videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosEssentials.DeleteVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.DeleteVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosRequest` | `videosRequestSchema` | `src/models/videos-request.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideos

- **Signature**: `deleteVideos(request: VideosEssentials.DeleteVideosRequest, options?: RequestOptions): ApiPromise<undefined, VideosEssentials.DeleteVideosError>`
- **Wire**: `DELETE /users/{user_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosEssentials.DeleteVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.DeleteVideosRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `uris` | `query` | — | `string` | yes |
| `body` | `body` | — | `UsersVideosRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersVideosRequest` | `usersVideosRequestSchema` | `src/models/users-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteVideosAlt1

- **Signature**: `deleteVideosAlt1(request: VideosEssentials.DeleteVideosAlt1Request, options?: RequestOptions): ApiPromise<undefined, VideosEssentials.DeleteVideosAlt1Error>`
- **Wire**: `DELETE /me/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosEssentials.DeleteVideosAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.DeleteVideosAlt1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uris` | `query` | `string` | yes |
| `body` | `body` | `MeVideosRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeVideosRequest` | `meVideosRequestSchema` | `src/models/me-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editVideo

- **Signature**: `editVideo(request: VideosEssentials.EditVideoRequest, options?: RequestOptions): ApiPromise<Video, VideosEssentials.EditVideoError>`
- **Wire**: `PATCH /videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `VideosEssentials.EditVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.EditVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosRequest1` | `videosRequest1Schema` | `src/models/videos-request1.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAppearances

- **Signature**: `getAppearances(request: VideosEssentials.GetAppearancesRequest, options?: RequestOptions): ApiPromise<VideoConnection, VideosEssentials.GetAppearancesError>`
- **Wire**: `GET /users/{user_id}/appearances`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VideosEssentials.GetAppearancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.GetAppearancesRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort15` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort15` | `sort15Schema` | `src/models/sort15.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAppearancesAlt1

- **Signature**: `getAppearancesAlt1(request: VideosEssentials.GetAppearancesAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, VideosEssentials.GetAppearancesAlt1Error>`
- **Wire**: `GET /me/appearances`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VideosEssentials.GetAppearancesAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.GetAppearancesAlt1Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort15` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort15` | `sort15Schema` | `src/models/sort15.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVideo

- **Signature**: `getVideo(request: VideosEssentials.GetVideoRequest, options?: RequestOptions): ApiPromise<Video, VideosEssentials.GetVideoError>`
- **Wire**: `GET /videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VideosEssentials.GetVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.GetVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `timeLinks` | `query` | `time_links` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideos

- **Signature**: `getVideos(request: VideosEssentials.GetVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, VideosEssentials.GetVideosError>`
- **Wire**: `GET /users/{user_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VideosEssentials.GetVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.GetVideosRequest` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter22` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `filterPlayable` | `query` | `filter_playable` | `boolean` | no |
| `filterScreenRecorded` | `query` | `filter_screen_recorded` | `boolean` | no |
| `filterTag` | `query` | `filter_tag` | `string` | no |
| `filterTagAllOf` | `query` | `filter_tag_all_of` | `string` | no |
| `filterTagExclude` | `query` | `filter_tag_exclude` | `string` | no |
| `filterUploader` | `query` | `filter_uploader` | `number` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `queryFields` | `query` | `query_fields` | `QueryFields` | no |
| `sort` | `query` | — | `Sort39` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter22` | `filter22Schema` | `src/models/filter22.ts` |
| `QueryFields` | `queryFieldsSchema` | `src/models/query-fields.ts` |
| `Sort39` | `sort39Schema` | `src/models/sort39.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

### getVideosAlt1

- **Signature**: `getVideosAlt1(request: VideosEssentials.GetVideosAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, VideosEssentials.GetVideosAlt1Error>`
- **Wire**: `GET /me/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VideosEssentials.GetVideosAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.GetVideosAlt1Request` (15):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter22` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `filterPlayable` | `query` | `filter_playable` | `boolean` | no |
| `filterScreenRecorded` | `query` | `filter_screen_recorded` | `boolean` | no |
| `filterTag` | `query` | `filter_tag` | `string` | no |
| `filterTagAllOf` | `query` | `filter_tag_all_of` | `string` | no |
| `filterTagExclude` | `query` | `filter_tag_exclude` | `string` | no |
| `filterUploader` | `query` | `filter_uploader` | `number` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `queryFields` | `query` | `query_fields` | `QueryFields` | no |
| `sort` | `query` | — | `Sort39` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter22` | `filter22Schema` | `src/models/filter22.ts` |
| `QueryFields` | `queryFieldsSchema` | `src/models/query-fields.ts` |
| `Sort39` | `sort39Schema` | `src/models/sort39.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

### searchVideos

- **Signature**: `searchVideos(request: VideosEssentials.SearchVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, VideosEssentials.SearchVideosError>`
- **Wire**: `GET /videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VideosEssentials.SearchVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"legacyError"` [503] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.SearchVideosRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter45` | no |
| `links` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort73` | no |
| `uris` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter45` | `filter45Schema` | `src/models/filter45.ts` |
| `Sort73` | `sort73Schema` | `src/models/sort73.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### updateVideoCustomMetadata

- **Signature**: `updateVideoCustomMetadata(request: VideosEssentials.UpdateVideoCustomMetadataRequest, options?: RequestOptions): ApiPromise<CustomMetadataValues[], VideosEssentials.UpdateVideoCustomMetadataError>`
- **Wire**: `PUT /videos/{video_id}/custom_metadata`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CustomMetadataValues[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VideosEssentials.UpdateVideoCustomMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [401] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEssentials.UpdateVideoCustomMetadataRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCustomMetadataRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCustomMetadataRequest` | `videosCustomMetadataRequestSchema` | `src/models/videos-custom-metadata-request.ts` |
| `CustomMetadataValues` | `customMetadataValuesSchema` | `src/models/custom-metadata-values.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

