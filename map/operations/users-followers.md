<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersFollowers — operations

Accessor: `client.usersFollowers` · Source: `src/resources/users-followers.ts` · 12 operations · Request and error types: namespace `UsersFollowers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### checkIfUserIsFollowing

- **Signature**: `checkIfUserIsFollowing(request: UsersFollowers.CheckIfUserIsFollowingRequest, options?: RequestOptions): ApiPromise<undefined, UsersFollowers.CheckIfUserIsFollowingError>`
- **Wire**: `GET /users/{user_id}/following/{follow_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersFollowers.CheckIfUserIsFollowingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFollowers.CheckIfUserIsFollowingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `followUserId` | `path` | `follow_user_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkIfUserIsFollowingAlt1

- **Signature**: `checkIfUserIsFollowingAlt1(request: UsersFollowers.CheckIfUserIsFollowingAlt1Request, options?: RequestOptions): ApiPromise<undefined, UsersFollowers.CheckIfUserIsFollowingAlt1Error>`
- **Wire**: `GET /me/following/{follow_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersFollowers.CheckIfUserIsFollowingAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFollowers.CheckIfUserIsFollowingAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `followUserId` | `path` | `follow_user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### followUser

- **Signature**: `followUser(request: UsersFollowers.FollowUserRequest, options?: RequestOptions): ApiPromise<undefined, UsersFollowers.FollowUserError>`
- **Wire**: `PUT /users/{user_id}/following/{follow_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersFollowers.FollowUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFollowers.FollowUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `followUserId` | `path` | `follow_user_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### followUserAlt1

- **Signature**: `followUserAlt1(request: UsersFollowers.FollowUserAlt1Request, options?: RequestOptions): ApiPromise<undefined, UsersFollowers.FollowUserAlt1Error>`
- **Wire**: `PUT /me/following/{follow_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersFollowers.FollowUserAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFollowers.FollowUserAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `followUserId` | `path` | `follow_user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### followUsers

- **Signature**: `followUsers(request: UsersFollowers.FollowUsersRequest, options?: RequestOptions): ApiPromise<undefined, UsersFollowers.FollowUsersError>`
- **Wire**: `POST /users/{user_id}/following`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersFollowers.FollowUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFollowers.FollowUsersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersFollowingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersFollowingRequest` | `usersFollowingRequestSchema` | `src/models/users-following-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### followUsersAlt1

- **Signature**: `followUsersAlt1(request: UsersFollowers.FollowUsersAlt1Request, options?: RequestOptions): ApiPromise<undefined, UsersFollowers.FollowUsersAlt1Error>`
- **Wire**: `POST /me/following`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UsersFollowers.FollowUsersAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersFollowers.FollowUsersAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeFollowingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeFollowingRequest` | `meFollowingRequestSchema` | `src/models/me-following-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFollowers

- **Signature**: `getFollowers(request: UsersFollowers.GetFollowersRequest, options?: RequestOptions): ApiPromise<UserConnection, ResponseError>`
- **Wire**: `GET /users/{user_id}/followers`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersFollowers.GetFollowersRequest` (6):

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
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### getFollowersAlt1

- **Signature**: `getFollowersAlt1(request: UsersFollowers.GetFollowersAlt1Request, options?: RequestOptions): ApiPromise<UserConnection, ResponseError>`
- **Wire**: `GET /me/followers`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersFollowers.GetFollowersAlt1Request` (5):

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
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### getUserFollowing

- **Signature**: `getUserFollowing(request: UsersFollowers.GetUserFollowingRequest, options?: RequestOptions): ApiPromise<UserConnection, ResponseError>`
- **Wire**: `GET /users/{user_id}/following`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersFollowers.GetUserFollowingRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter13` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter13` | `filter13Schema` | `src/models/filter13.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### getUserFollowingAlt1

- **Signature**: `getUserFollowingAlt1(request: UsersFollowers.GetUserFollowingAlt1Request, options?: RequestOptions): ApiPromise<UserConnection, ResponseError>`
- **Wire**: `GET /me/following`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersFollowers.GetUserFollowingAlt1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter13` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter13` | `filter13Schema` | `src/models/filter13.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |

### unfollowUser

- **Signature**: `unfollowUser(request: UsersFollowers.UnfollowUserRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /users/{user_id}/following/{follow_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersFollowers.UnfollowUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `followUserId` | `path` | `follow_user_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

### unfollowUserAlt1

- **Signature**: `unfollowUserAlt1(request: UsersFollowers.UnfollowUserAlt1Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /me/following/{follow_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersFollowers.UnfollowUserAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `followUserId` | `path` | `follow_user_id` | `number` | yes |

