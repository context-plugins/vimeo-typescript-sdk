<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveEventSessions — operations

Accessor: `client.liveEventSessions` · Source: `src/resources/live-event-sessions.ts` · 2 operations · Request types: namespace `LiveEventSessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getLiveClipIngestStatus

- **Signature**: `getLiveClipIngestStatus(request: LiveEventSessions.GetLiveClipIngestStatusRequest, options?: RequestOptions): ApiPromise<EventSessionStatus, ResponseError>`
- **Wire**: `GET /live_events/{live_event_id}/session_status`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventSessionStatus`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiveEventSessions.GetLiveClipIngestStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `string` | yes |
| `clipId` | `query` | `clip_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventSessionStatus` | `eventSessionStatusSchema` | `src/models/event-session-status.ts` |

### getLiveIngestStatus

- **Signature**: `getLiveIngestStatus(request: LiveEventSessions.GetLiveIngestStatusRequest, options?: RequestOptions): ApiPromise<EventSessionStatus, ResponseError>`
- **Wire**: `GET /videos/{video_id}/sessions/status`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventSessionStatus`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiveEventSessions.GetLiveIngestStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventSessionStatus` | `eventSessionStatusSchema` | `src/models/event-session-status.ts` |

