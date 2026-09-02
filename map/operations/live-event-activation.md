<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventActivation — operations

Accessor: `client.liveEventActivation` · Source: `src/resources/live-event-activation.ts` · 3 operations · Request and error types: namespace `LiveEventActivation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateLiveEvent

- **Signature**: `activateLiveEvent(request: LiveEventActivation.ActivateLiveEventRequest, options?: RequestOptions): ApiPromise<Video, LiveEventActivation.ActivateLiveEventError>`
- **Wire**: `POST /users/{user_id}/live_events/{live_event_id}/activate`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `LiveEventActivation.ActivateLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventActivation.ActivateLiveEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsActivateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsActivateRequest` | `usersLiveEventsActivateRequestSchema` | `src/models/users-live-events-activate-request.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### activateLiveEventAlt1

- **Signature**: `activateLiveEventAlt1(request: LiveEventActivation.ActivateLiveEventAlt1Request, options?: RequestOptions): ApiPromise<Video, LiveEventActivation.ActivateLiveEventAlt1Error>`
- **Wire**: `POST /live_events/{live_event_id}/activate`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `LiveEventActivation.ActivateLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventActivation.ActivateLiveEventAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsActivateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsActivateRequest` | `liveEventsActivateRequestSchema` | `src/models/live-events-activate-request.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### activateLiveEventAlt2

- **Signature**: `activateLiveEventAlt2(request: LiveEventActivation.ActivateLiveEventAlt2Request, options?: RequestOptions): ApiPromise<Video, LiveEventActivation.ActivateLiveEventAlt2Error>`
- **Wire**: `POST /me/live_events/{live_event_id}/activate`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Video`
- **Error**: `LiveEventActivation.ActivateLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventActivation.ActivateLiveEventAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsActivateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsActivateRequest` | `meLiveEventsActivateRequestSchema` | `src/models/me-live-events-activate-request.ts` |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

