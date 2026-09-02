<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsEssentials — operations

Accessor: `client.channelsEssentials` · Source: `src/resources/channels-essentials.ts` · 7 operations · Request and error types: namespace `ChannelsEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createChannel

- **Signature**: `createChannel(request: ChannelsEssentials.CreateChannelRequest, options?: RequestOptions): ApiPromise<Channel, ChannelsEssentials.CreateChannelError>`
- **Wire**: `POST /channels`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Channel`
- **Error**: `ChannelsEssentials.CreateChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsEssentials.CreateChannelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChannelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsRequest` | `channelsRequestSchema` | `src/models/channels-request.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteChannel

- **Signature**: `deleteChannel(request: ChannelsEssentials.DeleteChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsEssentials.DeleteChannelError>`
- **Wire**: `DELETE /channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ChannelsEssentials.DeleteChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsEssentials.DeleteChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editChannel

- **Signature**: `editChannel(request: ChannelsEssentials.EditChannelRequest, options?: RequestOptions): ApiPromise<Channel, ChannelsEssentials.EditChannelError>`
- **Wire**: `PATCH /channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Channel`
- **Error**: `ChannelsEssentials.EditChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsEssentials.EditChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsRequest1` | `channelsRequest1Schema` | `src/models/channels-request1.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChannel

- **Signature**: `getChannel(request: ChannelsEssentials.GetChannelRequest, options?: RequestOptions): ApiPromise<Channel, ResponseError>`
- **Wire**: `GET /channels/{channel_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Channel`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ChannelsEssentials.GetChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `sizes` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |

### getChannelSubscriptions

- **Signature**: `getChannelSubscriptions(request: ChannelsEssentials.GetChannelSubscriptionsRequest, options?: RequestOptions): ApiPromise<ChannelConnection, ChannelsEssentials.GetChannelSubscriptionsError>`
- **Wire**: `GET /users/{user_id}/channels`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelConnection`
- **Error**: `ChannelsEssentials.GetChannelSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsEssentials.GetChannelSubscriptionsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter12` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort4` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter12` | `filter12Schema` | `src/models/filter12.ts` |
| `Sort4` | `sort4Schema` | `src/models/sort4.ts` |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getChannelSubscriptionsAlt1

- **Signature**: `getChannelSubscriptionsAlt1(request: ChannelsEssentials.GetChannelSubscriptionsAlt1Request, options?: RequestOptions): ApiPromise<ChannelConnection, ChannelsEssentials.GetChannelSubscriptionsAlt1Error>`
- **Wire**: `GET /me/channels`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelConnection`
- **Error**: `ChannelsEssentials.GetChannelSubscriptionsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsEssentials.GetChannelSubscriptionsAlt1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter12` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort4` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter12` | `filter12Schema` | `src/models/filter12.ts` |
| `Sort4` | `sort4Schema` | `src/models/sort4.ts` |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getChannels

- **Signature**: `getChannels(request: ChannelsEssentials.GetChannelsRequest, options?: RequestOptions): ApiPromise<ChannelConnection, ChannelsEssentials.GetChannelsError>`
- **Wire**: `GET /channels`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelConnection`
- **Error**: `ChannelsEssentials.GetChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsEssentials.GetChannelsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter1` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort7` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter1` | `filter1Schema` | `src/models/filter1.ts` |
| `Sort7` | `sort7Schema` | `src/models/sort7.ts` |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

