<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesVideos — operations

Accessor: `client.categoriesVideos` · Source: `src/resources/categories-videos.ts` · 4 operations · Request and error types: namespace `CategoriesVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### checkCategoryForVideo

- **Signature**: `checkCategoryForVideo(request: CategoriesVideos.CheckCategoryForVideoRequest, options?: RequestOptions): ApiPromise<Video, CategoriesVideos.CheckCategoryForVideoError>`
- **Wire**: `GET /categories/{category}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `CategoriesVideos.CheckCategoryForVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesVideos.CheckCategoryForVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getCategoryVideos

- **Signature**: `getCategoryVideos(request: CategoriesVideos.GetCategoryVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, CategoriesVideos.GetCategoryVideosError>`
- **Wire**: `GET /categories/{category}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `CategoriesVideos.GetCategoryVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesVideos.GetCategoryVideosRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort6` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter` | `filterSchema` | `src/models/filter.ts` |
| `Sort6` | `sort6Schema` | `src/models/sort6.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoCategories

- **Signature**: `getVideoCategories(request: CategoriesVideos.GetVideoCategoriesRequest, options?: RequestOptions): ApiPromise<CategoryConnection, CategoriesVideos.GetVideoCategoriesError>`
- **Wire**: `GET /videos/{video_id}/categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoryConnection`
- **Error**: `CategoriesVideos.GetVideoCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesVideos.GetVideoCategoriesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoryConnection` | `categoryConnectionSchema` | `src/models/category-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### suggestVideoCategory

- **Signature**: `suggestVideoCategory(request: CategoriesVideos.SuggestVideoCategoryRequest, options?: RequestOptions): ApiPromise<Category, CategoriesVideos.SuggestVideoCategoryError>`
- **Wire**: `PUT /videos/{video_id}/categories`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Category`
- **Error**: `CategoriesVideos.SuggestVideoCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesVideos.SuggestVideoCategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosCategoriesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosCategoriesRequest` | `videosCategoriesRequestSchema` | `src/models/videos-categories-request.ts` |
| `Category` | `categorySchema` | `src/models/category.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

