<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventAutomatedClosedCaptions — operations

Accessor: `client.liveEventAutomatedClosedCaptions` · Source: `src/resources/live-event-automated-closed-captions.ts` · 3 operations · Request and error types: namespace `LiveEventAutomatedClosedCaptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### editLiveEventAutoCc

- **Signature**: `editLiveEventAutoCc(request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcRequest, options?: RequestOptions): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError>`
- **Wire**: `PATCH /users/{user_id}/live_events/{live_event_id}/auto_cc`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `EventAutomatedClosedCaptions`
- **Error**: `LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsAutoCcRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsAutoCcRequest` | `usersLiveEventsAutoCcRequestSchema` | `src/models/users-live-events-auto-cc-request.ts` |
| `EventAutomatedClosedCaptions` | `eventAutomatedClosedCaptionsSchema` | `src/models/event-automated-closed-captions.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editLiveEventAutoCcAlt1

- **Signature**: `editLiveEventAutoCcAlt1(request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Request, options?: RequestOptions): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error>`
- **Wire**: `PATCH /live_events/{live_event_id}/auto_cc`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `EventAutomatedClosedCaptions`
- **Error**: `LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsAutoCcRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsAutoCcRequest` | `liveEventsAutoCcRequestSchema` | `src/models/live-events-auto-cc-request.ts` |
| `EventAutomatedClosedCaptions` | `eventAutomatedClosedCaptionsSchema` | `src/models/event-automated-closed-captions.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editLiveEventAutoCcAlt2

- **Signature**: `editLiveEventAutoCcAlt2(request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Request, options?: RequestOptions): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error>`
- **Wire**: `PATCH /me/live_events/{live_event_id}/auto_cc`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `EventAutomatedClosedCaptions`
- **Error**: `LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsAutoCcRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsAutoCcRequest` | `meLiveEventsAutoCcRequestSchema` | `src/models/me-live-events-auto-cc-request.ts` |
| `EventAutomatedClosedCaptions` | `eventAutomatedClosedCaptionsSchema` | `src/models/event-automated-closed-captions.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

