<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosShowcases — operations

Accessor: `client.videosShowcases` · Source: `src/resources/videos-showcases.ts` · 2 operations · Request and error types: namespace `VideosShowcases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addOrRemoveMultipleAlbums

- **Signature**: `addOrRemoveMultipleAlbums(request: VideosShowcases.AddOrRemoveMultipleAlbumsRequest, options?: RequestOptions): ApiPromise<Album[], VideosShowcases.AddOrRemoveMultipleAlbumsError>`
- **Wire**: `PATCH /videos/{video_id}/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Album[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosShowcases.AddOrRemoveMultipleAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosShowcases.AddOrRemoveMultipleAlbumsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAlbumsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAlbumsRequest` | `videosAlbumsRequestSchema` | `src/models/videos-albums-request.ts` |
| `Album` | `albumSchema` | `src/models/album.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVideoAlbums

- **Signature**: `getVideoAlbums(request: VideosShowcases.GetVideoAlbumsRequest, options?: RequestOptions): ApiPromise<AlbumConnection, VideosShowcases.GetVideoAlbumsError>`
- **Wire**: `GET /videos/{video_id}/albums`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlbumConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosShowcases.GetVideoAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosShowcases.GetVideoAlbumsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlbumConnection` | `albumConnectionSchema` | `src/models/album-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

