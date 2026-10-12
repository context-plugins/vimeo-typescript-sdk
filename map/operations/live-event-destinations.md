<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventDestinations — operations

Accessor: `client.liveEventDestinations` · Source: `src/resources/live-event-destinations.ts` · 12 operations · Request and error types: namespace `LiveEventDestinations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLiveEventDestination

- **Signature**: `createLiveEventDestination(request: LiveEventDestinations.CreateLiveEventDestinationRequest, options?: RequestOptions): ApiPromise<EventDestination, LiveEventDestinations.CreateLiveEventDestinationError>`
- **Wire**: `POST /me/live_events/{live_event_id}/destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventDestination`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.CreateLiveEventDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.CreateLiveEventDestinationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsDestinationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsDestinationsRequest` | `meLiveEventsDestinationsRequestSchema` | `src/models/me-live-events-destinations-request.ts` |
| `EventDestination` | `eventDestinationSchema` | `src/models/event-destination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createLiveEventDestinationAlt1

- **Signature**: `createLiveEventDestinationAlt1(request: LiveEventDestinations.CreateLiveEventDestinationAlt1Request, options?: RequestOptions): ApiPromise<EventDestination, LiveEventDestinations.CreateLiveEventDestinationAlt1Error>`
- **Wire**: `POST /users/{user_id}/live_events/{live_event_id}/destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventDestination`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.CreateLiveEventDestinationAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.CreateLiveEventDestinationAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsDestinationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsDestinationsRequest` | `usersLiveEventsDestinationsRequestSchema` | `src/models/users-live-events-destinations-request.ts` |
| `EventDestination` | `eventDestinationSchema` | `src/models/event-destination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createOttDestination

- **Signature**: `createOttDestination(request: LiveEventDestinations.CreateOttDestinationRequest, options?: RequestOptions): ApiPromise<OttDestination, LiveEventDestinations.CreateOttDestinationError>`
- **Wire**: `POST /users/{user_id}/live_events/{live_event_id}/ott_destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OttDestination`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.CreateOttDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.CreateOttDestinationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OttDestination` | `ottDestinationSchema` | `src/models/ott-destination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventDestination

- **Signature**: `deleteLiveEventDestination(request: LiveEventDestinations.DeleteLiveEventDestinationRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventDestinations.DeleteLiveEventDestinationError>`
- **Wire**: `DELETE /destination/{destination_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.DeleteLiveEventDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.DeleteLiveEventDestinationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `destinationId` | `path` | `destination_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteOttDestination

- **Signature**: `deleteOttDestination(request: LiveEventDestinations.DeleteOttDestinationRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventDestinations.DeleteOttDestinationError>`
- **Wire**: `DELETE /users/{user_id}/live_events/{live_event_id}/ott_destination/{destination_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.DeleteOttDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.DeleteOttDestinationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `destinationId` | `path` | `destination_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAvailableDestinations

- **Signature**: `getAvailableDestinations(request: LiveEventDestinations.GetAvailableDestinationsRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventDestinations.GetAvailableDestinationsError>`
- **Wire**: `GET /users/{user_id}/destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.GetAvailableDestinationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.GetAvailableDestinationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAvailableDestinationsAlt1

- **Signature**: `getAvailableDestinationsAlt1(options?: RequestOptions): ApiPromise<undefined, LiveEventDestinations.GetAvailableDestinationsAlt1Error>`
- **Wire**: `GET /me/destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.GetAvailableDestinationsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventDestination

- **Signature**: `getLiveEventDestination(request: LiveEventDestinations.GetLiveEventDestinationRequest, options?: RequestOptions): ApiPromise<EventDestination, LiveEventDestinations.GetLiveEventDestinationError>`
- **Wire**: `GET /destination/{destination_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventDestination`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.GetLiveEventDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.GetLiveEventDestinationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `destinationId` | `path` | `destination_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventDestination` | `eventDestinationSchema` | `src/models/event-destination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventDestinations

- **Signature**: `getLiveEventDestinations(request: LiveEventDestinations.GetLiveEventDestinationsRequest, options?: RequestOptions): ApiPromise<EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsError>`
- **Wire**: `GET /me/live_events/{live_event_id}/destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventDestinationConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.GetLiveEventDestinationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.GetLiveEventDestinationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventDestinationConnection` | `eventDestinationConnectionSchema` | `src/models/event-destination-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventDestinationsAlt1

- **Signature**: `getLiveEventDestinationsAlt1(request: LiveEventDestinations.GetLiveEventDestinationsAlt1Request, options?: RequestOptions): ApiPromise<EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsAlt1Error>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventDestinationConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.GetLiveEventDestinationsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.GetLiveEventDestinationsAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventDestinationConnection` | `eventDestinationConnectionSchema` | `src/models/event-destination-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOttDestinations

- **Signature**: `getOttDestinations(request: LiveEventDestinations.GetOttDestinationsRequest, options?: RequestOptions): ApiPromise<OttDestinationConnection, LiveEventDestinations.GetOttDestinationsError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/ott_destinations`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OttDestinationConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.GetOttDestinationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.GetOttDestinationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OttDestinationConnection` | `ottDestinationConnectionSchema` | `src/models/ott-destination-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateLiveEventDestination

- **Signature**: `updateLiveEventDestination(request: LiveEventDestinations.UpdateLiveEventDestinationRequest, options?: RequestOptions): ApiPromise<EventDestination, LiveEventDestinations.UpdateLiveEventDestinationError>`
- **Wire**: `PATCH /destination/{destination_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventDestination`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventDestinations.UpdateLiveEventDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventDestinations.UpdateLiveEventDestinationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `destinationId` | `path` | `destination_id` | `number` | yes |
| `body` | `body` | — | `DestinationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestinationRequest` | `destinationRequestSchema` | `src/models/destination-request.ts` |
| `EventDestination` | `eventDestinationSchema` | `src/models/event-destination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

