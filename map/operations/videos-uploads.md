<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosUploads — operations

Accessor: `client.videosUploads` · Source: `src/resources/videos-uploads.ts` · 4 operations · Request and error types: namespace `VideosUploads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### completeStreamingUpload

- **Signature**: `completeStreamingUpload(request: VideosUploads.CompleteStreamingUploadRequest, options?: RequestOptions): ApiPromise<undefined, VideosUploads.CompleteStreamingUploadError>`
- **Wire**: `DELETE /users/{user_id}/uploads/{upload_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosUploads.CompleteStreamingUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUploads.CompleteStreamingUploadRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `uploadId` | `path` | `upload_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `signature` | `query` | — | `string` | yes |
| `videoFileId` | `query` | `video_file_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getUploadAttempt

- **Signature**: `getUploadAttempt(request: VideosUploads.GetUploadAttemptRequest, options?: RequestOptions): ApiPromise<UploadAttempt, ResponseError>`
- **Wire**: `GET /users/{user_id}/uploads/{upload_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadAttempt`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosUploads.GetUploadAttemptRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `uploadId` | `path` | `upload_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadAttempt` | `uploadAttemptSchema` | `src/models/upload-attempt.ts` |

### uploadVideo

- **Signature**: `uploadVideo(request: VideosUploads.UploadVideoRequest, options?: RequestOptions): ApiPromise<Video, VideosUploads.UploadVideoError>`
- **Wire**: `POST /users/{user_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `VideosUploads.UploadVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUploads.UploadVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersVideosRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersVideosRequest1` | `usersVideosRequest1Schema` | `src/models/users-videos-request1.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### uploadVideoAlt1

- **Signature**: `uploadVideoAlt1(request: VideosUploads.UploadVideoAlt1Request, options?: RequestOptions): ApiPromise<Video, VideosUploads.UploadVideoAlt1Error>`
- **Wire**: `POST /me/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `VideosUploads.UploadVideoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUploads.UploadVideoAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeVideosRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeVideosRequest1` | `meVideosRequest1Schema` | `src/models/me-videos-request1.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

