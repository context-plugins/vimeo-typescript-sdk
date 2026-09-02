<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventThumbnails — operations

Accessor: `client.liveEventThumbnails` · Source: `src/resources/live-event-thumbnails.ts` · 15 operations · Request and error types: namespace `LiveEventThumbnails`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createLiveEventThumbnail

- **Signature**: `createLiveEventThumbnail(request: LiveEventThumbnails.CreateLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailError>`
- **Wire**: `POST /users/{user_id}/live_events/{live_event_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.CreateLiveEventThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.CreateLiveEventThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsPicturesRequest` | `usersLiveEventsPicturesRequestSchema` | `src/models/users-live-events-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createLiveEventThumbnailAlt1

- **Signature**: `createLiveEventThumbnailAlt1(request: LiveEventThumbnails.CreateLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error>`
- **Wire**: `POST /live_events/{live_event_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.CreateLiveEventThumbnailAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsPicturesRequest` | `liveEventsPicturesRequestSchema` | `src/models/live-events-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createLiveEventThumbnailAlt2

- **Signature**: `createLiveEventThumbnailAlt2(request: LiveEventThumbnails.CreateLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error>`
- **Wire**: `POST /me/live_events/{live_event_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.CreateLiveEventThumbnailAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsPicturesRequest` | `meLiveEventsPicturesRequestSchema` | `src/models/me-live-events-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventThumbnail

- **Signature**: `deleteLiveEventThumbnail(request: LiveEventThumbnails.DeleteLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailError>`
- **Wire**: `DELETE /users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEventThumbnails.DeleteLiveEventThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.DeleteLiveEventThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventThumbnailAlt1

- **Signature**: `deleteLiveEventThumbnailAlt1(request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error>`
- **Wire**: `DELETE /live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteLiveEventThumbnailAlt2

- **Signature**: `deleteLiveEventThumbnailAlt2(request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error>`
- **Wire**: `DELETE /me/live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editLiveEventThumbnail

- **Signature**: `editLiveEventThumbnail(request: LiveEventThumbnails.EditLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailError>`
- **Wire**: `PATCH /users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.EditLiveEventThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.EditLiveEventThumbnailRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersLiveEventsPicturesThumbnailIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersLiveEventsPicturesThumbnailIdRequest` | `usersLiveEventsPicturesThumbnailIdRequestSchema` | `src/models/users-live-events-pictures-thumbnail-id-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editLiveEventThumbnailAlt1

- **Signature**: `editLiveEventThumbnailAlt1(request: LiveEventThumbnails.EditLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt1Error>`
- **Wire**: `PATCH /live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.EditLiveEventThumbnailAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.EditLiveEventThumbnailAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsPicturesRequest` | `liveEventsPicturesRequestSchema` | `src/models/live-events-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editLiveEventThumbnailAlt2

- **Signature**: `editLiveEventThumbnailAlt2(request: LiveEventThumbnails.EditLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt2Error>`
- **Wire**: `PATCH /me/live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.EditLiveEventThumbnailAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.EditLiveEventThumbnailAlt2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `body` | `body` | — | `MeLiveEventsPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeLiveEventsPicturesRequest` | `meLiveEventsPicturesRequestSchema` | `src/models/me-live-events-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventThumbnail

- **Signature**: `getLiveEventThumbnail(request: LiveEventThumbnails.GetLiveEventThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.GetLiveEventThumbnailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.GetLiveEventThumbnailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventThumbnailAlt1

- **Signature**: `getLiveEventThumbnailAlt1(request: LiveEventThumbnails.GetLiveEventThumbnailAlt1Request, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt1Error>`
- **Wire**: `GET /live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.GetLiveEventThumbnailAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.GetLiveEventThumbnailAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventThumbnailAlt2

- **Signature**: `getLiveEventThumbnailAlt2(request: LiveEventThumbnails.GetLiveEventThumbnailAlt2Request, options?: RequestOptions): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt2Error>`
- **Wire**: `GET /me/live_events/{live_event_id}/pictures/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `LiveEventThumbnails.GetLiveEventThumbnailAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.GetLiveEventThumbnailAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventThumbnails

- **Signature**: `getLiveEventThumbnails(request: LiveEventThumbnails.GetLiveEventThumbnailsRequest, options?: RequestOptions): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `LiveEventThumbnails.GetLiveEventThumbnailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.GetLiveEventThumbnailsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventThumbnailsAlt1

- **Signature**: `getLiveEventThumbnailsAlt1(request: LiveEventThumbnails.GetLiveEventThumbnailsAlt1Request, options?: RequestOptions): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error>`
- **Wire**: `GET /live_events/{live_event_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.GetLiveEventThumbnailsAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventThumbnailsAlt2

- **Signature**: `getLiveEventThumbnailsAlt2(request: LiveEventThumbnails.GetLiveEventThumbnailsAlt2Request, options?: RequestOptions): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error>`
- **Wire**: `GET /me/live_events/{live_event_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventThumbnails.GetLiveEventThumbnailsAlt2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

