<!-- Generated file — do not edit; regenerated with the SDK. -->

# WatchLaterQueueEssentials — operations

Accessor: `client.watchLaterQueueEssentials` · Source: `src/resources/watch-later-queue-essentials.ts` · 8 operations · Request and error types: namespace `WatchLaterQueueEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVideoToWatchLater

- **Signature**: `addVideoToWatchLater(request: WatchLaterQueueEssentials.AddVideoToWatchLaterRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /users/{user_id}/watchlater/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WatchLaterQueueEssentials.AddVideoToWatchLaterRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

### addVideoToWatchLaterAlt1

- **Signature**: `addVideoToWatchLaterAlt1(request: WatchLaterQueueEssentials.AddVideoToWatchLaterAlt1Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /me/watchlater/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WatchLaterQueueEssentials.AddVideoToWatchLaterAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

### checkWatchLaterQueue

- **Signature**: `checkWatchLaterQueue(request: WatchLaterQueueEssentials.CheckWatchLaterQueueRequest, options?: RequestOptions): ApiPromise<Video, WatchLaterQueueEssentials.CheckWatchLaterQueueError>`
- **Wire**: `GET /users/{user_id}/watchlater/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `WatchLaterQueueEssentials.CheckWatchLaterQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchLaterQueueEssentials.CheckWatchLaterQueueRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkWatchLaterQueueAlt1

- **Signature**: `checkWatchLaterQueueAlt1(request: WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Request, options?: RequestOptions): ApiPromise<Video, WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error>`
- **Wire**: `GET /me/watchlater/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoFromWatchLater

- **Signature**: `deleteVideoFromWatchLater(request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /users/{user_id}/watchlater/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WatchLaterQueueEssentials.DeleteVideoFromWatchLaterRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

### deleteVideoFromWatchLaterAlt1

- **Signature**: `deleteVideoFromWatchLaterAlt1(request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterAlt1Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /me/watchlater/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WatchLaterQueueEssentials.DeleteVideoFromWatchLaterAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

### getWatchLaterQueue

- **Signature**: `getWatchLaterQueue(request: WatchLaterQueueEssentials.GetWatchLaterQueueRequest, options?: RequestOptions): ApiPromise<VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueError>`
- **Wire**: `GET /users/{user_id}/watchlater`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `WatchLaterQueueEssentials.GetWatchLaterQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchLaterQueueEssentials.GetWatchLaterQueueRequest` (8):

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

### getWatchLaterQueueAlt1

- **Signature**: `getWatchLaterQueueAlt1(request: WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error>`
- **Wire**: `GET /me/watchlater`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Request` (7):

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

