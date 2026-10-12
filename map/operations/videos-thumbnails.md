<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosThumbnails — operations

Accessor: `client.videosThumbnails` · Source: `src/resources/videos-thumbnails.ts` · 7 operations · Request types: namespace `VideosThumbnails`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVideoThumbnail

- **Signature**: `createVideoThumbnail(request: VideosThumbnails.CreateVideoThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `POST /videos/{video_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.CreateVideoThumbnailRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosPicturesRequest` | `videosPicturesRequestSchema` | `src/models/videos-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### createVideoThumbnailAlt1

- **Signature**: `createVideoThumbnailAlt1(request: VideosThumbnails.CreateVideoThumbnailAlt1Request, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `POST /channels/{channel_id}/videos/{video_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.CreateVideoThumbnailAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `ChannelsVideosPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsVideosPicturesRequest` | `channelsVideosPicturesRequestSchema` | `src/models/channels-videos-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### deleteVideoThumbnail

- **Signature**: `deleteVideoThumbnail(request: VideosThumbnails.DeleteVideoThumbnailRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /videos/{video_id}/pictures/{picture_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.DeleteVideoThumbnailRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pictureId` | `path` | `picture_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

### editVideoThumbnail

- **Signature**: `editVideoThumbnail(request: VideosThumbnails.EditVideoThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `PATCH /videos/{video_id}/pictures/{picture_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.EditVideoThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pictureId` | `path` | `picture_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosPicturesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosPicturesRequest1` | `videosPicturesRequest1Schema` | `src/models/videos-pictures-request1.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getVideoThumbnail

- **Signature**: `getVideoThumbnail(request: VideosThumbnails.GetVideoThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `GET /videos/{video_id}/pictures/{picture_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.GetVideoThumbnailRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pictureId` | `path` | `picture_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getVideoThumbnails

- **Signature**: `getVideoThumbnails(request: VideosThumbnails.GetVideoThumbnailsRequest, options?: RequestOptions): ApiPromise<PictureConnection, ApiError>`
- **Wire**: `GET /videos/{video_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.GetVideoThumbnailsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |

### getVideoThumbnailsAlt1

- **Signature**: `getVideoThumbnailsAlt1(request: VideosThumbnails.GetVideoThumbnailsAlt1Request, options?: RequestOptions): ApiPromise<PictureConnection, ApiError>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosThumbnails.GetVideoThumbnailsAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |

