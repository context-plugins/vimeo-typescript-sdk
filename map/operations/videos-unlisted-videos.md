<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosUnlistedVideos — operations

Accessor: `client.videosUnlistedVideos` · Source: `src/resources/videos-unlisted-videos.ts` · 6 operations · Request and error types: namespace `VideosUnlistedVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideoPrivacyUser

- **Signature**: `addVideoPrivacyUser(request: VideosUnlistedVideos.AddVideoPrivacyUserRequest, options?: RequestOptions): ApiPromise<User, VideosUnlistedVideos.AddVideoPrivacyUserError>`
- **Wire**: `PUT /videos/{video_id}/privacy/users/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosUnlistedVideos.AddVideoPrivacyUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUnlistedVideos.AddVideoPrivacyUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addVideoPrivacyUsers

- **Signature**: `addVideoPrivacyUsers(request: VideosUnlistedVideos.AddVideoPrivacyUsersRequest, options?: RequestOptions): ApiPromise<User[], ApiError>`
- **Wire**: `PUT /videos/{video_id}/privacy/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosUnlistedVideos.AddVideoPrivacyUsersRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

### addVideoPrivacyUsersAlt1

- **Signature**: `addVideoPrivacyUsersAlt1(request: VideosUnlistedVideos.AddVideoPrivacyUsersAlt1Request, options?: RequestOptions): ApiPromise<User[], ApiError>`
- **Wire**: `PUT /channels/{channel_id}/videos/{video_id}/privacy/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosUnlistedVideos.AddVideoPrivacyUsersAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

### deleteVideoPrivacyUser

- **Signature**: `deleteVideoPrivacyUser(request: VideosUnlistedVideos.DeleteVideoPrivacyUserRequest, options?: RequestOptions): ApiPromise<undefined, VideosUnlistedVideos.DeleteVideoPrivacyUserError>`
- **Wire**: `DELETE /videos/{video_id}/privacy/users/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosUnlistedVideos.DeleteVideoPrivacyUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUnlistedVideos.DeleteVideoPrivacyUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoPrivacyUsers

- **Signature**: `getVideoPrivacyUsers(request: VideosUnlistedVideos.GetVideoPrivacyUsersRequest, options?: RequestOptions): ApiPromise<UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersError>`
- **Wire**: `GET /videos/{video_id}/privacy/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosUnlistedVideos.GetVideoPrivacyUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUnlistedVideos.GetVideoPrivacyUsersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoPrivacyUsersAlt1

- **Signature**: `getVideoPrivacyUsersAlt1(request: VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Request, options?: RequestOptions): ApiPromise<UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/privacy/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

