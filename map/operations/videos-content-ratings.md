<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosContentRatings — operations

Accessor: `client.videosContentRatings` · Source: `src/resources/videos-content-ratings.ts` · 1 operation · Request types: namespace `VideosContentRatings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getContentRatings

- **Signature**: `getContentRatings(options?: RequestOptions): ApiPromise<ContentRatingConnection, ApiError>`
- **Wire**: `GET /contentratings`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContentRatingConnection`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentRatingConnection` | `contentRatingConnectionSchema` | `src/models/content-rating-connection.ts` |

