<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShowcasesEssentials — operations

Accessor: `client.showcasesEssentials` · Source: `src/resources/showcases-essentials.ts` · 14 operations · Request and error types: namespace `ShowcasesEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addFolderToShowcases

- **Signature**: `addFolderToShowcases(request: ShowcasesEssentials.AddFolderToShowcasesRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesEssentials.AddFolderToShowcasesError>`
- **Wire**: `PATCH /users/{user_id}/albums/from_folder`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesEssentials.AddFolderToShowcasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.AddFolderToShowcasesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `albumUris` | `query` | `album_uris` | `string` | yes |
| `folderId` | `query` | `folder_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### copyShowcase

- **Signature**: `copyShowcase(request: ShowcasesEssentials.CopyShowcaseRequest, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.CopyShowcaseError>`
- **Wire**: `POST /users/{user_id}/albums/{album_id}/copy`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.CopyShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.CopyShowcaseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsCopyRequest` | `usersAlbumsCopyRequestSchema` | `src/models/users-albums-copy-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### copyShowcaseAlt2

- **Signature**: `copyShowcaseAlt2(request: ShowcasesEssentials.CopyShowcaseAlt2Request, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.CopyShowcaseAlt2Error>`
- **Wire**: `POST /me/albums/{album_id}/copy`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.CopyShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.CopyShowcaseAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `body` | `body` | — | `MeAlbumsCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeAlbumsCopyRequest` | `meAlbumsCopyRequestSchema` | `src/models/me-albums-copy-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createShowcase

- **Signature**: `createShowcase(request: ShowcasesEssentials.CreateShowcaseRequest, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.CreateShowcaseError>`
- **Wire**: `POST /users/{user_id}/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.CreateShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.CreateShowcaseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsRequest` | `usersAlbumsRequestSchema` | `src/models/users-albums-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createShowcaseAlt1

- **Signature**: `createShowcaseAlt1(request: ShowcasesEssentials.CreateShowcaseAlt1Request, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.CreateShowcaseAlt1Error>`
- **Wire**: `POST /me/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.CreateShowcaseAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.CreateShowcaseAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeAlbumsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeAlbumsRequest` | `meAlbumsRequestSchema` | `src/models/me-albums-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteShowcase

- **Signature**: `deleteShowcase(request: ShowcasesEssentials.DeleteShowcaseRequest, options?: RequestOptions): ApiPromise<undefined, ShowcasesEssentials.DeleteShowcaseError>`
- **Wire**: `DELETE /users/{user_id}/albums/{album_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesEssentials.DeleteShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.DeleteShowcaseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteShowcaseAlt2

- **Signature**: `deleteShowcaseAlt2(request: ShowcasesEssentials.DeleteShowcaseAlt2Request, options?: RequestOptions): ApiPromise<undefined, ShowcasesEssentials.DeleteShowcaseAlt2Error>`
- **Wire**: `DELETE /me/albums/{album_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShowcasesEssentials.DeleteShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.DeleteShowcaseAlt2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editShowcase

- **Signature**: `editShowcase(request: ShowcasesEssentials.EditShowcaseRequest, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.EditShowcaseError>`
- **Wire**: `PATCH /users/{user_id}/albums/{album_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.EditShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.EditShowcaseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersAlbumsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAlbumsRequest1` | `usersAlbumsRequest1Schema` | `src/models/users-albums-request1.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editShowcaseAlt2

- **Signature**: `editShowcaseAlt2(request: ShowcasesEssentials.EditShowcaseAlt2Request, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.EditShowcaseAlt2Error>`
- **Wire**: `PATCH /me/albums/{album_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.EditShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"legacyError3"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.EditShowcaseAlt2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `body` | `body` | — | `MeAlbumsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeAlbumsRequest1` | `meAlbumsRequest1Schema` | `src/models/me-albums-request1.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcase

- **Signature**: `getShowcase(request: ShowcasesEssentials.GetShowcaseRequest, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.GetShowcaseError>`
- **Wire**: `GET /users/{user_id}/albums/{album_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.GetShowcaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.GetShowcaseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcaseAlt2

- **Signature**: `getShowcaseAlt2(request: ShowcasesEssentials.GetShowcaseAlt2Request, options?: RequestOptions): ApiPromise<Album, ShowcasesEssentials.GetShowcaseAlt2Error>`
- **Wire**: `GET /me/albums/{album_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Album`
- **Error**: `ShowcasesEssentials.GetShowcaseAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.GetShowcaseAlt2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcases

- **Signature**: `getShowcases(request: ShowcasesEssentials.GetShowcasesRequest, options?: RequestOptions): ApiPromise<AlbumConnection, ShowcasesEssentials.GetShowcasesError>`
- **Wire**: `GET /users/{user_id}/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlbumConnection`
- **Error**: `ShowcasesEssentials.GetShowcasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.GetShowcasesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filterPrivacy` | `query` | `filter_privacy` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort18` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort18` | `sort18Schema` | `src/models/sort18.ts` |
| `AlbumConnection` | `albumConnectionSchema` | `src/models/album-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getShowcasesAlt1

- **Signature**: `getShowcasesAlt1(request: ShowcasesEssentials.GetShowcasesAlt1Request, options?: RequestOptions): ApiPromise<AlbumConnection, ShowcasesEssentials.GetShowcasesAlt1Error>`
- **Wire**: `GET /me/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlbumConnection`
- **Error**: `ShowcasesEssentials.GetShowcasesAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShowcasesEssentials.GetShowcasesAlt1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filterPrivacy` | `query` | `filter_privacy` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort18` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort18` | `sort18Schema` | `src/models/sort18.ts` |
| `AlbumConnection` | `albumConnectionSchema` | `src/models/album-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### updateShowcases

- **Signature**: `updateShowcases(request: ShowcasesEssentials.UpdateShowcasesRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PATCH /users/{user_id}/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ShowcasesEssentials.UpdateShowcasesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `albumItemUris` | `query` | `album_item_uris` | `string` | yes |
| `albumUris` | `query` | `album_uris` | `string` | yes |

