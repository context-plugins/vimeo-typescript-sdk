<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosTextTracks — operations

Accessor: `client.videosTextTracks` · Source: `src/resources/videos-text-tracks.ts` · 9 operations · Request and error types: namespace `VideosTextTracks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTextTrack

- **Signature**: `createTextTrack(request: VideosTextTracks.CreateTextTrackRequest, options?: RequestOptions): ApiPromise<TextTrack, VideosTextTracks.CreateTextTrackError>`
- **Wire**: `POST /videos/{video_id}/texttracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TextTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.CreateTextTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.CreateTextTrackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosTexttracksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosTexttracksRequest` | `videosTexttracksRequestSchema` | `src/models/videos-texttracks-request.ts` |
| `TextTrack` | `textTrackSchema` | `src/models/text-track.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createTextTrackAlt1

- **Signature**: `createTextTrackAlt1(request: VideosTextTracks.CreateTextTrackAlt1Request, options?: RequestOptions): ApiPromise<TextTrack, VideosTextTracks.CreateTextTrackAlt1Error>`
- **Wire**: `POST /channels/{channel_id}/videos/{video_id}/texttracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TextTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.CreateTextTrackAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.CreateTextTrackAlt1Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `ChannelsVideosTexttracksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsVideosTexttracksRequest` | `channelsVideosTexttracksRequestSchema` | `src/models/channels-videos-texttracks-request.ts` |
| `TextTrack` | `textTrackSchema` | `src/models/text-track.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteTextTrack

- **Signature**: `deleteTextTrack(request: VideosTextTracks.DeleteTextTrackRequest, options?: RequestOptions): ApiPromise<undefined, VideosTextTracks.DeleteTextTrackError>`
- **Wire**: `DELETE /videos/{video_id}/texttracks/{texttrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.DeleteTextTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.DeleteTextTrackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `texttrackId` | `path` | `texttrack_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editTextTrack

- **Signature**: `editTextTrack(request: VideosTextTracks.EditTextTrackRequest, options?: RequestOptions): ApiPromise<TextTrack, VideosTextTracks.EditTextTrackError>`
- **Wire**: `PATCH /videos/{video_id}/texttracks/{texttrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TextTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.EditTextTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.EditTextTrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `texttrackId` | `path` | `texttrack_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosTexttracksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosTexttracksRequest1` | `videosTexttracksRequest1Schema` | `src/models/videos-texttracks-request1.ts` |
| `TextTrack` | `textTrackSchema` | `src/models/text-track.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTextTrack

- **Signature**: `getTextTrack(request: VideosTextTracks.GetTextTrackRequest, options?: RequestOptions): ApiPromise<TextTrack, VideosTextTracks.GetTextTrackError>`
- **Wire**: `GET /videos/{video_id}/texttracks/{texttrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TextTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.GetTextTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.GetTextTrackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `texttrackId` | `path` | `texttrack_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TextTrack` | `textTrackSchema` | `src/models/text-track.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTextTracks

- **Signature**: `getTextTracks(request: VideosTextTracks.GetTextTracksRequest, options?: RequestOptions): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksError>`
- **Wire**: `GET /videos/{video_id}/texttracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TextTrackConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.GetTextTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.GetTextTracksRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TextTrackConnection` | `textTrackConnectionSchema` | `src/models/text-track-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTextTracksAlt1

- **Signature**: `getTextTracksAlt1(request: VideosTextTracks.GetTextTracksAlt1Request, options?: RequestOptions): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt1Error>`
- **Wire**: `GET /videos/{video_id}/versions/{version_id}/texttracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TextTrackConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.GetTextTracksAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.GetTextTracksAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `versionId` | `path` | `version_id` | `string` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TextTrackConnection` | `textTrackConnectionSchema` | `src/models/text-track-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTextTracksAlt2

- **Signature**: `getTextTracksAlt2(request: VideosTextTracks.GetTextTracksAlt2Request, options?: RequestOptions): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt2Error>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/texttracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TextTrackConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.GetTextTracksAlt2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.GetTextTracksAlt2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TextTrackConnection` | `textTrackConnectionSchema` | `src/models/text-track-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getTextTracksAlt3

- **Signature**: `getTextTracksAlt3(request: VideosTextTracks.GetTextTracksAlt3Request, options?: RequestOptions): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt3Error>`
- **Wire**: `GET /albums/{album_id}/videos/{video_id}/texttracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TextTrackConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTextTracks.GetTextTracksAlt3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTextTracks.GetTextTracksAlt3Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `albumId` | `path` | `album_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TextTrackConnection` | `textTrackConnectionSchema` | `src/models/text-track-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

