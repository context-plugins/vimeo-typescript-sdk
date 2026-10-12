<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosTranscripts — operations

Accessor: `client.videosTranscripts` · Source: `src/resources/videos-transcripts.ts` · 2 operations · Request and error types: namespace `VideosTranscripts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTranscript

- **Signature**: `getTranscript(request: VideosTranscripts.GetTranscriptRequest, options?: RequestOptions): ApiPromise<SegmentConnection, VideosTranscripts.GetTranscriptError>`
- **Wire**: `GET /videos/{video_id}/transcripts/{texttrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SegmentConnection`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTranscripts.GetTranscriptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTranscripts.GetTranscriptRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `texttrackId` | `path` | `texttrack_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentConnection` | `segmentConnectionSchema` | `src/models/segment-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getTranscriptMetadata

- **Signature**: `getTranscriptMetadata(request: VideosTranscripts.GetTranscriptMetadataRequest, options?: RequestOptions): ApiPromise<TranscriptMetadata, VideosTranscripts.GetTranscriptMetadataError>`
- **Wire**: `GET /videos/{container_uuid}/transcript/{texttrack_id}/metadata`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TranscriptMetadata`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosTranscripts.GetTranscriptMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosTranscripts.GetTranscriptMetadataRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `containerUuid` | `path` | `container_uuid` | `string` | yes |
| `texttrackId` | `path` | `texttrack_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TranscriptMetadata` | `transcriptMetadataSchema` | `src/models/transcript-metadata.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

