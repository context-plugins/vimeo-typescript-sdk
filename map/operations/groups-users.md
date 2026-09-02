<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsUsers — operations

Accessor: `client.groupsUsers` · Source: `src/resources/groups-users.ts` · 5 operations · Request and error types: namespace `GroupsUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### checkIfUserJoinedGroup

- **Signature**: `checkIfUserJoinedGroup(request: GroupsUsers.CheckIfUserJoinedGroupRequest, options?: RequestOptions): ApiPromise<undefined, GroupsUsers.CheckIfUserJoinedGroupError>`
- **Wire**: `GET /users/{user_id}/groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsUsers.CheckIfUserJoinedGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsUsers.CheckIfUserJoinedGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### checkIfUserJoinedGroupAlt1

- **Signature**: `checkIfUserJoinedGroupAlt1(request: GroupsUsers.CheckIfUserJoinedGroupAlt1Request, options?: RequestOptions): ApiPromise<undefined, GroupsUsers.CheckIfUserJoinedGroupAlt1Error>`
- **Wire**: `GET /me/groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsUsers.CheckIfUserJoinedGroupAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsUsers.CheckIfUserJoinedGroupAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getGroupMembers

- **Signature**: `getGroupMembers(request: GroupsUsers.GetGroupMembersRequest, options?: RequestOptions): ApiPromise<UserConnection, GroupsUsers.GetGroupMembersError>`
- **Wire**: `GET /groups/{group_id}/users`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserConnection`
- **Error**: `GroupsUsers.GetGroupMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsUsers.GetGroupMembersRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter2` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort8` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter2` | `filter2Schema` | `src/models/filter2.ts` |
| `Sort8` | `sort8Schema` | `src/models/sort8.ts` |
| `UserConnection` | `userConnectionSchema` | `src/models/user-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getUserGroups

- **Signature**: `getUserGroups(request: GroupsUsers.GetUserGroupsRequest, options?: RequestOptions): ApiPromise<GroupConnection, GroupsUsers.GetUserGroupsError>`
- **Wire**: `GET /users/{user_id}/groups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupConnection`
- **Error**: `GroupsUsers.GetUserGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsUsers.GetUserGroupsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter12` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort5` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter12` | `filter12Schema` | `src/models/filter12.ts` |
| `Sort5` | `sort5Schema` | `src/models/sort5.ts` |
| `GroupConnection` | `groupConnectionSchema` | `src/models/group-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getUserGroupsAlt1

- **Signature**: `getUserGroupsAlt1(request: GroupsUsers.GetUserGroupsAlt1Request, options?: RequestOptions): ApiPromise<GroupConnection, GroupsUsers.GetUserGroupsAlt1Error>`
- **Wire**: `GET /me/groups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupConnection`
- **Error**: `GroupsUsers.GetUserGroupsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsUsers.GetUserGroupsAlt1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter12` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort5` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter12` | `filter12Schema` | `src/models/filter12.ts` |
| `Sort5` | `sort5Schema` | `src/models/sort5.ts` |
| `GroupConnection` | `groupConnectionSchema` | `src/models/group-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

