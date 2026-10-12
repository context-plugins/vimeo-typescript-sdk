<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsVideos — operations

Accessor: `client.groupsVideos` · Source: `src/resources/groups-videos.ts` · 5 operations · Request and error types: namespace `GroupsVideos`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addVideoToGroup

- **Signature**: `addVideoToGroup(request: GroupsVideos.AddVideoToGroupRequest, options?: RequestOptions): ApiPromise<Video, GroupsVideos.AddVideoToGroupError>`
- **Wire**: `PUT /groups/{group_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Video`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `GroupsVideos.AddVideoToGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsVideos.AddVideoToGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteVideoFromGroup

- **Signature**: `deleteVideoFromGroup(request: GroupsVideos.DeleteVideoFromGroupRequest, options?: RequestOptions): ApiPromise<undefined, GroupsVideos.DeleteVideoFromGroupError>`
- **Wire**: `DELETE /groups/{group_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `GroupsVideos.DeleteVideoFromGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsVideos.DeleteVideoFromGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAvailableVideoGroups

- **Signature**: `getAvailableVideoGroups(request: GroupsVideos.GetAvailableVideoGroupsRequest, options?: RequestOptions): ApiPromise<GroupConnection, GroupsVideos.GetAvailableVideoGroupsError>`
- **Wire**: `GET /videos/{video_id}/available_groups`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `GroupsVideos.GetAvailableVideoGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsVideos.GetAvailableVideoGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupConnection` | `groupConnectionSchema` | `src/models/group-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupVideo

- **Signature**: `getGroupVideo(request: GroupsVideos.GetGroupVideoRequest, options?: RequestOptions): ApiPromise<Video, GroupsVideos.GetGroupVideoError>`
- **Wire**: `GET /groups/{group_id}/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Video`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `GroupsVideos.GetGroupVideoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsVideos.GetGroupVideoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Video` | `videoSchema` | `src/models/video.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getGroupVideos

- **Signature**: `getGroupVideos(request: GroupsVideos.GetGroupVideosRequest, options?: RequestOptions): ApiPromise<VideoConnection, GroupsVideos.GetGroupVideosError>`
- **Wire**: `GET /groups/{group_id}/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `GroupsVideos.GetGroupVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsVideos.GetGroupVideosRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter3` | no |
| `filterEmbeddable` | `query` | `filter_embeddable` | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `query` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort15` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter3` | `filter3Schema` | `src/models/filter3.ts` |
| `Sort15` | `sort15Schema` | `src/models/sort15.ts` |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

