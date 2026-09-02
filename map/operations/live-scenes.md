<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveScenes — operations

Accessor: `client.liveScenes` · Source: `src/resources/live-scenes.ts` · 5 operations · Request and error types: namespace `LiveScenes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### attachGraphicItemToScene

- **Signature**: `attachGraphicItemToScene(request: LiveScenes.AttachGraphicItemToSceneRequest, options?: RequestOptions): ApiPromise<ComposerScenes, LiveScenes.AttachGraphicItemToSceneError>`
- **Wire**: `POST /live_events/{live_event_id}/composer/scenes/{scene_id}/graphics`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ComposerScenes`
- **Error**: `LiveScenes.AttachGraphicItemToSceneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveScenes.AttachGraphicItemToSceneRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `sceneId` | `path` | `scene_id` | `string` | yes |
| `body` | `body` | — | `LiveEventsComposerScenesGraphicsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsComposerScenesGraphicsRequest` | `liveEventsComposerScenesGraphicsRequestSchema` | `src/models/live-events-composer-scenes-graphics-request.ts` |
| `ComposerScenes` | `composerScenesSchema` | `src/models/composer-scenes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createComposerScene

- **Signature**: `createComposerScene(request: LiveScenes.CreateComposerSceneRequest, options?: RequestOptions): ApiPromise<ComposerScenes, LiveScenes.CreateComposerSceneError>`
- **Wire**: `POST /live_events/{live_event_id}/composer/scenes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ComposerScenes`
- **Error**: `LiveScenes.CreateComposerSceneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveScenes.CreateComposerSceneRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsComposerScenesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsComposerScenesRequest` | `liveEventsComposerScenesRequestSchema` | `src/models/live-events-composer-scenes-request.ts` |
| `ComposerScenes` | `composerScenesSchema` | `src/models/composer-scenes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getComposerScenes

- **Signature**: `getComposerScenes(request: LiveScenes.GetComposerScenesRequest, options?: RequestOptions): ApiPromise<ComposerScenesConnection, LiveScenes.GetComposerScenesError>`
- **Wire**: `GET /live_events/{live_event_id}/composer/scenes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComposerScenesConnection`
- **Error**: `LiveScenes.GetComposerScenesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveScenes.GetComposerScenesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComposerScenesConnection` | `composerScenesConnectionSchema` | `src/models/composer-scenes-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resetComposerScenes

- **Signature**: `resetComposerScenes(request: LiveScenes.ResetComposerScenesRequest, options?: RequestOptions): ApiPromise<ComposerScenes[], LiveScenes.ResetComposerScenesError>`
- **Wire**: `DELETE /live_events/{live_event_id}/composer/scenes`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComposerScenes[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LiveScenes.ResetComposerScenesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveScenes.ResetComposerScenesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComposerScenes` | `composerScenesSchema` | `src/models/composer-scenes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateComposerScene

- **Signature**: `updateComposerScene(request: LiveScenes.UpdateComposerSceneRequest, options?: RequestOptions): ApiPromise<ComposerScenes, LiveScenes.UpdateComposerSceneError>`
- **Wire**: `PATCH /live_events/{live_event_id}/composer/scenes/{scene_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComposerScenes`
- **Error**: `LiveScenes.UpdateComposerSceneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveScenes.UpdateComposerSceneRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `sceneId` | `path` | `scene_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComposerScenes` | `composerScenesSchema` | `src/models/composer-scenes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

