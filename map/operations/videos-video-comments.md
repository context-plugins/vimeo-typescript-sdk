<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosVideoComments — operations

Accessor: `client.videosVideoComments` · Source: `src/resources/videos-video-comments.ts` · 9 operations · Request and error types: namespace `VideosVideoComments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComment

- **Signature**: `createComment(request: VideosVideoComments.CreateCommentRequest, options?: RequestOptions): ApiPromise<Comment, VideosVideoComments.CreateCommentError>`
- **Wire**: `POST /videos/{video_id}/comments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Comment`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.CreateCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.CreateCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCommentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCommentsRequest` | `videosCommentsRequestSchema` | `src/models/videos-comments-request.ts` |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createCommentAlt1

- **Signature**: `createCommentAlt1(request: VideosVideoComments.CreateCommentAlt1Request, options?: RequestOptions): ApiPromise<Comment, VideosVideoComments.CreateCommentAlt1Error>`
- **Wire**: `POST /channels/{channel_id}/videos/{video_id}/comments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Comment`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.CreateCommentAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.CreateCommentAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `ChannelsVideosCommentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsVideosCommentsRequest` | `channelsVideosCommentsRequestSchema` | `src/models/channels-videos-comments-request.ts` |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createCommentReply

- **Signature**: `createCommentReply(request: VideosVideoComments.CreateCommentReplyRequest, options?: RequestOptions): ApiPromise<Comment, VideosVideoComments.CreateCommentReplyError>`
- **Wire**: `POST /videos/{video_id}/comments/{comment_id}/replies`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Comment`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.CreateCommentReplyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.CreateCommentReplyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCommentsRepliesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCommentsRepliesRequest` | `videosCommentsRepliesRequestSchema` | `src/models/videos-comments-replies-request.ts` |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteComment

- **Signature**: `deleteComment(request: VideosVideoComments.DeleteCommentRequest, options?: RequestOptions): ApiPromise<undefined, VideosVideoComments.DeleteCommentError>`
- **Wire**: `DELETE /videos/{video_id}/comments/{comment_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.DeleteCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.DeleteCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editComment

- **Signature**: `editComment(request: VideosVideoComments.EditCommentRequest, options?: RequestOptions): ApiPromise<Comment, VideosVideoComments.EditCommentError>`
- **Wire**: `PATCH /videos/{video_id}/comments/{comment_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Comment`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.EditCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.EditCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCommentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCommentsRequest` | `videosCommentsRequestSchema` | `src/models/videos-comments-request.ts` |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getComment

- **Signature**: `getComment(request: VideosVideoComments.GetCommentRequest, options?: RequestOptions): ApiPromise<Comment, VideosVideoComments.GetCommentError>`
- **Wire**: `GET /videos/{video_id}/comments/{comment_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Comment`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.GetCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.GetCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Comment` | `commentSchema` | `src/models/comment.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getCommentReplies

- **Signature**: `getCommentReplies(request: VideosVideoComments.GetCommentRepliesRequest, options?: RequestOptions): ApiPromise<CommentConnection, VideosVideoComments.GetCommentRepliesError>`
- **Wire**: `GET /videos/{video_id}/comments/{comment_id}/replies`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVideoComments.GetCommentRepliesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVideoComments.GetCommentRepliesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `commentId` | `path` | `comment_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentConnection` | `commentConnectionSchema` | `src/models/comment-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getComments

- **Signature**: `getComments(request: VideosVideoComments.GetCommentsRequest, options?: RequestOptions): ApiPromise<CommentConnection, ApiError>`
- **Wire**: `GET /videos/{video_id}/comments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosVideoComments.GetCommentsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `CommentConnection` | `commentConnectionSchema` | `src/models/comment-connection.ts` |

### getCommentsAlt1

- **Signature**: `getCommentsAlt1(request: VideosVideoComments.GetCommentsAlt1Request, options?: RequestOptions): ApiPromise<CommentConnection, ApiError>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/comments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosVideoComments.GetCommentsAlt1Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `CommentConnection` | `commentConnectionSchema` | `src/models/comment-connection.ts` |

