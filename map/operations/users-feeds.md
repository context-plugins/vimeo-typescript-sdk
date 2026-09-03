<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersFeeds — operations

Accessor: `client.usersFeeds` · Source: `src/resources/users-feeds.ts` · 2 operations · Request and error types: namespace `UsersFeeds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getFeed

- **Signature**: `getFeed(request: UsersFeeds.GetFeedRequest, options?: RequestOptions): ApiPromise<Activity31Connection, UsersFeeds.GetFeedError>`
- **Wire**: `GET /users/{user_id}/feed`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Activity31Connection`
- **Error**: `UsersFeeds.GetFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFeeds.GetFeedRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `offset` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `type` | `query` | — | `Type29` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type29` | `type29Schema` | `src/models/type29.ts` |
| `Activity31Connection` | `activity31ConnectionSchema` | `src/models/activity31-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFeedAlt1

- **Signature**: `getFeedAlt1(request: UsersFeeds.GetFeedAlt1Request, options?: RequestOptions): ApiPromise<Activity31Connection, UsersFeeds.GetFeedAlt1Error>`
- **Wire**: `GET /me/feed`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Activity31Connection`
- **Error**: `UsersFeeds.GetFeedAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFeeds.GetFeedAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `offset` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `type` | `query` | — | `Type29` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type29` | `type29Schema` | `src/models/type29.ts` |
| `Activity31Connection` | `activity31ConnectionSchema` | `src/models/activity31-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

