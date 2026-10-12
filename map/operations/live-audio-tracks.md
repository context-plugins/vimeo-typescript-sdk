<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiveAudioTracks — operations

Accessor: `client.liveAudioTracks` · Source: `src/resources/live-audio-tracks.ts` · 2 operations · Request and error types: namespace `LiveAudioTracks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEventAudioTracks

- **Signature**: `getEventAudioTracks(request: LiveAudioTracks.GetEventAudioTracksRequest, options?: RequestOptions): ApiPromise<EventAudioTracks, LiveAudioTracks.GetEventAudioTracksError>`
- **Wire**: `GET /live_events/{live_event_id}/audio_tracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventAudioTracks`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveAudioTracks.GetEventAudioTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveAudioTracks.GetEventAudioTracksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventAudioTracks` | `eventAudioTracksSchema` | `src/models/event-audio-tracks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateEventAudioTracks

- **Signature**: `updateEventAudioTracks(request: LiveAudioTracks.UpdateEventAudioTracksRequest, options?: RequestOptions): ApiPromise<EventAudioTracks, LiveAudioTracks.UpdateEventAudioTracksError>`
- **Wire**: `PATCH /live_events/{live_event_id}/audio_tracks`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventAudioTracks`
- **Error**: `VimeoApiError` with `kind: "api"`, an instance of `LiveAudioTracks.UpdateEventAudioTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiveAudioTracks.UpdateEventAudioTracksRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `liveEventId` | `path` | `live_event_id` | `number` | yes |
| `body` | `body` | — | `LiveEventsAudioTracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveEventsAudioTracksRequest` | `liveEventsAudioTracksRequestSchema` | `src/models/live-events-audio-tracks-request.ts` |
| `EventAudioTracks` | `eventAudioTracksSchema` | `src/models/event-audio-tracks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

