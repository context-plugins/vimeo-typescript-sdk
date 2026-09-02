<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesGroups — operations

Accessor: `client.categoriesGroups` · Source: `src/resources/categories-groups.ts` · 1 operation · Request and error types: namespace `CategoriesGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCategoryGroups

- **Signature**: `getCategoryGroups(request: CategoriesGroups.GetCategoryGroupsRequest, options?: RequestOptions): ApiPromise<GroupConnection, CategoriesGroups.GetCategoryGroupsError>`
- **Wire**: `GET /categories/{category}/groups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupConnection`
- **Error**: `CategoriesGroups.GetCategoryGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesGroups.GetCategoryGroupsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort5` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort5` | `sort5Schema` | `src/models/sort5.ts` |
| `GroupConnection` | `groupConnectionSchema` | `src/models/group-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

