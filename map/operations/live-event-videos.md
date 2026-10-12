<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventVideos — operations

Accessor: `client.liveEventVideos` · Source: `src/resources/live-event-videos.ts` · 12 operations · Request and error types: namespace `LiveEventVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideosToLiveEvent

- **Signature**: `addVideosToLiveEvent(request: LiveEventVideos.AddVideosToLiveEventRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventError>`
- **Wire**: `POST /users/{user_id}/live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.AddVideosToLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.AddVideosToLiveEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsVideosRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsVideosRequest1` | `usersLiveEventsVideosRequest1Schema` | `src/models/users-live-events-videos-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addVideosToLiveEventAlt1

- **Signature**: `addVideosToLiveEventAlt1(request: LiveEventVideos.AddVideosToLiveEventAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventAlt1Error>`
- **Wire**: `POST /live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.AddVideosToLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.AddVideosToLiveEventAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsVideosRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsVideosRequest1` | `liveEventsVideosRequest1Schema` | `src/models/live-events-videos-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addVideosToLiveEventAlt2

- **Signature**: `addVideosToLiveEventAlt2(request: LiveEventVideos.AddVideosToLiveEventAlt2Request, options?: RequestOptions): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventAlt2Error>`
- **Wire**: `POST /me/live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.AddVideosToLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.AddVideosToLiveEventAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsVideosRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsVideosRequest1` | `meLiveEventsVideosRequest1Schema` | `src/models/me-live-events-videos-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventVideo

- **Signature**: `getLiveEventVideo(request: LiveEventVideos.GetLiveEventVideoRequest, options?: RequestOptions): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.GetLiveEventVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.GetLiveEventVideoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventVideoAlt1

- **Signature**: `getLiveEventVideoAlt1(request: LiveEventVideos.GetLiveEventVideoAlt1Request, options?: RequestOptions): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoAlt1Error>`
- **Wire**: `GET /live_events/{live_event_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.GetLiveEventVideoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.GetLiveEventVideoAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventVideoAlt2

- **Signature**: `getLiveEventVideoAlt2(request: LiveEventVideos.GetLiveEventVideoAlt2Request, options?: RequestOptions): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoAlt2Error>`
- **Wire**: `GET /me/live_events/{live_event_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.GetLiveEventVideoAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.GetLiveEventVideoAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventVideos

- **Signature**: `getLiveEventVideos(request: LiveEventVideos.GetLiveEventVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.GetLiveEventVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.GetLiveEventVideosRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort17` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort17` | `sort17Schema` | `src/models/sort17.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventVideosAlt1

- **Signature**: `getLiveEventVideosAlt1(request: LiveEventVideos.GetLiveEventVideosAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosAlt1Error>`
- **Wire**: `GET /live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.GetLiveEventVideosAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.GetLiveEventVideosAlt1Request` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort17` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort17` | `sort17Schema` | `src/models/sort17.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventVideosAlt2

- **Signature**: `getLiveEventVideosAlt2(request: LiveEventVideos.GetLiveEventVideosAlt2Request, options?: RequestOptions): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosAlt2Error>`
- **Wire**: `GET /me/live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.GetLiveEventVideosAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.GetLiveEventVideosAlt2Request` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort17` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort17` | `sort17Schema` | `src/models/sort17.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideosFromLiveEvent

- **Signature**: `removeVideosFromLiveEvent(request: LiveEventVideos.RemoveVideosFromLiveEventRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventError>`
- **Wire**: `DELETE /users/{user_id}/live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.RemoveVideosFromLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.RemoveVideosFromLiveEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsVideosRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsVideosRequest` | `usersLiveEventsVideosRequestSchema` | `src/models/users-live-events-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideosFromLiveEventAlt1

- **Signature**: `removeVideosFromLiveEventAlt1(request: LiveEventVideos.RemoveVideosFromLiveEventAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt1Error>`
- **Wire**: `DELETE /live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.RemoveVideosFromLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.RemoveVideosFromLiveEventAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsVideosRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsVideosRequest` | `liveEventsVideosRequestSchema` | `src/models/live-events-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideosFromLiveEventAlt2

- **Signature**: `removeVideosFromLiveEventAlt2(request: LiveEventVideos.RemoveVideosFromLiveEventAlt2Request, options?: RequestOptions): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt2Error>`
- **Wire**: `DELETE /me/live_events/{live_event_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventVideos.RemoveVideosFromLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventVideos.RemoveVideosFromLiveEventAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsVideosRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsVideosRequest` | `meLiveEventsVideosRequestSchema` | `src/models/me-live-events-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

