<!-- Generated file — do not edit; regenerated with the SDK. -->

# FoldersVideos — operations

Accessor: `client.foldersVideos` · Source: `src/resources/folders-videos.ts` · 10 operations · Request and error types: namespace `FoldersVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideoToProject

- **Signature**: `addVideoToProject(request: FoldersVideos.AddVideoToProjectRequest, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.AddVideoToProjectError>`
- **Wire**: `PUT /users/{user_id}/projects/{project_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.AddVideoToProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.AddVideoToProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addVideoToProjectAlt1

- **Signature**: `addVideoToProjectAlt1(request: FoldersVideos.AddVideoToProjectAlt1Request, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.AddVideoToProjectAlt1Error>`
- **Wire**: `PUT /me/projects/{project_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.AddVideoToProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.AddVideoToProjectAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addVideosToProject

- **Signature**: `addVideosToProject(request: FoldersVideos.AddVideosToProjectRequest, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.AddVideosToProjectError>`
- **Wire**: `PUT /users/{user_id}/projects/{project_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.AddVideosToProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.AddVideosToProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersProjectsVideosRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersProjectsVideosRequest1` | `usersProjectsVideosRequest1Schema` | `src/models/users-projects-videos-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### addVideosToProjectAlt1

- **Signature**: `addVideosToProjectAlt1(request: FoldersVideos.AddVideosToProjectAlt1Request, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.AddVideosToProjectAlt1Error>`
- **Wire**: `PUT /me/projects/{project_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.AddVideosToProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.AddVideosToProjectAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `body` | `body` | — | `MeProjectsVideosRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeProjectsVideosRequest1` | `meProjectsVideosRequest1Schema` | `src/models/me-projects-videos-request1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjectVideos

- **Signature**: `getProjectVideos(request: FoldersVideos.GetProjectVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, FoldersVideos.GetProjectVideosError>`
- **Wire**: `GET /users/{user_id}/projects/{project_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.GetProjectVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.GetProjectVideosRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filterTag` | `query` | `filter_tag` | `string` | no |
| `filterTagAllOf` | `query` | `filter_tag_all_of` | `string` | no |
| `filterTagExclude` | `query` | `filter_tag_exclude` | `string` | no |
| `includeSubfolders` | `query` | `include_subfolders` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `queryFields` | `query` | `query_fields` | `string` | no |
| `sort` | `query` | — | `Sort37` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort37` | `sort37Schema` | `src/models/sort37.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjectVideosAlt1

- **Signature**: `getProjectVideosAlt1(request: FoldersVideos.GetProjectVideosAlt1Request, options?: RequestOptions): ApiPromise<VideoConnection, FoldersVideos.GetProjectVideosAlt1Error>`
- **Wire**: `GET /me/projects/{project_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.GetProjectVideosAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.GetProjectVideosAlt1Request` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filterTag` | `query` | `filter_tag` | `string` | no |
| `filterTagAllOf` | `query` | `filter_tag_all_of` | `string` | no |
| `filterTagExclude` | `query` | `filter_tag_exclude` | `string` | no |
| `includeSubfolders` | `query` | `include_subfolders` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `queryFields` | `query` | `query_fields` | `string` | no |
| `sort` | `query` | — | `Sort37` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort37` | `sort37Schema` | `src/models/sort37.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideoFromProject

- **Signature**: `removeVideoFromProject(request: FoldersVideos.RemoveVideoFromProjectRequest, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.RemoveVideoFromProjectError>`
- **Wire**: `DELETE /users/{user_id}/projects/{project_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.RemoveVideoFromProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.RemoveVideoFromProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideoFromProjectAlt1

- **Signature**: `removeVideoFromProjectAlt1(request: FoldersVideos.RemoveVideoFromProjectAlt1Request, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.RemoveVideoFromProjectAlt1Error>`
- **Wire**: `DELETE /me/projects/{project_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.RemoveVideoFromProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.RemoveVideoFromProjectAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideosFromProject

- **Signature**: `removeVideosFromProject(request: FoldersVideos.RemoveVideosFromProjectRequest, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.RemoveVideosFromProjectError>`
- **Wire**: `DELETE /users/{user_id}/projects/{project_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.RemoveVideosFromProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.RemoveVideosFromProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `UsersProjectsVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersProjectsVideosRequest` | `usersProjectsVideosRequestSchema` | `src/models/users-projects-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeVideosFromProjectAlt1

- **Signature**: `removeVideosFromProjectAlt1(request: FoldersVideos.RemoveVideosFromProjectAlt1Request, options?: RequestOptions): ApiPromise<undefined, FoldersVideos.RemoveVideosFromProjectAlt1Error>`
- **Wire**: `DELETE /me/projects/{project_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `FoldersVideos.RemoveVideosFromProjectAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersVideos.RemoveVideosFromProjectAlt1Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `body` | `body` | — | `MeProjectsVideosRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MeProjectsVideosRequest` | `meProjectsVideosRequestSchema` | `src/models/me-projects-videos-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

