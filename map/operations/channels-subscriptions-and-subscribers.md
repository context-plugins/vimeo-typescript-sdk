<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsSubscriptionsAndSubscribers — operations

Accessor: `client.channelsSubscriptionsAndSubscribers` · Source: `src/resources/channels-subscriptions-and-subscribers.ts` · 7 operations · Request and error types: namespace `ChannelsSubscriptionsAndSubscribers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkIfUserSubscribedToChannel

- **Signature**: `checkIfUserSubscribedToChannel(request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError>`
- **Wire**: `GET /users/{user_id}/channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkIfUserSubscribedToChannelAlt1

- **Signature**: `checkIfUserSubscribedToChannelAlt1(request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Request, options?: RequestOptions): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error>`
- **Wire**: `GET /me/channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChannelSubscribers

- **Signature**: `getChannelSubscribers(request: ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersRequest, options?: RequestOptions): ApiPromise<UserConnection, ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError>`
- **Wire**: `GET /channels/{channel_id}/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `filter` | `query` | — | `Filter2` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter2` | `filter2Schema` | `src/models/filter2.ts` |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### subscribeToChannel

- **Signature**: `subscribeToChannel(request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError>`
- **Wire**: `PUT /users/{user_id}/channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.SubscribeToChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### subscribeToChannelAlt1

- **Signature**: `subscribeToChannelAlt1(request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Request, options?: RequestOptions): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error>`
- **Wire**: `PUT /me/channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### unsubscribeFromChannel

- **Signature**: `unsubscribeFromChannel(request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError>`
- **Wire**: `DELETE /users/{user_id}/channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### unsubscribeFromChannelAlt1

- **Signature**: `unsubscribeFromChannelAlt1(request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Request, options?: RequestOptions): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error>`
- **Wire**: `DELETE /me/channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

