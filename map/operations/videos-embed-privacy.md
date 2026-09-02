<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosEmbedPrivacy — operations

Accessor: `client.videosEmbedPrivacy` · Source: `src/resources/videos-embed-privacy.ts` · 3 operations · Request and error types: namespace `VideosEmbedPrivacy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addVideoPrivacyDomain

- **Signature**: `addVideoPrivacyDomain(request: VideosEmbedPrivacy.AddVideoPrivacyDomainRequest, options?: RequestOptions): ApiPromise<undefined, VideosEmbedPrivacy.AddVideoPrivacyDomainError>`
- **Wire**: `PUT /videos/{video_id}/privacy/domains/{domain}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosEmbedPrivacy.AddVideoPrivacyDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEmbedPrivacy.AddVideoPrivacyDomainRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domain` | `path` | — | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### deleteVideoPrivacyDomain

- **Signature**: `deleteVideoPrivacyDomain(request: VideosEmbedPrivacy.DeleteVideoPrivacyDomainRequest, options?: RequestOptions): ApiPromise<undefined, VideosEmbedPrivacy.DeleteVideoPrivacyDomainError>`
- **Wire**: `DELETE /videos/{video_id}/privacy/domains/{domain}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VideosEmbedPrivacy.DeleteVideoPrivacyDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"legacyError2"` [404] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEmbedPrivacy.DeleteVideoPrivacyDomainRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domain` | `path` | — | `string` | yes |
| `videoId` | `path` | `video_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### getVideoPrivacyDomains

- **Signature**: `getVideoPrivacyDomains(request: VideosEmbedPrivacy.GetVideoPrivacyDomainsRequest, options?: RequestOptions): ApiPromise<DomainConnection, VideosEmbedPrivacy.GetVideoPrivacyDomainsError>`
- **Wire**: `GET /videos/{video_id}/privacy/domains`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainConnection`
- **Error**: `VideosEmbedPrivacy.GetVideoPrivacyDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [403] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VideosEmbedPrivacy.GetVideoPrivacyDomainsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `videoId` | `path` | `video_id` | `number` | yes |
| `direction` | `query` | — | `Direction` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `sort` | `query` | — | `Sort78` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Sort78` | `sort78Schema` | `src/models/sort78.ts` |
| `DomainConnection` | `domainConnectionSchema` | `src/models/domain-connection.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

