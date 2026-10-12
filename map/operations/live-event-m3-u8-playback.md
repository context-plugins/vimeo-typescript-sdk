<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventM3U8Playback — operations

Accessor: `client.liveEventM3U8Playback` · Source: `src/resources/live-event-m3-u8-playback.ts` · 2 operations · Request and error types: namespace `LiveEventM3U8Playback`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLiveEventM3U8Playback

- **Signature**: `getLiveEventM3U8Playback(request: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackRequest, options?: RequestOptions): ApiPromise<undefined, LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError>`
- **Wire**: `GET /users/{user_id}/live_events/{live_event_id}/m3u8_playback`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventM3U8Playback.GetLiveEventM3U8PlaybackRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `dvr` | `query` | — | `number` | no |
| `maxFpsFhd` | `query` | `max_fps_fhd` | `number` | no |
| `ttl` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLiveEventM3U8PlaybackAlt1

- **Signature**: `getLiveEventM3U8PlaybackAlt1(request: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Request, options?: RequestOptions): ApiPromise<undefined, LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error>`
- **Wire**: `GET /me/live_events/{live_event_id}/m3u8_playback`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `dvr` | `query` | — | `number` | no |
| `maxFpsFhd` | `query` | `max_fps_fhd` | `number` | no |
| `ttl` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

