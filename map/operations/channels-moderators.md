<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsModerators — operations

Accessor: `client.channelsModerators` · Source: `src/resources/channels-moderators.ts` · 7 operations · Request and error types: namespace `ChannelsModerators`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addChannelModerator

- **Signature**: `addChannelModerator(request: ChannelsModerators.AddChannelModeratorRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsModerators.AddChannelModeratorError>`
- **Wire**: `PUT /channels/{channel_id}/moderators/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsModerators.AddChannelModeratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsModerators.AddChannelModeratorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addChannelModerators

- **Signature**: `addChannelModerators(request: ChannelsModerators.AddChannelModeratorsRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsModerators.AddChannelModeratorsError>`
- **Wire**: `PUT /channels/{channel_id}/moderators`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsModerators.AddChannelModeratorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsModerators.AddChannelModeratorsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChannelModerator

- **Signature**: `getChannelModerator(request: ChannelsModerators.GetChannelModeratorRequest, options?: RequestOptions): ApiPromise<User, ApiError>`
- **Wire**: `GET /channels/{channel_id}/moderators/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ChannelsModerators.GetChannelModeratorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

### getChannelModerators

- **Signature**: `getChannelModerators(request: ChannelsModerators.GetChannelModeratorsRequest, options?: RequestOptions): ApiPromise<UserConnection, ApiError>`
- **Wire**: `GET /channels/{channel_id}/moderators`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ChannelsModerators.GetChannelModeratorsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### removeChannelModerator

- **Signature**: `removeChannelModerator(request: ChannelsModerators.RemoveChannelModeratorRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsModerators.RemoveChannelModeratorError>`
- **Wire**: `DELETE /channels/{channel_id}/moderators/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsModerators.RemoveChannelModeratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsModerators.RemoveChannelModeratorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### removeChannelModerators

- **Signature**: `removeChannelModerators(request: ChannelsModerators.RemoveChannelModeratorsRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsModerators.RemoveChannelModeratorsError>`
- **Wire**: `DELETE /channels/{channel_id}/moderators`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsModerators.RemoveChannelModeratorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsModerators.RemoveChannelModeratorsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsModeratorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsModeratorsRequest` | `channelsModeratorsRequestSchema` | `src/models/channels-moderators-request.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### replaceChannelModerators

- **Signature**: `replaceChannelModerators(request: ChannelsModerators.ReplaceChannelModeratorsRequest, options?: RequestOptions): ApiPromise<User[], ChannelsModerators.ReplaceChannelModeratorsError>`
- **Wire**: `PATCH /channels/{channel_id}/moderators`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsModerators.ReplaceChannelModeratorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsModerators.ReplaceChannelModeratorsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsModeratorsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsModeratorsRequest1` | `channelsModeratorsRequest1Schema` | `src/models/channels-moderators-request1.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

