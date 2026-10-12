<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmbedPresetsEssentials — operations

Accessor: `client.embedPresetsEssentials` · Source: `src/resources/embed-presets-essentials.ts` · 10 operations · Request and error types: namespace `EmbedPresetsEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEmbedPresets

- **Signature**: `createEmbedPresets(request: EmbedPresetsEssentials.CreateEmbedPresetsRequest, options?: RequestOptions): ApiPromise<Preset, ApiError>`
- **Wire**: `POST /users/{user_id}/presets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Preset`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsEssentials.CreateEmbedPresetsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersPresetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersPresetsRequest` | `usersPresetsRequestSchema` | `src/models/users-presets-request.ts` |
| `Preset` | `presetSchema` | `src/models/preset.ts` |

### createEmbedPresetsAlt1

- **Signature**: `createEmbedPresetsAlt1(request: EmbedPresetsEssentials.CreateEmbedPresetsAlt1Request, options?: RequestOptions): ApiPromise<Preset, ApiError>`
- **Wire**: `POST /me/presets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Preset`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsEssentials.CreateEmbedPresetsAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MePresetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MePresetsRequest` | `mePresetsRequestSchema` | `src/models/me-presets-request.ts` |
| `Preset` | `presetSchema` | `src/models/preset.ts` |

### deleteEmbedPreset

- **Signature**: `deleteEmbedPreset(request: EmbedPresetsEssentials.DeleteEmbedPresetRequest, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsEssentials.DeleteEmbedPresetError>`
- **Wire**: `DELETE /users/{user_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsEssentials.DeleteEmbedPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsEssentials.DeleteEmbedPresetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteEmbedPresetAlt1

- **Signature**: `deleteEmbedPresetAlt1(request: EmbedPresetsEssentials.DeleteEmbedPresetAlt1Request, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error>`
- **Wire**: `DELETE /me/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsEssentials.DeleteEmbedPresetAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editEmbedPreset

- **Signature**: `editEmbedPreset(request: EmbedPresetsEssentials.EditEmbedPresetRequest, options?: RequestOptions): ApiPromise<Preset, EmbedPresetsEssentials.EditEmbedPresetError>`
- **Wire**: `PATCH /users/{user_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Preset`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsEssentials.EditEmbedPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsEssentials.EditEmbedPresetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersPresetsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersPresetsRequest1` | `usersPresetsRequest1Schema` | `src/models/users-presets-request1.ts` |
| `Preset` | `presetSchema` | `src/models/preset.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editEmbedPresetAlt1

- **Signature**: `editEmbedPresetAlt1(request: EmbedPresetsEssentials.EditEmbedPresetAlt1Request, options?: RequestOptions): ApiPromise<Preset, EmbedPresetsEssentials.EditEmbedPresetAlt1Error>`
- **Wire**: `PATCH /me/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Preset`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsEssentials.EditEmbedPresetAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsEssentials.EditEmbedPresetAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `body` | `body` | — | `MePresetsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MePresetsRequest1` | `mePresetsRequest1Schema` | `src/models/me-presets-request1.ts` |
| `Preset` | `presetSchema` | `src/models/preset.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getEmbedPreset

- **Signature**: `getEmbedPreset(request: EmbedPresetsEssentials.GetEmbedPresetRequest, options?: RequestOptions): ApiPromise<Preset, ApiError>`
- **Wire**: `GET /users/{user_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Preset`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsEssentials.GetEmbedPresetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Preset` | `presetSchema` | `src/models/preset.ts` |

### getEmbedPresetAlt1

- **Signature**: `getEmbedPresetAlt1(request: EmbedPresetsEssentials.GetEmbedPresetAlt1Request, options?: RequestOptions): ApiPromise<Preset, ApiError>`
- **Wire**: `GET /me/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Preset`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsEssentials.GetEmbedPresetAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Preset` | `presetSchema` | `src/models/preset.ts` |

### getEmbedPresets

- **Signature**: `getEmbedPresets(request: EmbedPresetsEssentials.GetEmbedPresetsRequest, options?: RequestOptions): ApiPromise<PresetConnection, ApiError>`
- **Wire**: `GET /users/{user_id}/presets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PresetConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsEssentials.GetEmbedPresetsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PresetConnection` | `presetConnectionSchema` | `src/models/preset-connection.ts` |

### getEmbedPresetsAlt1

- **Signature**: `getEmbedPresetsAlt1(request: EmbedPresetsEssentials.GetEmbedPresetsAlt1Request, options?: RequestOptions): ApiPromise<PresetConnection, ApiError>`
- **Wire**: `GET /me/presets`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PresetConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `EmbedPresetsEssentials.GetEmbedPresetsAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PresetConnection` | `presetConnectionSchema` | `src/models/preset-connection.ts` |

