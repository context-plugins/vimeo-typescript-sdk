<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsCategories — operations

Accessor: `client.channelsCategories` · Source: `src/resources/channels-categories.ts` · 4 operations · Request and error types: namespace `ChannelsCategories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addChannelCategories

- **Signature**: `addChannelCategories(request: ChannelsCategories.AddChannelCategoriesRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsCategories.AddChannelCategoriesError>`
- **Wire**: `PUT /channels/{channel_id}/categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ChannelsCategories.AddChannelCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsCategories.AddChannelCategoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsCategoriesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsCategoriesRequest` | `channelsCategoriesRequestSchema` | `src/models/channels-categories-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### categorizeChannel

- **Signature**: `categorizeChannel(request: ChannelsCategories.CategorizeChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsCategories.CategorizeChannelError>`
- **Wire**: `PUT /channels/{channel_id}/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ChannelsCategories.CategorizeChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsCategories.CategorizeChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteChannelCategory

- **Signature**: `deleteChannelCategory(request: ChannelsCategories.DeleteChannelCategoryRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsCategories.DeleteChannelCategoryError>`
- **Wire**: `DELETE /channels/{channel_id}/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ChannelsCategories.DeleteChannelCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsCategories.DeleteChannelCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChannelCategories

- **Signature**: `getChannelCategories(request: ChannelsCategories.GetChannelCategoriesRequest, options?: RequestOptions): ApiPromise<CategoryConnection, ChannelsCategories.GetChannelCategoriesError>`
- **Wire**: `GET /channels/{channel_id}/categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoryConnection`
- **Error**: `ChannelsCategories.GetChannelCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsCategories.GetChannelCategoriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoryConnection` | `categoryConnectionSchema` | `src/models/category-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

