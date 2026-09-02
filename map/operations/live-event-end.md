<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventEnd — operations

Accessor: `client.liveEventEnd` · Source: `src/resources/live-event-end.ts` · 3 operations · Request and error types: namespace `LiveEventEnd`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### endLiveEvent

- **Signature**: `endLiveEvent(request: LiveEventEnd.EndLiveEventRequest, options?: RequestOptions): ApiPromise<Video, LiveEventEnd.EndLiveEventError>`
- **Wire**: `POST /users/{user_id}/live_events/{live_event_id}/end`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `LiveEventEnd.EndLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventEnd.EndLiveEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `string` | yes |
| `clipId` | `query` | `clip_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### endLiveEventAlt1

- **Signature**: `endLiveEventAlt1(request: LiveEventEnd.EndLiveEventAlt1Request, options?: RequestOptions): ApiPromise<Video, LiveEventEnd.EndLiveEventAlt1Error>`
- **Wire**: `POST /live_events/{live_event_id}/end`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `LiveEventEnd.EndLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventEnd.EndLiveEventAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `clipId` | `query` | `clip_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### endLiveEventAlt2

- **Signature**: `endLiveEventAlt2(request: LiveEventEnd.EndLiveEventAlt2Request, options?: RequestOptions): ApiPromise<Video, LiveEventEnd.EndLiveEventAlt2Error>`
- **Wire**: `POST /me/live_events/{live_event_id}/end`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `LiveEventEnd.EndLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventEnd.EndLiveEventAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `clipId` | `query` | `clip_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

