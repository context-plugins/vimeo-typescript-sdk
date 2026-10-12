<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmbedPresetsFolders — operations

Accessor: `client.embedPresetsFolders` · Source: `src/resources/embed-presets-folders.ts` · 1 operation · Request and error types: namespace `EmbedPresetsFolders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFolderEmbedPreset

- **Signature**: `deleteFolderEmbedPreset(request: EmbedPresetsFolders.DeleteFolderEmbedPresetRequest, options?: RequestOptions): ApiPromise<undefined, EmbedPresetsFolders.DeleteFolderEmbedPresetError>`
- **Wire**: `DELETE /users/{user_id}/projects/{project_id}/presets/{preset_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `EmbedPresetsFolders.DeleteFolderEmbedPresetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EmbedPresetsFolders.DeleteFolderEmbedPresetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `number` | yes |
| `projectId` | `path` | `project_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

