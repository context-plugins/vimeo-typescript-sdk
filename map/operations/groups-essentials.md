<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsEssentials — operations

Accessor: `client.groupsEssentials` · Source: `src/resources/groups-essentials.ts` · 4 operations · Request and error types: namespace `GroupsEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createGroup

- **Signature**: `createGroup(request: GroupsEssentials.CreateGroupRequest, options?: RequestOptions): ApiPromise<Group, GroupsEssentials.CreateGroupError>`
- **Wire**: `POST /groups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Group`
- **Error**: `GroupsEssentials.CreateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsEssentials.CreateGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GroupsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsRequest` | `groupsRequestSchema` | `src/models/groups-request.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteGroup

- **Signature**: `deleteGroup(request: GroupsEssentials.DeleteGroupRequest, options?: RequestOptions): ApiPromise<undefined, GroupsEssentials.DeleteGroupError>`
- **Wire**: `DELETE /groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GroupsEssentials.DeleteGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsEssentials.DeleteGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroup

- **Signature**: `getGroup(request: GroupsEssentials.GetGroupRequest, options?: RequestOptions): ApiPromise<Group, GroupsEssentials.GetGroupError>`
- **Wire**: `GET /groups/{group_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group`
- **Error**: `GroupsEssentials.GetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsEssentials.GetGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroups

- **Signature**: `getGroups(request: GroupsEssentials.GetGroupsRequest, options?: RequestOptions): ApiPromise<GroupConnection, GroupsEssentials.GetGroupsError>`
- **Wire**: `GET /groups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupConnection`
- **Error**: `GroupsEssentials.GetGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsEssentials.GetGroupsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter1` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort13` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter1` | `filter1Schema` | `src/models/filter1.ts` |
| `Sort13` | `sort13Schema` | `src/models/sort13.ts` |
| `GroupConnection` | `groupConnectionSchema` | `src/models/group-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

