<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosNondestructiveTrimming — operations

Accessor: `client.videosNondestructiveTrimming` · Source: `src/resources/videos-nondestructive-trimming.ts` · 1 operation · Request and error types: namespace `VideosNondestructiveTrimming`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clipTrim

- **Signature**: `clipTrim(request: VideosNondestructiveTrimming.ClipTrimRequest, options?: RequestOptions): ApiPromise<TrimmedVideo, VideosNondestructiveTrimming.ClipTrimError>`
- **Wire**: `POST /videos/{video_id}/trim`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrimmedVideo`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosNondestructiveTrimming.ClipTrimError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosNondestructiveTrimming.ClipTrimRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosTrimRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosTrimRequest` | `videosTrimRequestSchema` | `src/models/videos-trim-request.ts` |
| `TrimmedVideo` | `trimmedVideoSchema` | `src/models/trimmed-video.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

