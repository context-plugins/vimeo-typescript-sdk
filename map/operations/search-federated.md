<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchFederated — operations

Accessor: `client.searchFederated` · Source: `src/resources/search-federated.ts` · 2 operations · Request and error types: namespace `SearchFederated`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### federatedSearchUserItems

- **Signature**: `federatedSearchUserItems(request: SearchFederated.FederatedSearchUserItemsRequest, options?: RequestOptions): ApiPromise<FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsError>`
- **Wire**: `GET /search/{user_id}/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FederatedSearchItemsConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `SearchFederated.FederatedSearchUserItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SearchFederated.FederatedSearchUserItemsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter30` | no |
| `filterPrivacy` | `query` | `filter_privacy` | `string` | no |
| `modifiedEndDate` | `query` | `modified_end_date` | `string` | no |
| `modifiedStartDate` | `query` | `modified_start_date` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `queryFields` | `query` | `query_fields` | `string` | no |
| `sort` | `query` | — | `Sort46` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter30` | `filter30Schema` | `src/models/filter30.ts` |
| `Sort46` | `sort46Schema` | `src/models/sort46.ts` |
| `FederatedSearchItemsConnection` | `federatedSearchItemsConnectionSchema` | `src/models/federated-search-items-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### federatedSearchUserItemsAlt1

- **Signature**: `federatedSearchUserItemsAlt1(request: SearchFederated.FederatedSearchUserItemsAlt1Request, options?: RequestOptions): ApiPromise<FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsAlt1Error>`
- **Wire**: `GET /workspaces/search/{workspace_uuid}/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FederatedSearchItemsConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `SearchFederated.FederatedSearchUserItemsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SearchFederated.FederatedSearchUserItemsAlt1Request` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceUuid` | `path` | `workspace_uuid` | `string` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter30` | no |
| `filterPrivacy` | `query` | `filter_privacy` | `string` | no |
| `modifiedEndDate` | `query` | `modified_end_date` | `string` | no |
| `modifiedStartDate` | `query` | `modified_start_date` | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `queryFields` | `query` | `query_fields` | `string` | no |
| `sort` | `query` | — | `Sort46` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter30` | `filter30Schema` | `src/models/filter30.ts` |
| `Sort46` | `sort46Schema` | `src/models/sort46.ts` |
| `FederatedSearchItemsConnection` | `federatedSearchItemsConnectionSchema` | `src/models/federated-search-items-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

