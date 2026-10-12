<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosFragments — operations

Accessor: `client.videosFragments` · Source: `src/resources/videos-fragments.ts` · 3 operations · Request types: namespace `VideosFragments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFragments

- **Signature**: `deleteFragments(request: VideosFragments.DeleteFragmentsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /videos/{video_id}/fragments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosFragments.DeleteFragmentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

### getFragments

- **Signature**: `getFragments(request: VideosFragments.GetFragmentsRequest, options?: RequestOptions): ApiPromise<Fragments, ApiError>`
- **Wire**: `GET /videos/{video_id}/fragments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Fragments`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosFragments.GetFragmentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Fragments` | `fragmentsSchema` | `src/models/fragments.ts` |

### putFragments

- **Signature**: `putFragments(request: VideosFragments.PutFragmentsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /videos/{video_id}/fragments`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosFragments.PutFragmentsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |

