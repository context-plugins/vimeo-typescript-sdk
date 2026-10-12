<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosTags — operations

Accessor: `client.videosTags` · Source: `src/resources/videos-tags.ts` · 6 operations · Request and error types: namespace `VideosTags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideoTag

- **Signature**: `addVideoTag(request: VideosTags.AddVideoTagRequest, options?: RequestOptions): ApiPromise<Tag, VideosTags.AddVideoTagError>`
- **Wire**: `PUT /videos/{video_id}/tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tag`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTags.AddVideoTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTags.AddVideoTagRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `word` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addVideoTags

- **Signature**: `addVideoTags(request: VideosTags.AddVideoTagsRequest, options?: RequestOptions): ApiPromise<Tag[], VideosTags.AddVideoTagsError>`
- **Wire**: `PUT /videos/{video_id}/tags`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tag[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTags.AddVideoTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTags.AddVideoTagsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkVideoForTag

- **Signature**: `checkVideoForTag(request: VideosTags.CheckVideoForTagRequest, options?: RequestOptions): ApiPromise<Tag, VideosTags.CheckVideoForTagError>`
- **Wire**: `GET /videos/{video_id}/tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tag`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTags.CheckVideoForTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTags.CheckVideoForTagRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `word` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoTag

- **Signature**: `deleteVideoTag(request: VideosTags.DeleteVideoTagRequest, options?: RequestOptions): ApiPromise<undefined, VideosTags.DeleteVideoTagError>`
- **Wire**: `DELETE /videos/{video_id}/tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTags.DeleteVideoTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTags.DeleteVideoTagRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `word` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoTags

- **Signature**: `getVideoTags(request: VideosTags.GetVideoTagsRequest, options?: RequestOptions): ApiPromise<TagConnection, ApiError>`
- **Wire**: `GET /videos/{video_id}/tags`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosTags.GetVideoTagsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagConnection` | `tagConnectionSchema` | `src/models/tag-connection.ts` |

### getVideosWithTag

- **Signature**: `getVideosWithTag(request: VideosTags.GetVideosWithTagRequest, options?: RequestOptions): ApiPromise<VideoConnection, VideosTags.GetVideosWithTagError>`
- **Wire**: `GET /tags/{word}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTags.GetVideosWithTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTags.GetVideosWithTagRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `word` | `path` | — | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort47` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort47` | `sort47Schema` | `src/models/sort47.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

