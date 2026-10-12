<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventLowLatency — operations

Accessor: `client.liveEventLowLatency` · Source: `src/resources/live-event-low-latency.ts` · 3 operations · Request and error types: namespace `LiveEventLowLatency`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### toggleRleLowLatency

- **Signature**: `toggleRleLowLatency(request: LiveEventLowLatency.ToggleRleLowLatencyRequest, options?: RequestOptions): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyError>`
- **Wire**: `PATCH /users/{user_id}/live_events/{live_event_id}/low_latency`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringEventLowLatency`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventLowLatency.ToggleRleLowLatencyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventLowLatency.ToggleRleLowLatencyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsLowLatencyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsLowLatencyRequest` | `usersLiveEventsLowLatencyRequestSchema` | `src/models/users-live-events-low-latency-request.ts` |
| `RecurringEventLowLatency` | `recurringEventLowLatencySchema` | `src/models/recurring-event-low-latency.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### toggleRleLowLatencyAlt1

- **Signature**: `toggleRleLowLatencyAlt1(request: LiveEventLowLatency.ToggleRleLowLatencyAlt1Request, options?: RequestOptions): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt1Error>`
- **Wire**: `PATCH /live_events/{live_event_id}/low_latency`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringEventLowLatency`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventLowLatency.ToggleRleLowLatencyAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventLowLatency.ToggleRleLowLatencyAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsLowLatencyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsLowLatencyRequest` | `liveEventsLowLatencyRequestSchema` | `src/models/live-events-low-latency-request.ts` |
| `RecurringEventLowLatency` | `recurringEventLowLatencySchema` | `src/models/recurring-event-low-latency.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### toggleRleLowLatencyAlt2

- **Signature**: `toggleRleLowLatencyAlt2(request: LiveEventLowLatency.ToggleRleLowLatencyAlt2Request, options?: RequestOptions): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt2Error>`
- **Wire**: `PATCH /me/live_events/{live_event_id}/low_latency`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringEventLowLatency`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventLowLatency.ToggleRleLowLatencyAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventLowLatency.ToggleRleLowLatencyAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsLowLatencyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsLowLatencyRequest` | `meLiveEventsLowLatencyRequestSchema` | `src/models/me-live-events-low-latency-request.ts` |
| `RecurringEventLowLatency` | `recurringEventLowLatencySchema` | `src/models/recurring-event-low-latency.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

