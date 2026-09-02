<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosAi — operations

Accessor: `client.videosAi` · Source: `src/resources/videos-ai.ts` · 11 operations · Request and error types: namespace `VideosAi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### askAiQuestion

- **Signature**: `askAiQuestion(request: VideosAi.AskAiQuestionRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.AskAiQuestionError>`
- **Wire**: `POST /videos/{video_id}/ai/ask`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.AskAiQuestionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error3"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.AskAiQuestionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAiAskRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAiAskRequest` | `videosAiAskRequestSchema` | `src/models/videos-ai-ask-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### editAiTexttrack

- **Signature**: `editAiTexttrack(request: VideosAi.EditAiTexttrackRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.EditAiTexttrackError>`
- **Wire**: `PATCH /videos/{video_id}/ai/texttracks/{texttrack_id}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.EditAiTexttrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"legacyError"` [404] `LegacyError` · `"error2"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.EditAiTexttrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `texttrackId` | `path` | `texttrack_id` | `number` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAiTexttracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAiTexttracksRequest` | `videosAiTexttracksRequestSchema` | `src/models/videos-ai-texttracks-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAiLanguages

- **Signature**: `getAiLanguages(request: VideosAi.GetAiLanguagesRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.GetAiLanguagesError>`
- **Wire**: `GET /videos/ai/languages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.GetAiLanguagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.GetAiLanguagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `Type52` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type52` | `type52Schema` | `src/models/type52.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAiMetadata

- **Signature**: `getAiMetadata(request: VideosAi.GetAiMetadataRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.GetAiMetadataError>`
- **Wire**: `GET /videos/{video_id}/ai/metadata`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.GetAiMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error3"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.GetAiMetadataRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAiQuestions

- **Signature**: `getAiQuestions(request: VideosAi.GetAiQuestionsRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.GetAiQuestionsError>`
- **Wire**: `GET /videos/{video_id}/ai/ask`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.GetAiQuestionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error2"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.GetAiQuestionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `language` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAiTranscribeStatus

- **Signature**: `getAiTranscribeStatus(request: VideosAi.GetAiTranscribeStatusRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.GetAiTranscribeStatusError>`
- **Wire**: `GET /videos/{video_id}/ai/transcribe`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.GetAiTranscribeStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.GetAiTranscribeStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAiTranslateDubbingStatus

- **Signature**: `getAiTranslateDubbingStatus(request: VideosAi.GetAiTranslateDubbingStatusRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.GetAiTranslateDubbingStatusError>`
- **Wire**: `GET /videos/{video_id}/ai/translate/dubbing`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.GetAiTranslateDubbingStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error2"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.GetAiTranslateDubbingStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `language` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getAiTranslateSubtitlesStatus

- **Signature**: `getAiTranslateSubtitlesStatus(request: VideosAi.GetAiTranslateSubtitlesStatusRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.GetAiTranslateSubtitlesStatusError>`
- **Wire**: `GET /videos/{video_id}/ai/translate/subtitles`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.GetAiTranslateSubtitlesStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error2"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.GetAiTranslateSubtitlesStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `language` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### startAiTranscribe

- **Signature**: `startAiTranscribe(request: VideosAi.StartAiTranscribeRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.StartAiTranscribeError>`
- **Wire**: `POST /videos/{video_id}/ai/transcribe`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.StartAiTranscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.StartAiTranscribeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAiTranscribeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAiTranscribeRequest` | `videosAiTranscribeRequestSchema` | `src/models/videos-ai-transcribe-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### startAiTranslateDubbing

- **Signature**: `startAiTranslateDubbing(request: VideosAi.StartAiTranslateDubbingRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.StartAiTranslateDubbingError>`
- **Wire**: `POST /videos/{video_id}/ai/translate/dubbing`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.StartAiTranslateDubbingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error3"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.StartAiTranslateDubbingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAiTranslateDubbingRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAiTranslateDubbingRequest` | `videosAiTranslateDubbingRequestSchema` | `src/models/videos-ai-translate-dubbing-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### startAiTranslateSubtitles

- **Signature**: `startAiTranslateSubtitles(request: VideosAi.StartAiTranslateSubtitlesRequest, options?: RequestOptions): ApiPromise<undefined, VideosAi.StartAiTranslateSubtitlesError>`
- **Wire**: `POST /videos/{video_id}/ai/translate/subtitles`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosAi.StartAiTranslateSubtitlesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"legacyError"` [404] `LegacyError` · `"error3"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosAi.StartAiTranslateSubtitlesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `body` | `body` | — | `VideosAiTranslateSubtitlesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideosAiTranslateSubtitlesRequest` | `videosAiTranslateSubtitlesRequestSchema` | `src/models/videos-ai-translate-subtitles-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

