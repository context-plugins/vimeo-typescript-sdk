<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEmbedPrivacy — operations

Accessor: `client.liveEmbedPrivacy` · Source: `src/resources/live-embed-privacy.ts` · 6 operations · Request and error types: namespace `LiveEmbedPrivacy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getLiveEventWhitelist

- **Signature**: `getLiveEventWhitelist(request: LiveEmbedPrivacy.GetLiveEventWhitelistRequest, options?: RequestOptions): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainConnection`
- **Error**: `LiveEmbedPrivacy.GetLiveEventWhitelistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEmbedPrivacy.GetLiveEventWhitelistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainConnection` | `domainConnectionSchema` | `src/models/domain-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventWhitelistAlt1

- **Signature**: `getLiveEventWhitelistAlt1(request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Request, options?: RequestOptions): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error>`
- **Wire**: `GET /live_events/{live_event_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainConnection`
- **Error**: `LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainConnection` | `domainConnectionSchema` | `src/models/domain-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventWhitelistAlt2

- **Signature**: `getLiveEventWhitelistAlt2(request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Request, options?: RequestOptions): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error>`
- **Wire**: `GET /me/live_events/{live_event_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainConnection`
- **Error**: `LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainConnection` | `domainConnectionSchema` | `src/models/domain-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setLiveEventWhitelist

- **Signature**: `setLiveEventWhitelist(request: LiveEmbedPrivacy.SetLiveEventWhitelistRequest, options?: RequestOptions): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistError>`
- **Wire**: `PUT /users/{user_id}/live_events/{live_event_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEmbedPrivacy.SetLiveEventWhitelistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEmbedPrivacy.SetLiveEventWhitelistRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsPrivacyDomainsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsPrivacyDomainsRequest` | `usersLiveEventsPrivacyDomainsRequestSchema` | `src/models/users-live-events-privacy-domains-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setLiveEventWhitelistAlt1

- **Signature**: `setLiveEventWhitelistAlt1(request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error>`
- **Wire**: `PUT /live_events/{live_event_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsPrivacyDomainsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsPrivacyDomainsRequest` | `liveEventsPrivacyDomainsRequestSchema` | `src/models/live-events-privacy-domains-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setLiveEventWhitelistAlt2

- **Signature**: `setLiveEventWhitelistAlt2(request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Request, options?: RequestOptions): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error>`
- **Wire**: `PUT /me/live_events/{live_event_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsPrivacyDomainsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsPrivacyDomainsRequest` | `meLiveEventsPrivacyDomainsRequestSchema` | `src/models/me-live-events-privacy-domains-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

