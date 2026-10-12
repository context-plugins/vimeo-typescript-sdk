<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveAnalytics — operations

Accessor: `client.liveAnalytics` · Source: `src/resources/live-analytics.ts` · 1 operation · Request and error types: namespace `LiveAnalytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### exportVpaasViewerAnalytics

- **Signature**: `exportVpaasViewerAnalytics(request: LiveAnalytics.ExportVpaasViewerAnalyticsRequest, options?: RequestOptions): ApiPromise<undefined, LiveAnalytics.ExportVpaasViewerAnalyticsError>`
- **Wire**: `POST /live_events/{live_event_id}/export_vpaas_analytics`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveAnalytics.ExportVpaasViewerAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveAnalytics.ExportVpaasViewerAnalyticsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

