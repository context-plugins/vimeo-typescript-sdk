<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmbedPresetsVideos — operations

Accessor: `client.embedPresetsVideos` · Source: `src/resources/embed-presets-videos.ts` · 5 operations · Request and error types: namespace `EmbedPresetsVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideoEmbedPreset

- **Signature**: `addVideoEmbedPreset(request: EmbedPresetsVideos.AddVideoEmbedPresetRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /videos/{video_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsVideos.AddVideoEmbedPresetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

### deleteVideoEmbedPreset

- **Signature**: `deleteVideoEmbedPreset(request: EmbedPresetsVideos.DeleteVideoEmbedPresetRequest, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsVideos.DeleteVideoEmbedPresetError>`
- **Wire**: `DELETE /videos/{video_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsVideos.DeleteVideoEmbedPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsVideos.DeleteVideoEmbedPresetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getEmbedPresetVideos

- **Signature**: `getEmbedPresetVideos(request: EmbedPresetsVideos.GetEmbedPresetVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, ApiError>`
- **Wire**: `GET /users/{user_id}/presets/{preset_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsVideos.GetEmbedPresetVideosRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

### getEmbedPresetVideosAlt1

- **Signature**: `getEmbedPresetVideosAlt1(request: EmbedPresetsVideos.GetEmbedPresetVideosAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, ApiError>`
- **Wire**: `GET /me/presets/{preset_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsVideos.GetEmbedPresetVideosAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

### getVideoEmbedPreset

- **Signature**: `getVideoEmbedPreset(request: EmbedPresetsVideos.GetVideoEmbedPresetRequest, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsVideos.GetVideoEmbedPresetError>`
- **Wire**: `GET /videos/{video_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsVideos.GetVideoEmbedPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsVideos.GetVideoEmbedPresetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

