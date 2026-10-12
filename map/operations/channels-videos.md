<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsVideos — operations

Accessor: `client.channelsVideos` · Source: `src/resources/channels-videos.ts` · 7 operations · Request and error types: namespace `ChannelsVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideoToChannel

- **Signature**: `addVideoToChannel(request: ChannelsVideos.AddVideoToChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsVideos.AddVideoToChannelError>`
- **Wire**: `PUT /channels/{channel_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.AddVideoToChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.AddVideoToChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addVideosToChannel

- **Signature**: `addVideosToChannel(request: ChannelsVideos.AddVideosToChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsVideos.AddVideosToChannelError>`
- **Wire**: `PUT /channels/{channel_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.AddVideosToChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.AddVideosToChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsVideosRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsVideosRequest1` | `channelsVideosRequest1Schema` | `src/models/channels-videos-request1.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoFromChannel

- **Signature**: `deleteVideoFromChannel(request: ChannelsVideos.DeleteVideoFromChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsVideos.DeleteVideoFromChannelError>`
- **Wire**: `DELETE /channels/{channel_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.DeleteVideoFromChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.DeleteVideoFromChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAvailableVideoChannels

- **Signature**: `getAvailableVideoChannels(request: ChannelsVideos.GetAvailableVideoChannelsRequest, options?: RequestOptions): ApiPromise<ChannelConnection, ChannelsVideos.GetAvailableVideoChannelsError>`
- **Wire**: `GET /videos/{video_id}/available_channels`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.GetAvailableVideoChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.GetAvailableVideoChannelsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChannelVideo

- **Signature**: `getChannelVideo(request: ChannelsVideos.GetChannelVideoRequest, options?: RequestOptions): ApiPromise<Video, ChannelsVideos.GetChannelVideoError>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.GetChannelVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.GetChannelVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getChannelVideos

- **Signature**: `getChannelVideos(request: ChannelsVideos.GetChannelVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, ChannelsVideos.GetChannelVideosError>`
- **Wire**: `GET /channels/{channel_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.GetChannelVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"legacyError"` [400] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.GetChannelVideosRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sizes` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort10` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort10` | `sort10Schema` | `src/models/sort10.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### removeVideosFromChannel

- **Signature**: `removeVideosFromChannel(request: ChannelsVideos.RemoveVideosFromChannelRequest, options?: RequestOptions): ApiPromise<undefined, ChannelsVideos.RemoveVideosFromChannelError>`
- **Wire**: `DELETE /channels/{channel_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `ChannelsVideos.RemoveVideosFromChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsVideos.RemoveVideosFromChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelsVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsVideosRequest` | `channelsVideosRequestSchema` | `src/models/channels-videos-request.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

