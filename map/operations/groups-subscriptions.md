<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsSubscriptions — operations

Accessor: `client.groupsSubscriptions` · Source: `src/resources/groups-subscriptions.ts` · 4 operations · Request and error types: namespace `GroupsSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### joinGroup

- **Signature**: `joinGroup(request: GroupsSubscriptions.JoinGroupRequest, options?: RequestOptions): ApiPromise<undefined, GroupsSubscriptions.JoinGroupError>`
- **Wire**: `PUT /users/{user_id}/groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsSubscriptions.JoinGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsSubscriptions.JoinGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### joinGroupAlt1

- **Signature**: `joinGroupAlt1(request: GroupsSubscriptions.JoinGroupAlt1Request, options?: RequestOptions): ApiPromise<undefined, GroupsSubscriptions.JoinGroupAlt1Error>`
- **Wire**: `PUT /me/groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsSubscriptions.JoinGroupAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsSubscriptions.JoinGroupAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### leaveGroup

- **Signature**: `leaveGroup(request: GroupsSubscriptions.LeaveGroupRequest, options?: RequestOptions): ApiPromise<undefined, GroupsSubscriptions.LeaveGroupError>`
- **Wire**: `DELETE /users/{user_id}/groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsSubscriptions.LeaveGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsSubscriptions.LeaveGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### leaveGroupAlt1

- **Signature**: `leaveGroupAlt1(request: GroupsSubscriptions.LeaveGroupAlt1Request, options?: RequestOptions): ApiPromise<undefined, GroupsSubscriptions.LeaveGroupAlt1Error>`
- **Wire**: `DELETE /me/groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsSubscriptions.LeaveGroupAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsSubscriptions.LeaveGroupAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

