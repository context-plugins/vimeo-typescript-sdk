<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesUsers — operations

Accessor: `client.categoriesUsers` · Source: `src/resources/categories-users.ts` · 8 operations · Request and error types: namespace `CategoriesUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkIfUserSubscribedToCategory

- **Signature**: `checkIfUserSubscribedToCategory(request: CategoriesUsers.CheckIfUserSubscribedToCategoryRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /users/{user_id}/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesUsers.CheckIfUserSubscribedToCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

### checkIfUserSubscribedToCategoryAlt1

- **Signature**: `checkIfUserSubscribedToCategoryAlt1(request: CategoriesUsers.CheckIfUserSubscribedToCategoryAlt1Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /me/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesUsers.CheckIfUserSubscribedToCategoryAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `path` | `string` | yes |

### getCategorySubscriptions

- **Signature**: `getCategorySubscriptions(request: CategoriesUsers.GetCategorySubscriptionsRequest, options?: RequestOptions): ApiPromise<CategoryConnection, CategoriesUsers.GetCategorySubscriptionsError>`
- **Wire**: `GET /users/{user_id}/categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoryConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `CategoriesUsers.GetCategorySubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesUsers.GetCategorySubscriptionsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort24` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort24` | `sort24Schema` | `src/models/sort24.ts` |
| `CategoryConnection` | `categoryConnectionSchema` | `src/models/category-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCategorySubscriptionsAlt1

- **Signature**: `getCategorySubscriptionsAlt1(request: CategoriesUsers.GetCategorySubscriptionsAlt1Request, options?: RequestOptions): ApiPromise<CategoryConnection, CategoriesUsers.GetCategorySubscriptionsAlt1Error>`
- **Wire**: `GET /me/categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoryConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `CategoriesUsers.GetCategorySubscriptionsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesUsers.GetCategorySubscriptionsAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort24` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort24` | `sort24Schema` | `src/models/sort24.ts` |
| `CategoryConnection` | `categoryConnectionSchema` | `src/models/category-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### subscribeToCategory

- **Signature**: `subscribeToCategory(request: CategoriesUsers.SubscribeToCategoryRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /users/{user_id}/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesUsers.SubscribeToCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

### subscribeToCategoryAlt1

- **Signature**: `subscribeToCategoryAlt1(request: CategoriesUsers.SubscribeToCategoryAlt1Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /me/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesUsers.SubscribeToCategoryAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `path` | `string` | yes |

### unsubscribeFromCategory

- **Signature**: `unsubscribeFromCategory(request: CategoriesUsers.UnsubscribeFromCategoryRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /users/{user_id}/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesUsers.UnsubscribeFromCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

### unsubscribeFromCategoryAlt1

- **Signature**: `unsubscribeFromCategoryAlt1(request: CategoriesUsers.UnsubscribeFromCategoryAlt1Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /me/categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesUsers.UnsubscribeFromCategoryAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `path` | `string` | yes |

