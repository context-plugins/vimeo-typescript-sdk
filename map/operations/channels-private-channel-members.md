<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsPrivateChannelMembers — operations

Accessor: `client.channelsPrivateChannelMembers` · Source: `src/resources/channels-private-channel-members.ts` · 4 operations · Request and error types: namespace `ChannelsPrivateChannelMembers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteChannelPrivacyUser

- **Signature**: `deleteChannelPrivacyUser(request: ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError>`
- **Wire**: `DELETE /channels/{channel_id}/privacy/users/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getChannelPrivacyUsers

- **Signature**: `getChannelPrivacyUsers(request: ChannelsPrivateChannelMembers.GetChannelPrivacyUsersRequest, options?: RequestOptions): ApiPromise<UserConnection, ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError>`
- **Wire**: `GET /channels/{channel_id}/privacy/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsPrivateChannelMembers.GetChannelPrivacyUsersRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setChannelPrivacyUser

- **Signature**: `setChannelPrivacyUser(request: ChannelsPrivateChannelMembers.SetChannelPrivacyUserRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsPrivateChannelMembers.SetChannelPrivacyUserError>`
- **Wire**: `PUT /channels/{channel_id}/privacy/users/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ChannelsPrivateChannelMembers.SetChannelPrivacyUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsPrivateChannelMembers.SetChannelPrivacyUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setChannelPrivacyUsers

- **Signature**: `setChannelPrivacyUsers(request: ChannelsPrivateChannelMembers.SetChannelPrivacyUsersRequest, options?: RequestOptions): ApiPromise<User[], ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError>`
- **Wire**: `PUT /channels/{channel_id}/privacy/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `User[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsPrivateChannelMembers.SetChannelPrivacyUsersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsPrivacyUsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsPrivacyUsersRequest` | `channelsPrivacyUsersRequestSchema` | `src/models/channels-privacy-users-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

