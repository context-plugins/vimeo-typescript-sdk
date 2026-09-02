<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosLiveM3U8Playback — operations

Accessor: `client.videosLiveM3U8Playback` · Source: `src/resources/videos-live-m3-u8-playback.ts` · 2 operations · Request and error types: namespace `VideosLiveM3U8Playback`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getOneTimeEventM3U8Playback

- **Signature**: `getOneTimeEventM3U8Playback(request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackRequest, options?: RequestOptions): ApiPromise<undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError>`
- **Wire**: `GET /users/{user_id}/videos/{video_id}/m3u8_playback`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOneTimeEventM3U8PlaybackAlt1

- **Signature**: `getOneTimeEventM3U8PlaybackAlt1(request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Request, options?: RequestOptions): ApiPromise<undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error>`
- **Wire**: `GET /me/videos/{video_id}/m3u8_playback`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

