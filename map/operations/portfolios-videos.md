<!-- Generated file — do not edit; regenerated with the SDK. -->

# PortfoliosVideos — operations

Accessor: `client.portfoliosVideos` · Source: `src/resources/portfolios-videos.ts` · 8 operations · Request and error types: namespace `PortfoliosVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVideoToPortfolio

- **Signature**: `addVideoToPortfolio(request: PortfoliosVideos.AddVideoToPortfolioRequest, options?: RequestOptions): ApiPromise<undefined, PortfoliosVideos.AddVideoToPortfolioError>`
- **Wire**: `PUT /users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PortfoliosVideos.AddVideoToPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfoliosVideos.AddVideoToPortfolioRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### addVideoToPortfolioAlt1

- **Signature**: `addVideoToPortfolioAlt1(request: PortfoliosVideos.AddVideoToPortfolioAlt1Request, options?: RequestOptions): ApiPromise<undefined, PortfoliosVideos.AddVideoToPortfolioAlt1Error>`
- **Wire**: `PUT /me/portfolios/{portfolio_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PortfoliosVideos.AddVideoToPortfolioAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfoliosVideos.AddVideoToPortfolioAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoFromPortfolio

- **Signature**: `deleteVideoFromPortfolio(request: PortfoliosVideos.DeleteVideoFromPortfolioRequest, options?: RequestOptions): ApiPromise<undefined, PortfoliosVideos.DeleteVideoFromPortfolioError>`
- **Wire**: `DELETE /users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PortfoliosVideos.DeleteVideoFromPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfoliosVideos.DeleteVideoFromPortfolioRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoFromPortfolioAlt1

- **Signature**: `deleteVideoFromPortfolioAlt1(request: PortfoliosVideos.DeleteVideoFromPortfolioAlt1Request, options?: RequestOptions): ApiPromise<undefined, PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error>`
- **Wire**: `DELETE /me/portfolios/{portfolio_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PortfoliosVideos.DeleteVideoFromPortfolioAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getPortfolioVideo

- **Signature**: `getPortfolioVideo(request: PortfoliosVideos.GetPortfolioVideoRequest, options?: RequestOptions): ApiPromise<Video, ResponseError>`
- **Wire**: `GET /users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosVideos.GetPortfolioVideoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |

### getPortfolioVideoAlt1

- **Signature**: `getPortfolioVideoAlt1(request: PortfoliosVideos.GetPortfolioVideoAlt1Request, options?: RequestOptions): ApiPromise<Video, ResponseError>`
- **Wire**: `GET /me/portfolios/{portfolio_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosVideos.GetPortfolioVideoAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |

### getPortfolioVideos

- **Signature**: `getPortfolioVideos(request: PortfoliosVideos.GetPortfolioVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, ResponseError>`
- **Wire**: `GET /users/{user_id}/portfolios/{portfolio_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosVideos.GetPortfolioVideosRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort35` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort35` | `sort35Schema` | `src/models/sort35.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

### getPortfolioVideosAlt1

- **Signature**: `getPortfolioVideosAlt1(request: PortfoliosVideos.GetPortfolioVideosAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, ResponseError>`
- **Wire**: `GET /me/portfolios/{portfolio_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosVideos.GetPortfolioVideosAlt1Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `containingUri` | `query` | `containing_uri` | `string` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort35` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort35` | `sort35Schema` | `src/models/sort35.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |

