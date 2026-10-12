<!-- Generated file — do not edit; regenerated with the SDK. -->

# FoldersEssentials — operations

Accessor: `client.foldersEssentials` · Source: `src/resources/folders-essentials.ts` · 11 operations · Request and error types: namespace `FoldersEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProject

- **Signature**: `createProject(request: FoldersEssentials.CreateProjectRequest, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.CreateProjectError>`
- **Wire**: `POST /users/{user_id}/projects`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.CreateProjectRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersProjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersProjectsRequest` | `usersProjectsRequestSchema` | `src/models/users-projects-request.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createProjectAlt1

- **Signature**: `createProjectAlt1(request: FoldersEssentials.CreateProjectAlt1Request, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.CreateProjectAlt1Error>`
- **Wire**: `POST /me/projects`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.CreateProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.CreateProjectAlt1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MeProjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeProjectsRequest` | `meProjectsRequestSchema` | `src/models/me-projects-request.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteProject

- **Signature**: `deleteProject(request: FoldersEssentials.DeleteProjectRequest, options?: RequestOptions): ApiPromise<undefined, FoldersEssentials.DeleteProjectError>`
- **Wire**: `DELETE /users/{user_id}/projects/{project_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.DeleteProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersProjectsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersProjectsRequest1` | `usersProjectsRequest1Schema` | `src/models/users-projects-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteProjectAlt1

- **Signature**: `deleteProjectAlt1(request: FoldersEssentials.DeleteProjectAlt1Request, options?: RequestOptions): ApiPromise<undefined, FoldersEssentials.DeleteProjectAlt1Error>`
- **Wire**: `DELETE /me/projects/{project_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.DeleteProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.DeleteProjectAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `body` | `body` | — | `MeProjectsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeProjectsRequest1` | `meProjectsRequest1Schema` | `src/models/me-projects-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editProject

- **Signature**: `editProject(request: FoldersEssentials.EditProjectRequest, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.EditProjectError>`
- **Wire**: `PATCH /users/{user_id}/projects/{project_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.EditProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.EditProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersProjectsRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersProjectsRequest2` | `usersProjectsRequest2Schema` | `src/models/users-projects-request2.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### editProjectAlt1

- **Signature**: `editProjectAlt1(request: FoldersEssentials.EditProjectAlt1Request, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.EditProjectAlt1Error>`
- **Wire**: `PATCH /me/projects/{project_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.EditProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.EditProjectAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `body` | `body` | — | `MeProjectsRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeProjectsRequest2` | `meProjectsRequest2Schema` | `src/models/me-projects-request2.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPrivateToMeFolder

- **Signature**: `getPrivateToMeFolder(request: FoldersEssentials.GetPrivateToMeFolderRequest, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.GetPrivateToMeFolderError>`
- **Wire**: `GET /users/{owner_id}/folders/private_to_me`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.GetPrivateToMeFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.GetPrivateToMeFolderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ownerId` | `path` | `owner_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProject

- **Signature**: `getProject(request: FoldersEssentials.GetProjectRequest, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.GetProjectError>`
- **Wire**: `GET /users/{user_id}/projects/{project_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.GetProjectRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjectAlt1

- **Signature**: `getProjectAlt1(request: FoldersEssentials.GetProjectAlt1Request, options?: RequestOptions): ApiPromise<Project, FoldersEssentials.GetProjectAlt1Error>`
- **Wire**: `GET /me/projects/{project_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.GetProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.GetProjectAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjects

- **Signature**: `getProjects(request: FoldersEssentials.GetProjectsRequest, options?: RequestOptions): ApiPromise<ProjectConnection, FoldersEssentials.GetProjectsError>`
- **Wire**: `GET /users/{user_id}/projects`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.GetProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.GetProjectsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort36` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort36` | `sort36Schema` | `src/models/sort36.ts` |
| `ProjectConnection` | `projectConnectionSchema` | `src/models/project-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjectsAlt1

- **Signature**: `getProjectsAlt1(request: FoldersEssentials.GetProjectsAlt1Request, options?: RequestOptions): ApiPromise<ProjectConnection, FoldersEssentials.GetProjectsAlt1Error>`
- **Wire**: `GET /me/projects`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersEssentials.GetProjectsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersEssentials.GetProjectsAlt1Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort36` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort36` | `sort36Schema` | `src/models/sort36.ts` |
| `ProjectConnection` | `projectConnectionSchema` | `src/models/project-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

