<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosModeration — operations

Accessor: `client.videosModeration` · Source: `src/resources/videos-moderation.ts` · 1 operation · Request and error types: namespace `VideosModeration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVideoReportingReasons

- **Signature**: `getVideoReportingReasons(options?: RequestOptions): ApiPromise<VideoReportReason, VideosModeration.GetVideoReportingReasonsError>`
- **Wire**: `GET /report/video_report_reasons`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoReportReason`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `VideosModeration.GetVideoReportingReasonsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoReportReason` | `videoReportReasonSchema` | `src/models/video-report-reason.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

