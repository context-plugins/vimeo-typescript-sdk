<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmbedPresetsTimelineEvents — operations

Accessor: `client.embedPresetsTimelineEvents` · Source: `src/resources/embed-presets-timeline-events.ts` · 2 operations · Request and error types: namespace `EmbedPresetsTimelineEvents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createVideoCustomLogo

- **Signature**: `createVideoCustomLogo(request: EmbedPresetsTimelineEvents.CreateVideoCustomLogoRequest, options?: RequestOptions): ApiPromise<Picture, EmbedPresetsTimelineEvents.CreateVideoCustomLogoError>`
- **Wire**: `POST /videos/{video_id}/timelinethumbnails`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `EmbedPresetsTimelineEvents.CreateVideoCustomLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsTimelineEvents.CreateVideoCustomLogoRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoCustomLogo

- **Signature**: `getVideoCustomLogo(request: EmbedPresetsTimelineEvents.GetVideoCustomLogoRequest, options?: RequestOptions): ApiPromise<Picture, EmbedPresetsTimelineEvents.GetVideoCustomLogoError>`
- **Wire**: `GET /videos/{video_id}/timelinethumbnails/{thumbnail_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `EmbedPresetsTimelineEvents.GetVideoCustomLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsTimelineEvents.GetVideoCustomLogoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `thumbnailId` | `path` | `thumbnail_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

