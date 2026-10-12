<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesChannels — operations

Accessor: `client.categoriesChannels` · Source: `src/resources/categories-channels.ts` · 1 operation · Request and error types: namespace `CategoriesChannels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCategoryChannels

- **Signature**: `getCategoryChannels(request: CategoriesChannels.GetCategoryChannelsRequest, options?: RequestOptions): ApiPromise<ChannelConnection, CategoriesChannels.GetCategoryChannelsError>`
- **Wire**: `GET /categories/{category}/channels`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `CategoriesChannels.GetCategoryChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesChannels.GetCategoryChannelsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `category` | `path` | — | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort4` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort4` | `sort4Schema` | `src/models/sort4.ts` |
| `ChannelConnection` | `channelConnectionSchema` | `src/models/channel-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

