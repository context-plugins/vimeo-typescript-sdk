<!-- Generated file — do not edit; regenerated with the SDK. -->

# PortfoliosEssentials — operations

Accessor: `client.portfoliosEssentials` · Source: `src/resources/portfolios-essentials.ts` · 4 operations · Request types: namespace `PortfoliosEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPortfolio

- **Signature**: `getPortfolio(request: PortfoliosEssentials.GetPortfolioRequest, options?: RequestOptions): ApiPromise<Portfolio, ResponseError>`
- **Wire**: `GET /users/{user_id}/portfolios/{portfolio_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Portfolio`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosEssentials.GetPortfolioRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Portfolio` | `portfolioSchema` | `src/models/portfolio.ts` |

### getPortfolioAlt1

- **Signature**: `getPortfolioAlt1(request: PortfoliosEssentials.GetPortfolioAlt1Request, options?: RequestOptions): ApiPromise<Portfolio, ResponseError>`
- **Wire**: `GET /me/portfolios/{portfolio_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Portfolio`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosEssentials.GetPortfolioAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioId` | `path` | `portfolio_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Portfolio` | `portfolioSchema` | `src/models/portfolio.ts` |

### getPortfolios

- **Signature**: `getPortfolios(request: PortfoliosEssentials.GetPortfoliosRequest, options?: RequestOptions): ApiPromise<PortfolioConnection, ResponseError>`
- **Wire**: `GET /users/{user_id}/portfolios`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfolioConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosEssentials.GetPortfoliosRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `PortfolioConnection` | `portfolioConnectionSchema` | `src/models/portfolio-connection.ts` |

### getPortfoliosAlt1

- **Signature**: `getPortfoliosAlt1(request: PortfoliosEssentials.GetPortfoliosAlt1Request, options?: RequestOptions): ApiPromise<PortfolioConnection, ResponseError>`
- **Wire**: `GET /me/portfolios`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfolioConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PortfoliosEssentials.GetPortfoliosAlt1Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `PortfolioConnection` | `portfolioConnectionSchema` | `src/models/portfolio-connection.ts` |

