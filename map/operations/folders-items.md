<!-- Generated file — do not edit; regenerated with the SDK. -->

# FoldersItems — operations

Accessor: `client.foldersItems` · Source: `src/resources/folders-items.ts` · 3 operations · Request and error types: namespace `FoldersItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteFolderItemsAlt1

- **Signature**: `deleteFolderItemsAlt1(request: FoldersItems.DeleteFolderItemsAlt1Request, options?: RequestOptions): ApiPromise<undefined, FoldersItems.DeleteFolderItemsAlt1Error>`
- **Wire**: `DELETE /me/projects/{project_id}/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `FoldersItems.DeleteFolderItemsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FoldersItems.DeleteFolderItemsAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `uris` | `query` | — | `string` | yes |
| `sendToRecentlyDeleted` | `query` | `send_to_recently_deleted` | `boolean` | no |
| `shouldDeleteItems` | `query` | `should_delete_items` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFolderItems

- **Signature**: `getFolderItems(request: FoldersItems.GetFolderItemsRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /me/projects/{project_id}/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FoldersItems.GetFolderItemsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `clipPrivacyFilters` | `query` | `clip_privacy_filters` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter21` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort37` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter21` | `filter21Schema` | `src/models/filter21.ts` |
| `Sort37` | `sort37Schema` | `src/models/sort37.ts` |

### getFolderItems2

- **Signature**: `getFolderItems2(request: FoldersItems.GetFolderItems2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /users/{user_id}/projects/{project_id}/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FoldersItems.GetFolderItems2Request` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `clipPrivacyFilters` | `query` | `clip_privacy_filters` | `string` | no |
| `direction` | `query` | — | `Direction` | no |
| `filter` | `query` | — | `Filter21` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort37` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Filter21` | `filter21Schema` | `src/models/filter21.ts` |
| `Sort37` | `sort37Schema` | `src/models/sort37.ts` |

