<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamsMembers — operations

Accessor: `client.teamsMembers` · Source: `src/resources/teams-members.ts` · 3 operations · Request types: namespace `TeamsMembers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getTeamInformation

- **Signature**: `getTeamInformation(request: TeamsMembers.GetTeamInformationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /teammembers/{code}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamsMembers.GetTeamInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `path` | `string` | yes |

### getTeamInformation2

- **Signature**: `getTeamInformation2(request: TeamsMembers.GetTeamInformation2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /users/{user_id}/team_users/{team_user_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamsMembers.GetTeamInformation2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamUserId` | `path` | `team_user_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

### getTeamRoleInformation

- **Signature**: `getTeamRoleInformation(request: TeamsMembers.GetTeamRoleInformationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /users/{user_id}/team/role`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamsMembers.GetTeamRoleInformationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |

