<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesEssentials — operations

Accessor: `client.categoriesEssentials` · Source: `src/resources/categories-essentials.ts` · 2 operations · Request and error types: namespace `CategoriesEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCategories

- **Signature**: `getCategories(request: CategoriesEssentials.GetCategoriesRequest, options?: RequestOptions): ApiPromise<CategoryConnection, ApiError>`
- **Wire**: `GET /categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoryConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CategoriesEssentials.GetCategoriesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort3` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort3` | `sort3Schema` | `src/models/sort3.ts` |
| `CategoryConnection` | `categoryConnectionSchema` | `src/models/category-connection.ts` |

### getCategory

- **Signature**: `getCategory(request: CategoriesEssentials.GetCategoryRequest, options?: RequestOptions): ApiPromise<Category, CategoriesEssentials.GetCategoryError>`
- **Wire**: `GET /categories/{category}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Category`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `CategoriesEssentials.GetCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesEssentials.GetCategoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Category` | `categorySchema` | `src/models/category.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

