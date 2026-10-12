<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosChapters — operations

Accessor: `client.videosChapters` · Source: `src/resources/videos-chapters.ts` · 12 operations · Request and error types: namespace `VideosChapters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createChapter

- **Signature**: `createChapter(request: VideosChapters.CreateChapterRequest, options?: RequestOptions): ApiPromise<Chapter, VideosChapters.CreateChapterError>`
- **Wire**: `POST /videos/{video_id}/chapters`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Chapter`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.CreateChapterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.CreateChapterRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosChaptersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosChaptersRequest` | `videosChaptersRequestSchema` | `src/models/videos-chapters-request.ts` |
| `Chapter` | `chapterSchema` | `src/models/chapter.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createChapterThumbnailOrUploadLink

- **Signature**: `createChapterThumbnailOrUploadLink(request: VideosChapters.CreateChapterThumbnailOrUploadLinkRequest, options?: RequestOptions): ApiPromise<Picture, VideosChapters.CreateChapterThumbnailOrUploadLinkError>`
- **Wire**: `POST /videos/{video_id}/chapters/{chapter_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.CreateChapterThumbnailOrUploadLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.CreateChapterThumbnailOrUploadLinkRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosChaptersPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosChaptersPicturesRequest` | `videosChaptersPicturesRequestSchema` | `src/models/videos-chapters-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createUnsavedChapterThumbnailOrUploadLink

- **Signature**: `createUnsavedChapterThumbnailOrUploadLink(request: VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkRequest, options?: RequestOptions): ApiPromise<Picture, VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError>`
- **Wire**: `POST /videos/{video_id}/chapters/temporary/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosChaptersTemporaryPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosChaptersTemporaryPicturesRequest` | `videosChaptersTemporaryPicturesRequestSchema` | `src/models/videos-chapters-temporary-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteChapter

- **Signature**: `deleteChapter(request: VideosChapters.DeleteChapterRequest, options?: RequestOptions): ApiPromise<undefined, VideosChapters.DeleteChapterError>`
- **Wire**: `DELETE /videos/{video_id}/chapters/{chapter_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.DeleteChapterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.DeleteChapterRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteChapterThumbnail

- **Signature**: `deleteChapterThumbnail(request: VideosChapters.DeleteChapterThumbnailRequest, options?: RequestOptions): ApiPromise<undefined, VideosChapters.DeleteChapterThumbnailError>`
- **Wire**: `DELETE /videos/{video_id}/chapters/{chapter_id}/pictures/{uid}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.DeleteChapterThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.DeleteChapterThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `uid` | `path` | — | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editChapter

- **Signature**: `editChapter(request: VideosChapters.EditChapterRequest, options?: RequestOptions): ApiPromise<Chapter, VideosChapters.EditChapterError>`
- **Wire**: `PATCH /videos/{video_id}/chapters/{chapter_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Chapter`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.EditChapterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.EditChapterRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosChaptersRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosChaptersRequest1` | `videosChaptersRequest1Schema` | `src/models/videos-chapters-request1.ts` |
| `Chapter` | `chapterSchema` | `src/models/chapter.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChapter

- **Signature**: `getChapter(request: VideosChapters.GetChapterRequest, options?: RequestOptions): ApiPromise<Chapter, VideosChapters.GetChapterError>`
- **Wire**: `GET /videos/{video_id}/chapters/{chapter_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Chapter`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.GetChapterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.GetChapterRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Chapter` | `chapterSchema` | `src/models/chapter.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChapterThumbnail

- **Signature**: `getChapterThumbnail(request: VideosChapters.GetChapterThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, VideosChapters.GetChapterThumbnailError>`
- **Wire**: `GET /videos/{video_id}/chapters/{chapter_id}/pictures/{uid}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.GetChapterThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.GetChapterThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `uid` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChapterThumbnails

- **Signature**: `getChapterThumbnails(request: VideosChapters.GetChapterThumbnailsRequest, options?: RequestOptions): ApiPromise<Picture, VideosChapters.GetChapterThumbnailsError>`
- **Wire**: `GET /videos/{video_id}/chapters/{chapter_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.GetChapterThumbnailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.GetChapterThumbnailsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChapters

- **Signature**: `getChapters(request: VideosChapters.GetChaptersRequest, options?: RequestOptions): ApiPromise<ChapterConnection, VideosChapters.GetChaptersError>`
- **Wire**: `GET /videos/{video_id}/chapters`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChapterConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.GetChaptersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.GetChaptersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChapterConnection` | `chapterConnectionSchema` | `src/models/chapter-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getUnsavedChapterThumbnail

- **Signature**: `getUnsavedChapterThumbnail(request: VideosChapters.GetUnsavedChapterThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, VideosChapters.GetUnsavedChapterThumbnailError>`
- **Wire**: `GET /videos/{video_id}/chapters/temporary/pictures/{uid}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.GetUnsavedChapterThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.GetUnsavedChapterThumbnailRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `uid` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### setChapterThumbnailActive

- **Signature**: `setChapterThumbnailActive(request: VideosChapters.SetChapterThumbnailActiveRequest, options?: RequestOptions): ApiPromise<Picture, VideosChapters.SetChapterThumbnailActiveError>`
- **Wire**: `PATCH /videos/{video_id}/chapters/{chapter_id}/pictures/{uid}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosChapters.SetChapterThumbnailActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosChapters.SetChapterThumbnailActiveRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chapterId` | `path` | `chapter_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `uid` | `path` | — | `string` | yes |
| `body` | `body` | — | `VideosChaptersPicturesUidRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosChaptersPicturesUidRequest` | `videosChaptersPicturesUidRequestSchema` | `src/models/videos-chapters-pictures-uid-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

