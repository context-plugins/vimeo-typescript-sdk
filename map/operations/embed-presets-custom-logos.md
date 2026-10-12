<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmbedPresetsCustomLogos — operations

Accessor: `client.embedPresetsCustomLogos` · Source: `src/resources/embed-presets-custom-logos.ts` · 8 operations · Request and error types: namespace `EmbedPresetsCustomLogos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomLogo

- **Signature**: `createCustomLogo(request: EmbedPresetsCustomLogos.CreateCustomLogoRequest, options?: RequestOptions): ApiPromise<Picture, EmbedPresetsCustomLogos.CreateCustomLogoError>`
- **Wire**: `POST /users/{user_id}/customlogos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.CreateCustomLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.CreateCustomLogoRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createCustomLogoAlt1

- **Signature**: `createCustomLogoAlt1(options?: RequestOptions): ApiPromise<Picture, EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error>`
- **Wire**: `POST /me/customlogos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteCustomLogo

- **Signature**: `deleteCustomLogo(request: EmbedPresetsCustomLogos.DeleteCustomLogoRequest, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsCustomLogos.DeleteCustomLogoError>`
- **Wire**: `DELETE /users/{user_id}/customlogos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.DeleteCustomLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.DeleteCustomLogoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `logoId` | `path` | `logo_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteCustomLogoAlt1

- **Signature**: `deleteCustomLogoAlt1(request: EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Request, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error>`
- **Wire**: `DELETE /me/customlogos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `logoId` | `path` | `logo_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getCustomLogo

- **Signature**: `getCustomLogo(request: EmbedPresetsCustomLogos.GetCustomLogoRequest, options?: RequestOptions): ApiPromise<Picture, EmbedPresetsCustomLogos.GetCustomLogoError>`
- **Wire**: `GET /users/{user_id}/customlogos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.GetCustomLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.GetCustomLogoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `logoId` | `path` | `logo_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getCustomLogoAlt1

- **Signature**: `getCustomLogoAlt1(request: EmbedPresetsCustomLogos.GetCustomLogoAlt1Request, options?: RequestOptions): ApiPromise<Picture, EmbedPresetsCustomLogos.GetCustomLogoAlt1Error>`
- **Wire**: `GET /me/customlogos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.GetCustomLogoAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.GetCustomLogoAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `logoId` | `path` | `logo_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getCustomLogos

- **Signature**: `getCustomLogos(request: EmbedPresetsCustomLogos.GetCustomLogosRequest, options?: RequestOptions): ApiPromise<PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosError>`
- **Wire**: `GET /users/{user_id}/customlogos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.GetCustomLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.GetCustomLogosRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sizes` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getCustomLogosAlt1

- **Signature**: `getCustomLogosAlt1(request: EmbedPresetsCustomLogos.GetCustomLogosAlt1Request, options?: RequestOptions): ApiPromise<PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosAlt1Error>`
- **Wire**: `GET /me/customlogos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsCustomLogos.GetCustomLogosAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsCustomLogos.GetCustomLogosAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sizes` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

