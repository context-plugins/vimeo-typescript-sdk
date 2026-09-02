<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShowcasesShowcaseVideos — operations

Accessor: `client.showcasesShowcaseVideos` · Source: `src/resources/showcases-showcase-videos.ts` · 16 operations · Request and error types: namespace `ShowcasesShowcaseVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVideoToShowcase

- **Signature**: `addVideoToShowcase(request: ShowcasesShowcaseVideos.AddVideoToShowcaseRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseError>`
- **Wire**: `PUT /users/{user_id}/albums/{album_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesShowcaseVideos.AddVideoToShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.AddVideoToShowcaseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addVideoToShowcaseAlt2

- **Signature**: `addVideoToShowcaseAlt2(request: ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Request, options?: RequestOptions): ApiPromise<undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error>`
- **Wire**: `PUT /me/albums/{album_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAvailableShowcaseVideos

- **Signature**: `getAvailableShowcaseVideos(request: ShowcasesShowcaseVideos.GetAvailableShowcaseVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError>`
- **Wire**: `GET /albums/{album_id}/available_videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.GetAvailableShowcaseVideosRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort2` | `sort2Schema` | `src/models/sort2.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAvailableVideoShowcases

- **Signature**: `getAvailableVideoShowcases(request: ShowcasesShowcaseVideos.GetAvailableVideoShowcasesRequest, options?: RequestOptions): ApiPromise<AlbumConnection, ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError>`
- **Wire**: `GET /videos/{video_id}/available_albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlbumConnection`
- **Error**: `ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.GetAvailableVideoShowcasesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort74` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort74` | `sort74Schema` | `src/models/sort74.ts` |
| `AlbumConnection` | `albumConnectionSchema` | `src/models/album-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getShowcaseVideo

- **Signature**: `getShowcaseVideo(request: ShowcasesShowcaseVideos.GetShowcaseVideoRequest, options?: RequestOptions): ApiPromise<Video, ShowcasesShowcaseVideos.GetShowcaseVideoError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `ShowcasesShowcaseVideos.GetShowcaseVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.GetShowcaseVideoRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `password` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseVideoAlt2

- **Signature**: `getShowcaseVideoAlt2(request: ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Request, options?: RequestOptions): ApiPromise<Video, ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error>`
- **Wire**: `GET /me/albums/{album_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `password` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseVideos

- **Signature**: `getShowcaseVideos(request: ShowcasesShowcaseVideos.GetShowcaseVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `ShowcasesShowcaseVideos.GetShowcaseVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.GetShowcaseVideosRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter10` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `password` | `query` | — | `string` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort21` | no |
| `weakSearch` | `query` | `weak_search` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter10` | `filter10Schema` | `src/models/filter10.ts` |
| `Sort21` | `sort21Schema` | `src/models/sort21.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseVideosAlt2

- **Signature**: `getShowcaseVideosAlt2(request: ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Request, options?: RequestOptions): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error>`
- **Wire**: `GET /me/albums/{album_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Request` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter10` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `password` | `query` | — | `string` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort21` | no |
| `weakSearch` | `query` | `weak_search` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter10` | `filter10Schema` | `src/models/filter10.ts` |
| `Sort21` | `sort21Schema` | `src/models/sort21.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### removeVideoFromShowcase

- **Signature**: `removeVideoFromShowcase(request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError>`
- **Wire**: `DELETE /users/{user_id}/albums/{album_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.RemoveVideoFromShowcaseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### removeVideoFromShowcaseAlt2

- **Signature**: `removeVideoFromShowcaseAlt2(request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Request, options?: RequestOptions): ApiPromise<undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error>`
- **Wire**: `DELETE /me/albums/{album_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### replaceVideosInShowcase

- **Signature**: `replaceVideosInShowcase(request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError>`
- **Wire**: `PUT /users/{user_id}/albums/{album_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.ReplaceVideosInShowcaseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsVideosRequest` | `usersAlbumsVideosRequestSchema` | `src/models/users-albums-videos-request.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### replaceVideosInShowcaseAlt2

- **Signature**: `replaceVideosInShowcaseAlt2(request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Request, options?: RequestOptions): ApiPromise<undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error>`
- **Wire**: `PUT /me/albums/{album_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `body` | `body` | — | `MeAlbumsVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeAlbumsVideosRequest` | `meAlbumsVideosRequestSchema` | `src/models/me-albums-videos-request.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### setVideoAsShowcaseFeatured

- **Signature**: `setVideoAsShowcaseFeatured(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedRequest, options?: RequestOptions): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError>`
- **Wire**: `PATCH /users/{user_id}/albums/{album_id}/videos/{video_id}/set_featured_video`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Album`
- **Error**: `ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setVideoAsShowcaseFeaturedAlt2

- **Signature**: `setVideoAsShowcaseFeaturedAlt2(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Request, options?: RequestOptions): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error>`
- **Wire**: `PATCH /me/albums/{album_id}/videos/{video_id}/set_featured_video`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Album`
- **Error**: `ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setVideoAsShowcaseThumbnail

- **Signature**: `setVideoAsShowcaseThumbnail(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailRequest, options?: RequestOptions): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError>`
- **Wire**: `POST /users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest` | `usersAlbumsVideosVideoIdSetAlbumThumbnailRequestSchema` | `src/models/users-albums-videos-video-id-set-album-thumbnail-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setVideoAsShowcaseThumbnailAlt2

- **Signature**: `setVideoAsShowcaseThumbnailAlt2(request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Request, options?: RequestOptions): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error>`
- **Wire**: `POST /me/albums/{album_id}/videos/{video_id}/set_album_thumbnail`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `MeAlbumsVideosSetAlbumThumbnailRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeAlbumsVideosSetAlbumThumbnailRequest` | `meAlbumsVideosSetAlbumThumbnailRequestSchema` | `src/models/me-albums-videos-set-album-thumbnail-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

