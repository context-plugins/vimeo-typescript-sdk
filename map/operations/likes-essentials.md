<!-- Generated file — do not edit; regenerated with the SDK. -->

# LikesEssentials — operations

Accessor: `client.likesEssentials` · Source: `src/resources/likes-essentials.ts` · 11 operations · Request and error types: namespace `LikesEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkIfUserLikedVideo

- **Signature**: `checkIfUserLikedVideo(request: LikesEssentials.CheckIfUserLikedVideoRequest, options?: RequestOptions): ApiPromise<undefined, LikesEssentials.CheckIfUserLikedVideoError>`
- **Wire**: `GET /users/{user_id}/likes/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.CheckIfUserLikedVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.CheckIfUserLikedVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkIfUserLikedVideoAlt1

- **Signature**: `checkIfUserLikedVideoAlt1(request: LikesEssentials.CheckIfUserLikedVideoAlt1Request, options?: RequestOptions): ApiPromise<undefined, LikesEssentials.CheckIfUserLikedVideoAlt1Error>`
- **Wire**: `GET /me/likes/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.CheckIfUserLikedVideoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.CheckIfUserLikedVideoAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getLikes

- **Signature**: `getLikes(request: LikesEssentials.GetLikesRequest, options?: RequestOptions): ApiPromise<VideoConnection, LikesEssentials.GetLikesError>`
- **Wire**: `GET /users/{user_id}/likes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.GetLikesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.GetLikesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort15` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort15` | `sort15Schema` | `src/models/sort15.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLikesAlt1

- **Signature**: `getLikesAlt1(request: LikesEssentials.GetLikesAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, LikesEssentials.GetLikesAlt1Error>`
- **Wire**: `GET /me/likes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.GetLikesAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.GetLikesAlt1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort15` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort15` | `sort15Schema` | `src/models/sort15.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVideoLikes

- **Signature**: `getVideoLikes(request: LikesEssentials.GetVideoLikesRequest, options?: RequestOptions): ApiPromise<UserConnection, ApiError>`
- **Wire**: `GET /videos/{video_id}/likes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LikesEssentials.GetVideoLikesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### getVideoLikesAlt1

- **Signature**: `getVideoLikesAlt1(request: LikesEssentials.GetVideoLikesAlt1Request, options?: RequestOptions): ApiPromise<UserConnection, ApiError>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/likes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LikesEssentials.GetVideoLikesAlt1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### getVodLikes

- **Signature**: `getVodLikes(request: LikesEssentials.GetVodLikesRequest, options?: RequestOptions): ApiPromise<UserConnection, LikesEssentials.GetVodLikesError>`
- **Wire**: `GET /ondemand/pages/{ondemand_id}/likes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.GetVodLikesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.GetVodLikesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ondemandId` | `path` | `ondemand_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter25` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter25` | `filter25Schema` | `src/models/filter25.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### likeVideo

- **Signature**: `likeVideo(request: LikesEssentials.LikeVideoRequest, options?: RequestOptions): ApiPromise<undefined, LikesEssentials.LikeVideoError>`
- **Wire**: `PUT /users/{user_id}/likes/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.LikeVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.LikeVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### likeVideoAlt1

- **Signature**: `likeVideoAlt1(request: LikesEssentials.LikeVideoAlt1Request, options?: RequestOptions): ApiPromise<undefined, LikesEssentials.LikeVideoAlt1Error>`
- **Wire**: `PUT /me/likes/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.LikeVideoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.LikeVideoAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### unlikeVideo

- **Signature**: `unlikeVideo(request: LikesEssentials.UnlikeVideoRequest, options?: RequestOptions): ApiPromise<undefined, LikesEssentials.UnlikeVideoError>`
- **Wire**: `DELETE /users/{user_id}/likes/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.UnlikeVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.UnlikeVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### unlikeVideoAlt1

- **Signature**: `unlikeVideoAlt1(request: LikesEssentials.UnlikeVideoAlt1Request, options?: RequestOptions): ApiPromise<undefined, LikesEssentials.UnlikeVideoAlt1Error>`
- **Wire**: `DELETE /me/likes/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LikesEssentials.UnlikeVideoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LikesEssentials.UnlikeVideoAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

