<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShowcasesCustomShowcaseThumbnails — operations

Accessor: `client.showcasesCustomShowcaseThumbnails` · Source: `src/resources/showcases-custom-showcase-thumbnails.ts` · 5 operations · Request and error types: namespace `ShowcasesCustomShowcaseThumbnails`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createShowcaseCustomThumb

- **Signature**: `createShowcaseCustomThumb(request: ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbRequest, options?: RequestOptions): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError>`
- **Wire**: `POST /users/{user_id}/albums/{album_id}/custom_thumbnails`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteShowcaseCustomThumbnail

- **Signature**: `deleteShowcaseCustomThumbnail(request: ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError>`
- **Wire**: `DELETE /users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseCustomThumbnail

- **Signature**: `getShowcaseCustomThumbnail(request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseCustomThumbs

- **Signature**: `getShowcaseCustomThumbs(request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsRequest, options?: RequestOptions): ApiPromise<PictureConnection, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}/custom_thumbnails`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### replaceShowcaseCustomThumb

- **Signature**: `replaceShowcaseCustomThumb(request: ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbRequest, options?: RequestOptions): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError>`
- **Wire**: `PATCH /users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsCustomThumbnailsThumbnailIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsCustomThumbnailsThumbnailIdRequest` | `usersAlbumsCustomThumbnailsThumbnailIdRequestSchema` | `src/models/users-albums-custom-thumbnails-thumbnail-id-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

