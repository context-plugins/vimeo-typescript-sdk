<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersPictures — operations

Accessor: `client.usersPictures` · Source: `src/resources/users-pictures.ts` · 10 operations · Request types: namespace `UsersPictures`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPicture

- **Signature**: `createPicture(request: UsersPictures.CreatePictureRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `POST /users/{user_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.CreatePictureRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### createPictureAlt1

- **Signature**: `createPictureAlt1(options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `POST /me/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### deletePicture

- **Signature**: `deletePicture(request: UsersPictures.DeletePictureRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /users/{user_id}/pictures/{portraitset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.DeletePictureRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portraitsetId` | `path` | `portraitset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

### deletePictureAlt1

- **Signature**: `deletePictureAlt1(request: UsersPictures.DeletePictureAlt1Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /me/pictures/{portraitset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.DeletePictureAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portraitsetId` | `path` | `portraitset_id` | `number` | yes |

### editPicture

- **Signature**: `editPicture(request: UsersPictures.EditPictureRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `PATCH /users/{user_id}/pictures/{portraitset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.EditPictureRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portraitsetId` | `path` | `portraitset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersPicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersPicturesRequest` | `usersPicturesRequestSchema` | `src/models/users-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### editPictureAlt1

- **Signature**: `editPictureAlt1(request: UsersPictures.EditPictureAlt1Request, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `PATCH /me/pictures/{portraitset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.EditPictureAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portraitsetId` | `path` | `portraitset_id` | `number` | yes |
| `body` | `body` | — | `MePicturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MePicturesRequest` | `mePicturesRequestSchema` | `src/models/me-pictures-request.ts` |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getPicture

- **Signature**: `getPicture(request: UsersPictures.GetPictureRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `GET /users/{user_id}/pictures/{portraitset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.GetPictureRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portraitsetId` | `path` | `portraitset_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getPictureAlt1

- **Signature**: `getPictureAlt1(request: UsersPictures.GetPictureAlt1Request, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `GET /me/pictures/{portraitset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.GetPictureAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portraitsetId` | `path` | `portraitset_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getPictures

- **Signature**: `getPictures(request: UsersPictures.GetPicturesRequest, options?: RequestOptions): ApiPromise<PictureConnection, ApiError>`
- **Wire**: `GET /users/{user_id}/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.GetPicturesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |

### getPicturesAlt1

- **Signature**: `getPicturesAlt1(request: UsersPictures.GetPicturesAlt1Request, options?: RequestOptions): ApiPromise<PictureConnection, ApiError>`
- **Wire**: `GET /me/pictures`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PictureConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersPictures.GetPicturesAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PictureConnection` | `pictureConnectionSchema` | `src/models/picture-connection.ts` |

