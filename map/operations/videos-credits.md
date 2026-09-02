<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosCredits — operations

Accessor: `client.videosCredits` · Source: `src/resources/videos-credits.ts` · 8 operations · Request and error types: namespace `VideosCredits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVideoCredit

- **Signature**: `addVideoCredit(request: VideosCredits.AddVideoCreditRequest, options?: RequestOptions): ApiPromise<Credit, VideosCredits.AddVideoCreditError>`
- **Wire**: `POST /videos/{video_id}/credits`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Credit`
- **Error**: `VideosCredits.AddVideoCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosCredits.AddVideoCreditRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCreditsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCreditsRequest` | `videosCreditsRequestSchema` | `src/models/videos-credits-request.ts` |
| `Credit` | `creditSchema` | `src/models/credit.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addVideoCreditAlt1

- **Signature**: `addVideoCreditAlt1(request: VideosCredits.AddVideoCreditAlt1Request, options?: RequestOptions): ApiPromise<Credit, VideosCredits.AddVideoCreditAlt1Error>`
- **Wire**: `POST /channels/{channel_id}/videos/{video_id}/credits`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Credit`
- **Error**: `VideosCredits.AddVideoCreditAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosCredits.AddVideoCreditAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `ChannelsVideosCreditsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsVideosCreditsRequest` | `channelsVideosCreditsRequestSchema` | `src/models/channels-videos-credits-request.ts` |
| `Credit` | `creditSchema` | `src/models/credit.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### availableUsers

- **Signature**: `availableUsers(request: VideosCredits.AvailableUsersRequest, options?: RequestOptions): ApiPromise<UserConnection, ResponseError>`
- **Wire**: `GET /videos/{video_id}/credits/available_users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosCredits.AvailableUsersRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### deleteVideoCredit

- **Signature**: `deleteVideoCredit(request: VideosCredits.DeleteVideoCreditRequest, options?: RequestOptions): ApiPromise<undefined, VideosCredits.DeleteVideoCreditError>`
- **Wire**: `DELETE /videos/{video_id}/credits/{credit_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosCredits.DeleteVideoCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosCredits.DeleteVideoCreditRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `creditId` | `path` | `credit_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editVideoCredit

- **Signature**: `editVideoCredit(request: VideosCredits.EditVideoCreditRequest, options?: RequestOptions): ApiPromise<Credit, VideosCredits.EditVideoCreditError>`
- **Wire**: `PATCH /videos/{video_id}/credits/{credit_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Credit`
- **Error**: `VideosCredits.EditVideoCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosCredits.EditVideoCreditRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `creditId` | `path` | `credit_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCreditsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCreditsRequest1` | `videosCreditsRequest1Schema` | `src/models/videos-credits-request1.ts` |
| `Credit` | `creditSchema` | `src/models/credit.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoCredit

- **Signature**: `getVideoCredit(request: VideosCredits.GetVideoCreditRequest, options?: RequestOptions): ApiPromise<Credit, VideosCredits.GetVideoCreditError>`
- **Wire**: `GET /videos/{video_id}/credits/{credit_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Credit`
- **Error**: `VideosCredits.GetVideoCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosCredits.GetVideoCreditRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `creditId` | `path` | `credit_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Credit` | `creditSchema` | `src/models/credit.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoCredits

- **Signature**: `getVideoCredits(request: VideosCredits.GetVideoCreditsRequest, options?: RequestOptions): ApiPromise<CreditConnection, ResponseError>`
- **Wire**: `GET /videos/{video_id}/credits`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosCredits.GetVideoCreditsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `CreditConnection` | `creditConnectionSchema` | `src/models/credit-connection.ts` |

### getVideoCreditsAlt1

- **Signature**: `getVideoCreditsAlt1(request: VideosCredits.GetVideoCreditsAlt1Request, options?: RequestOptions): ApiPromise<CreditConnection, ResponseError>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/credits`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosCredits.GetVideoCreditsAlt1Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `CreditConnection` | `creditConnectionSchema` | `src/models/credit-connection.ts` |

