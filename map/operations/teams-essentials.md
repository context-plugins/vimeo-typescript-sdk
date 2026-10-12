<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamsEssentials — operations

Accessor: `client.teamsEssentials` · Source: `src/resources/teams-essentials.ts` · 5 operations · Request and error types: namespace `TeamsEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### backfillTeamCustomMetadata

- **Signature**: `backfillTeamCustomMetadata(request: TeamsEssentials.BackfillTeamCustomMetadataRequest, options?: RequestOptions): ApiPromise<undefined, TeamsEssentials.BackfillTeamCustomMetadataError>`
- **Wire**: `POST /teams/{user_id}/custom_metadata/backfill`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `TeamsEssentials.BackfillTeamCustomMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [401] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsEssentials.BackfillTeamCustomMetadataRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `TeamsCustomMetadataBackfillRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsCustomMetadataBackfillRequest` | `teamsCustomMetadataBackfillRequestSchema` | `src/models/teams-custom-metadata-backfill-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTeamCustomMetadataIncompleteVideos

- **Signature**: `getTeamCustomMetadataIncompleteVideos(request: TeamsEssentials.GetTeamCustomMetadataIncompleteVideosRequest, options?: RequestOptions): ApiPromise<undefined, TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError>`
- **Wire**: `GET /teams/{user_id}/custom_metadata/incomplete_videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [401] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsEssentials.GetTeamCustomMetadataIncompleteVideosRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort48` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort48` | `sort48Schema` | `src/models/sort48.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTeamCustomMetadataSettings

- **Signature**: `getTeamCustomMetadataSettings(request: TeamsEssentials.GetTeamCustomMetadataSettingsRequest, options?: RequestOptions): ApiPromise<CustomMetadataSettingsConnection, TeamsEssentials.GetTeamCustomMetadataSettingsError>`
- **Wire**: `GET /teams/{user_id}/custom_metadata`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomMetadataSettingsConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `TeamsEssentials.GetTeamCustomMetadataSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [401] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsEssentials.GetTeamCustomMetadataSettingsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomMetadataSettingsConnection` | `customMetadataSettingsConnectionSchema` | `src/models/custom-metadata-settings-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCustomMetadataFieldOptions

- **Signature**: `updateCustomMetadataFieldOptions(request: TeamsEssentials.UpdateCustomMetadataFieldOptionsRequest, options?: RequestOptions): ApiPromise<CustomMetadataSettings, TeamsEssentials.UpdateCustomMetadataFieldOptionsError>`
- **Wire**: `PATCH /teams/{user_id}/custom_metadata/options`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomMetadataSettings`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `TeamsEssentials.UpdateCustomMetadataFieldOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [401] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsEssentials.UpdateCustomMetadataFieldOptionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `TeamsCustomMetadataOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsCustomMetadataOptionsRequest` | `teamsCustomMetadataOptionsRequestSchema` | `src/models/teams-custom-metadata-options-request.ts` |
| `CustomMetadataSettings` | `customMetadataSettingsSchema` | `src/models/custom-metadata-settings.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### upsertCustomMetadataSettings

- **Signature**: `upsertCustomMetadataSettings(request: TeamsEssentials.UpsertCustomMetadataSettingsRequest, options?: RequestOptions): ApiPromise<CustomMetadataSettings[], TeamsEssentials.UpsertCustomMetadataSettingsError>`
- **Wire**: `POST /teams/{user_id}/custom_metadata`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomMetadataSettings[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `TeamsEssentials.UpsertCustomMetadataSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [401] `LegacyError` · `"legacyError2"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsEssentials.UpsertCustomMetadataSettingsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `TeamsCustomMetadataRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsCustomMetadataRequest` | `teamsCustomMetadataRequestSchema` | `src/models/teams-custom-metadata-request.ts` |
| `CustomMetadataSettings` | `customMetadataSettingsSchema` | `src/models/custom-metadata-settings.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

