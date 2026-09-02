<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersEssentials — operations

Accessor: `client.usersEssentials` · Source: `src/resources/users-essentials.ts` · 4 operations · Request and error types: namespace `UsersEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### editUser

- **Signature**: `editUser(request: UsersEssentials.EditUserRequest, options?: RequestOptions): ApiPromise<User, UsersEssentials.EditUserError>`
- **Wire**: `PATCH /users/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `User`
- **Error**: `UsersEssentials.EditUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersEssentials.EditUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersRequest` | `usersRequestSchema` | `src/models/users-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editUserAlt1

- **Signature**: `editUserAlt1(request: UsersEssentials.EditUserAlt1Request, options?: RequestOptions): ApiPromise<User, UsersEssentials.EditUserAlt1Error>`
- **Wire**: `PATCH /me`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `User`
- **Error**: `UsersEssentials.EditUserAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersEssentials.EditUserAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeRequest` | `meRequestSchema` | `src/models/me-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getUser

- **Signature**: `getUser(request: UsersEssentials.GetUserRequest, options?: RequestOptions): ApiPromise<User, ResponseError>`
- **Wire**: `GET /users/{user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersEssentials.GetUserRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

### getUserAlt1

- **Signature**: `getUserAlt1(options?: RequestOptions): ApiPromise<User, ResponseError>`
- **Wire**: `GET /me`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

