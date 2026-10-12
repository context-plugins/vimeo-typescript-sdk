<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosVersions — operations

Accessor: `client.videosVersions` · Source: `src/resources/videos-versions.ts` · 13 operations · Request and error types: namespace `VideosVersions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAudioTrack

- **Signature**: `createAudioTrack(request: VideosVersions.CreateAudioTrackRequest, options?: RequestOptions): ApiPromise<AlternateAudioTrack, VideosVersions.CreateAudioTrackError>`
- **Wire**: `POST /videos/{video_id}/versions/{version_id}/audiotracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlternateAudioTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.CreateAudioTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.CreateAudioTrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosVersionsAudiotracksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosVersionsAudiotracksRequest` | `videosVersionsAudiotracksRequestSchema` | `src/models/videos-versions-audiotracks-request.ts` |
| `AlternateAudioTrack` | `alternateAudioTrackSchema` | `src/models/alternate-audio-track.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### createVideoVersion

- **Signature**: `createVideoVersion(request: VideosVersions.CreateVideoVersionRequest, options?: RequestOptions): ApiPromise<VideoVersion, VideosVersions.CreateVideoVersionError>`
- **Wire**: `POST /videos/{video_id}/versions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoVersion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.CreateVideoVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.CreateVideoVersionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosVersionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosVersionsRequest` | `videosVersionsRequestSchema` | `src/models/videos-versions-request.ts` |
| `VideoVersion` | `videoVersionSchema` | `src/models/video-version.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAudioTrack

- **Signature**: `deleteAudioTrack(request: VideosVersions.DeleteAudioTrackRequest, options?: RequestOptions): ApiPromise<undefined, VideosVersions.DeleteAudioTrackError>`
- **Wire**: `DELETE /videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.DeleteAudioTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.DeleteAudioTrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `audiotrackId` | `path` | `audiotrack_id` | `string` | yes |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoVersion

- **Signature**: `deleteVideoVersion(request: VideosVersions.DeleteVideoVersionRequest, options?: RequestOptions): ApiPromise<undefined, VideosVersions.DeleteVideoVersionError>`
- **Wire**: `DELETE /videos/{video_id}/versions/{version_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.DeleteVideoVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.DeleteVideoVersionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editAudioTrack

- **Signature**: `editAudioTrack(request: VideosVersions.EditAudioTrackRequest, options?: RequestOptions): ApiPromise<AlternateAudioTrack, VideosVersions.EditAudioTrackError>`
- **Wire**: `PATCH /videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlternateAudioTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.EditAudioTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.EditAudioTrackRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `audiotrackId` | `path` | `audiotrack_id` | `string` | yes |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosVersionsAudiotracksAudiotrackIdRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosVersionsAudiotracksAudiotrackIdRequest` | `videosVersionsAudiotracksAudiotrackIdRequestSchema` | `src/models/videos-versions-audiotracks-audiotrack-id-request.ts` |
| `AlternateAudioTrack` | `alternateAudioTrackSchema` | `src/models/alternate-audio-track.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editVideoVersion

- **Signature**: `editVideoVersion(request: VideosVersions.EditVideoVersionRequest, options?: RequestOptions): ApiPromise<VideoVersion, VideosVersions.EditVideoVersionError>`
- **Wire**: `PATCH /videos/{video_id}/versions/{version_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoVersion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.EditVideoVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.EditVideoVersionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosVersionsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosVersionsRequest1` | `videosVersionsRequest1Schema` | `src/models/videos-versions-request1.ts` |
| `VideoVersion` | `videoVersionSchema` | `src/models/video-version.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAudioTrack

- **Signature**: `getAudioTrack(request: VideosVersions.GetAudioTrackRequest, options?: RequestOptions): ApiPromise<AlternateAudioTrack, VideosVersions.GetAudioTrackError>`
- **Wire**: `GET /videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlternateAudioTrack`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.GetAudioTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.GetAudioTrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `audiotrackId` | `path` | `audiotrack_id` | `string` | yes |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlternateAudioTrack` | `alternateAudioTrackSchema` | `src/models/alternate-audio-track.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAudioTracks

- **Signature**: `getAudioTracks(request: VideosVersions.GetAudioTracksRequest, options?: RequestOptions): ApiPromise<AlternateAudioTrackConnection, VideosVersions.GetAudioTracksError>`
- **Wire**: `GET /videos/{video_id}/versions/{version_id}/audiotracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlternateAudioTrackConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.GetAudioTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.GetAudioTracksRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlternateAudioTrackConnection` | `alternateAudioTrackConnectionSchema` | `src/models/alternate-audio-track-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAudiotrackDownloads

- **Signature**: `getAudiotrackDownloads(request: VideosVersions.GetAudiotrackDownloadsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /videos/{video_id}/versions/{version_id}/downloads`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosVersions.GetAudiotrackDownloadsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

### getVersionThumbnail

- **Signature**: `getVersionThumbnail(request: VideosVersions.GetVersionThumbnailRequest, options?: RequestOptions): ApiPromise<Picture, ApiError>`
- **Wire**: `GET /videos/{video_id}/versions/{version_id}/picture`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Picture`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosVersions.GetVersionThumbnailRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Picture` | `pictureSchema` | `src/models/picture.ts` |

### getVideoVersion

- **Signature**: `getVideoVersion(request: VideosVersions.GetVideoVersionRequest, options?: RequestOptions): ApiPromise<VideoVersion, VideosVersions.GetVideoVersionError>`
- **Wire**: `GET /videos/{video_id}/versions/{version_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoVersion`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.GetVideoVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.GetVideoVersionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `versionId` | `path` | `version_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoVersion` | `videoVersionSchema` | `src/models/video-version.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoVersions

- **Signature**: `getVideoVersions(request: VideosVersions.GetVideoVersionsRequest, options?: RequestOptions): ApiPromise<VideoVersionConnection, VideosVersions.GetVideoVersionsError>`
- **Wire**: `GET /videos/{video_id}/versions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoVersionConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.GetVideoVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.GetVideoVersionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoVersionConnection` | `videoVersionConnectionSchema` | `src/models/video-version-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoVersionsAlt1

- **Signature**: `getVideoVersionsAlt1(request: VideosVersions.GetVideoVersionsAlt1Request, options?: RequestOptions): ApiPromise<VideoVersionConnection, VideosVersions.GetVideoVersionsAlt1Error>`
- **Wire**: `GET /channels/{channel_id}/videos/{video_id}/versions`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoVersionConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosVersions.GetVideoVersionsAlt1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosVersions.GetVideoVersionsAlt1Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoVersionConnection` | `videoVersionConnectionSchema` | `src/models/video-version-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

