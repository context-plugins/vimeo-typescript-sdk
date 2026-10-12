<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosAnimatedThumbnails — operations

Accessor: `client.videosAnimatedThumbnails` · Source: `src/resources/videos-animated-thumbnails.ts` · 5 operations · Request and error types: namespace `VideosAnimatedThumbnails`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAnimatedThumbset

- **Signature**: `createAnimatedThumbset(request: VideosAnimatedThumbnails.CreateAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.CreateAnimatedThumbsetError>`
- **Wire**: `POST /videos/{video_id}/animated_thumbsets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnimatedThumbset`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosAnimatedThumbnails.CreateAnimatedThumbsetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [403] `LegacyError` · `"legacyError2"` [429] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAnimatedThumbnails.CreateAnimatedThumbsetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAnimatedThumbsetsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAnimatedThumbsetsRequest` | `videosAnimatedThumbsetsRequestSchema` | `src/models/videos-animated-thumbsets-request.ts` |
| `AnimatedThumbset` | `animatedThumbsetSchema` | `src/models/animated-thumbset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteAnimatedThumbset

- **Signature**: `deleteAnimatedThumbset(request: VideosAnimatedThumbnails.DeleteAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise<undefined, VideosAnimatedThumbnails.DeleteAnimatedThumbsetError>`
- **Wire**: `DELETE /videos/{video_id}/animated_thumbsets/{picture_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosAnimatedThumbnails.DeleteAnimatedThumbsetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAnimatedThumbnails.DeleteAnimatedThumbsetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pictureId` | `path` | `picture_id` | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllAnimatedThumbset

- **Signature**: `getAllAnimatedThumbset(request: VideosAnimatedThumbnails.GetAllAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise<AnimatedThumbsetConnection, VideosAnimatedThumbnails.GetAllAnimatedThumbsetError>`
- **Wire**: `GET /videos/{video_id}/animated_thumbsets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnimatedThumbsetConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosAnimatedThumbnails.GetAllAnimatedThumbsetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAnimatedThumbnails.GetAllAnimatedThumbsetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnimatedThumbsetConnection` | `animatedThumbsetConnectionSchema` | `src/models/animated-thumbset-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAnimatedThumbset

- **Signature**: `getAnimatedThumbset(request: VideosAnimatedThumbnails.GetAnimatedThumbsetRequest, options?: RequestOptions): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetError>`
- **Wire**: `GET /videos/{video_id}/animated_thumbsets/{picture_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnimatedThumbset`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosAnimatedThumbnails.GetAnimatedThumbsetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAnimatedThumbnails.GetAnimatedThumbsetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pictureId` | `path` | `picture_id` | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnimatedThumbset` | `animatedThumbsetSchema` | `src/models/animated-thumbset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAnimatedThumbsetStatus

- **Signature**: `getAnimatedThumbsetStatus(request: VideosAnimatedThumbnails.GetAnimatedThumbsetStatusRequest, options?: RequestOptions): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError>`
- **Wire**: `GET /videos/{video_id}/animated_thumbsets/{picture_id}/status`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnimatedThumbset`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAnimatedThumbnails.GetAnimatedThumbsetStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pictureId` | `path` | `picture_id` | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnimatedThumbset` | `animatedThumbsetSchema` | `src/models/animated-thumbset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

