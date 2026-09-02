<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEssentials — operations

Accessor: `client.liveEssentials` · Source: `src/resources/live-essentials.ts` · 19 operations · Request and error types: namespace `LiveEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createLiveEvent

- **Signature**: `createLiveEvent(request: LiveEssentials.CreateLiveEventRequest, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventError>`
- **Wire**: `POST /users/{user_id}/live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.CreateLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.CreateLiveEventRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsRequest1` | `usersLiveEventsRequest1Schema` | `src/models/users-live-events-request1.ts` |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createLiveEventAlt1

- **Signature**: `createLiveEventAlt1(request: LiveEssentials.CreateLiveEventAlt1Request, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventAlt1Error>`
- **Wire**: `POST /live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.CreateLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.CreateLiveEventAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LiveEventsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsRequest1` | `liveEventsRequest1Schema` | `src/models/live-events-request1.ts` |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createLiveEventAlt2

- **Signature**: `createLiveEventAlt2(request: LiveEssentials.CreateLiveEventAlt2Request, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventAlt2Error>`
- **Wire**: `POST /me/live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.CreateLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.CreateLiveEventAlt2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeLiveEventsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsRequest1` | `meLiveEventsRequest1Schema` | `src/models/me-live-events-request1.ts` |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEvent

- **Signature**: `deleteLiveEvent(request: LiveEssentials.DeleteLiveEventRequest, options?: RequestOptions): ApiPromise<undefined, LiveEssentials.DeleteLiveEventError>`
- **Wire**: `DELETE /users/{user_id}/live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEssentials.DeleteLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.DeleteLiveEventRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventAlt1

- **Signature**: `deleteLiveEventAlt1(request: LiveEssentials.DeleteLiveEventAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEssentials.DeleteLiveEventAlt1Error>`
- **Wire**: `DELETE /live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEssentials.DeleteLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.DeleteLiveEventAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventAlt2

- **Signature**: `deleteLiveEventAlt2(request: LiveEssentials.DeleteLiveEventAlt2Request, options?: RequestOptions): ApiPromise<undefined, LiveEssentials.DeleteLiveEventAlt2Error>`
- **Wire**: `DELETE /me/live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEssentials.DeleteLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.DeleteLiveEventAlt2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEvents

- **Signature**: `deleteLiveEvents(request: LiveEssentials.DeleteLiveEventsRequest, options?: RequestOptions): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsError>`
- **Wire**: `DELETE /users/{user_id}/live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEssentials.DeleteLiveEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.DeleteLiveEventsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsRequest` | `usersLiveEventsRequestSchema` | `src/models/users-live-events-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventsAlt1

- **Signature**: `deleteLiveEventsAlt1(request: LiveEssentials.DeleteLiveEventsAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsAlt1Error>`
- **Wire**: `DELETE /live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEssentials.DeleteLiveEventsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.DeleteLiveEventsAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LiveEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsRequest` | `liveEventsRequestSchema` | `src/models/live-events-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventsAlt2

- **Signature**: `deleteLiveEventsAlt2(request: LiveEssentials.DeleteLiveEventsAlt2Request, options?: RequestOptions): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsAlt2Error>`
- **Wire**: `DELETE /me/live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEssentials.DeleteLiveEventsAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.DeleteLiveEventsAlt2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeLiveEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsRequest` | `meLiveEventsRequestSchema` | `src/models/me-live-events-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEvent

- **Signature**: `getLiveEvent(request: LiveEssentials.GetLiveEventRequest, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.GetLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.GetLiveEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `password` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventAlt1

- **Signature**: `getLiveEventAlt1(request: LiveEssentials.GetLiveEventAlt1Request, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventAlt1Error>`
- **Wire**: `GET /live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.GetLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.GetLiveEventAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `password` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventAlt2

- **Signature**: `getLiveEventAlt2(request: LiveEssentials.GetLiveEventAlt2Request, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventAlt2Error>`
- **Wire**: `GET /me/live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.GetLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.GetLiveEventAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `password` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventOccurrences

- **Signature**: `getLiveEventOccurrences(request: LiveEssentials.GetLiveEventOccurrencesRequest, options?: RequestOptions): ApiPromise<LiveEventOccurrenceConnection, ResponseError>`
- **Wire**: `GET /users/{user_id}/live_events_occurrences`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LiveEventOccurrenceConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiveEssentials.GetLiveEventOccurrencesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `startDate` | `query` | `start_date` | `string` | yes |
| `endDate` | `query` | `end_date` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventOccurrenceConnection` | `liveEventOccurrenceConnectionSchema` | `src/models/live-event-occurrence-connection.ts` |

### getLiveEvents

- **Signature**: `getLiveEvents(request: LiveEssentials.GetLiveEventsRequest, options?: RequestOptions): ApiPromise<EventConnection, ResponseError>`
- **Wire**: `GET /users/{user_id}/live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiveEssentials.GetLiveEventsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter8` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |
| `type` | `query` | — | `Type31` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter8` | `filter8Schema` | `src/models/filter8.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `Type31` | `type31Schema` | `src/models/type31.ts` |
| `EventConnection` | `eventConnectionSchema` | `src/models/event-connection.ts` |

### getLiveEventsAlt1

- **Signature**: `getLiveEventsAlt1(request: LiveEssentials.GetLiveEventsAlt1Request, options?: RequestOptions): ApiPromise<EventConnection, ResponseError>`
- **Wire**: `GET /live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiveEssentials.GetLiveEventsAlt1Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter8` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |
| `type` | `query` | — | `Type31` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter8` | `filter8Schema` | `src/models/filter8.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `Type31` | `type31Schema` | `src/models/type31.ts` |
| `EventConnection` | `eventConnectionSchema` | `src/models/event-connection.ts` |

### getLiveEventsAlt2

- **Signature**: `getLiveEventsAlt2(request: LiveEssentials.GetLiveEventsAlt2Request, options?: RequestOptions): ApiPromise<EventConnection, ResponseError>`
- **Wire**: `GET /me/live_events`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiveEssentials.GetLiveEventsAlt2Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter8` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |
| `type` | `query` | — | `Type31` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter8` | `filter8Schema` | `src/models/filter8.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `Type31` | `type31Schema` | `src/models/type31.ts` |
| `EventConnection` | `eventConnectionSchema` | `src/models/event-connection.ts` |

### updateLiveEvent

- **Signature**: `updateLiveEvent(request: LiveEssentials.UpdateLiveEventRequest, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventError>`
- **Wire**: `PATCH /users/{user_id}/live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.UpdateLiveEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.UpdateLiveEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsRequest2` | `usersLiveEventsRequest2Schema` | `src/models/users-live-events-request2.ts` |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateLiveEventAlt1

- **Signature**: `updateLiveEventAlt1(request: LiveEssentials.UpdateLiveEventAlt1Request, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventAlt1Error>`
- **Wire**: `PATCH /live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.UpdateLiveEventAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.UpdateLiveEventAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsRequest2` | `liveEventsRequest2Schema` | `src/models/live-events-request2.ts` |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateLiveEventAlt2

- **Signature**: `updateLiveEventAlt2(request: LiveEssentials.UpdateLiveEventAlt2Request, options?: RequestOptions): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventAlt2Error>`
- **Wire**: `PATCH /me/live_events/{live_event_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringEvent`
- **Error**: `LiveEssentials.UpdateLiveEventAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEssentials.UpdateLiveEventAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsRequest2` | `meLiveEventsRequest2Schema` | `src/models/me-live-events-request2.ts` |
| `RecurringEvent` | `recurringEventSchema` | `src/models/recurring-event.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

