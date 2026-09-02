<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersSearch — operations

Accessor: `client.usersSearch` · Source: `src/resources/users-search.ts` · 1 operation · Request and error types: namespace `UsersSearch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### searchUsers

- **Signature**: `searchUsers(request: UsersSearch.SearchUsersRequest, options?: RequestOptions): ApiPromise<UserConnection, UsersSearch.SearchUsersError>`
- **Wire**: `GET /users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `UsersSearch.SearchUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"legacyError"` [500] `LegacyError` · `"legacyError2"` [503] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersSearch.SearchUsersRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort13` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort13` | `sort13Schema` | `src/models/sort13.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

