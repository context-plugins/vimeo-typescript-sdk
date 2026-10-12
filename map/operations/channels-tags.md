<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsTags — operations

Accessor: `client.channelsTags` · Source: `src/resources/channels-tags.ts` · 5 operations · Request and error types: namespace `ChannelsTags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addChannelTag

- **Signature**: `addChannelTag(request: ChannelsTags.AddChannelTagRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsTags.AddChannelTagError>`
- **Wire**: `PUT /channels/{channel_id}/tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsTags.AddChannelTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTags.AddChannelTagRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `word` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addTagsToChannel

- **Signature**: `addTagsToChannel(request: ChannelsTags.AddTagsToChannelRequest, options?: RequestOptions): ApiPromise<Tag[], ChannelsTags.AddTagsToChannelError>`
- **Wire**: `PUT /channels/{channel_id}/tags`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Tag[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsTags.AddTagsToChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTags.AddTagsToChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsTagsRequest[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsTagsRequest` | `channelsTagsRequestSchema` | `src/models/channels-tags-request.ts` |
| `Tag` | `tagSchema` | `src/models/tag.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### checkIfChannelHasTag

- **Signature**: `checkIfChannelHasTag(request: ChannelsTags.CheckIfChannelHasTagRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsTags.CheckIfChannelHasTagError>`
- **Wire**: `GET /channels/{channel_id}/tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsTags.CheckIfChannelHasTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTags.CheckIfChannelHasTagRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `word` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteTagFromChannel

- **Signature**: `deleteTagFromChannel(request: ChannelsTags.DeleteTagFromChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsTags.DeleteTagFromChannelError>`
- **Wire**: `DELETE /channels/{channel_id}/tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsTags.DeleteTagFromChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTags.DeleteTagFromChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `word` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getChannelTags

- **Signature**: `getChannelTags(request: ChannelsTags.GetChannelTagsRequest, options?: RequestOptions): ApiPromise<TagConnection, ChannelsTags.GetChannelTagsError>`
- **Wire**: `GET /channels/{channel_id}/tags`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsTags.GetChannelTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTags.GetChannelTagsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagConnection` | `tagConnectionSchema` | `src/models/tag-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

