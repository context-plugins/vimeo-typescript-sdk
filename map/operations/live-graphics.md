<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveGraphics — operations

Accessor: `client.liveGraphics` · Source: `src/resources/live-graphics.ts` · 3 operations · Request and error types: namespace `LiveGraphics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addComposerVideoGraphicItem

- **Signature**: `addComposerVideoGraphicItem(request: LiveGraphics.AddComposerVideoGraphicItemRequest, options?: RequestOptions): ApiPromise<ComposerGraphics, LiveGraphics.AddComposerVideoGraphicItemError>`
- **Wire**: `POST /live_events/{live_event_id}/composer/graphics/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ComposerGraphics`
- **Error**: `LiveGraphics.AddComposerVideoGraphicItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveGraphics.AddComposerVideoGraphicItemRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsComposerGraphicsVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsComposerGraphicsVideosRequest` | `liveEventsComposerGraphicsVideosRequestSchema` | `src/models/live-events-composer-graphics-videos-request.ts` |
| `ComposerGraphics` | `composerGraphicsSchema` | `src/models/composer-graphics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteComposerVideoGraphicItem

- **Signature**: `deleteComposerVideoGraphicItem(request: LiveGraphics.DeleteComposerVideoGraphicItemRequest, options?: RequestOptions): ApiPromise<undefined, LiveGraphics.DeleteComposerVideoGraphicItemError>`
- **Wire**: `DELETE /live_events/{live_event_id}/composer/graphics/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiveGraphics.DeleteComposerVideoGraphicItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveGraphics.DeleteComposerVideoGraphicItemRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getComposerVideoGraphicItems

- **Signature**: `getComposerVideoGraphicItems(request: LiveGraphics.GetComposerVideoGraphicItemsRequest, options?: RequestOptions): ApiPromise<ComposerGraphicsConnection, LiveGraphics.GetComposerVideoGraphicItemsError>`
- **Wire**: `GET /live_events/{live_event_id}/composer/graphics/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComposerGraphicsConnection`
- **Error**: `LiveGraphics.GetComposerVideoGraphicItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveGraphics.GetComposerVideoGraphicItemsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComposerGraphicsConnection` | `composerGraphicsConnectionSchema` | `src/models/composer-graphics-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

