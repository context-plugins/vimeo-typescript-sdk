<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShowcasesCustomShowcaseLogos — operations

Accessor: `client.showcasesCustomShowcaseLogos` · Source: `src/resources/showcases-custom-showcase-logos.ts` · 5 operations · Request and error types: namespace `ShowcasesCustomShowcaseLogos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createShowcaseLogo

- **Signature**: `createShowcaseLogo(request: ShowcasesCustomShowcaseLogos.CreateShowcaseLogoRequest, options?: RequestOptions): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError>`
- **Wire**: `POST /users/{user_id}/albums/{album_id}/logos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseLogos.CreateShowcaseLogoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteShowcaseLogo

- **Signature**: `deleteShowcaseLogo(request: ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError>`
- **Wire**: `DELETE /users/{user_id}/albums/{album_id}/logos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `logoId` | `path` | `logo_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseLogo

- **Signature**: `getShowcaseLogo(request: ShowcasesCustomShowcaseLogos.GetShowcaseLogoRequest, options?: RequestOptions): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.GetShowcaseLogoError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}/logos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `ShowcasesCustomShowcaseLogos.GetShowcaseLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseLogos.GetShowcaseLogoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `logoId` | `path` | `logo_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseLogos

- **Signature**: `getShowcaseLogos(request: ShowcasesCustomShowcaseLogos.GetShowcaseLogosRequest, options?: RequestOptions): ApiPromise<PictureConnection, ShowcasesCustomShowcaseLogos.GetShowcaseLogosError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}/logos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `ShowcasesCustomShowcaseLogos.GetShowcaseLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseLogos.GetShowcaseLogosRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### replaceShowcaseLogo

- **Signature**: `replaceShowcaseLogo(request: ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoRequest, options?: RequestOptions): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError>`
- **Wire**: `PATCH /users/{user_id}/albums/{album_id}/logos/{logo_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Picture`
- **Error**: `ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `logoId` | `path` | `logo_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsLogosLogoIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsLogosLogoIdRequest` | `usersAlbumsLogosLogoIdRequestSchema` | `src/models/users-albums-logos-logo-id-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

