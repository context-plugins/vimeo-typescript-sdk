<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersWatchHistory — operations

Accessor: `client.usersWatchHistory` · Source: `src/resources/users-watch-history.ts` · 3 operations · Request and error types: namespace `UsersWatchHistory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFromWatchHistory

- **Signature**: `deleteFromWatchHistory(request: UsersWatchHistory.DeleteFromWatchHistoryRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /me/watched/videos/{video_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersWatchHistory.DeleteFromWatchHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

### deleteWatchHistory

- **Signature**: `deleteWatchHistory(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /me/watched/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getWatchHistory

- **Signature**: `getWatchHistory(request: UsersWatchHistory.GetWatchHistoryRequest, options?: RequestOptions): ApiPromise<VideoConnection, UsersWatchHistory.GetWatchHistoryError>`
- **Wire**: `GET /me/watched/videos`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `UsersWatchHistory.GetWatchHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersWatchHistory.GetWatchHistoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoConnection` | `videoConnectionSchema` | `src/models/video-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

