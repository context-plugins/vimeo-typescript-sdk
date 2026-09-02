<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosCreativeCommons — operations

Accessor: `client.videosCreativeCommons` · Source: `src/resources/videos-creative-commons.ts` · 1 operation · Request types: namespace `VideosCreativeCommons`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCcLicenses

- **Signature**: `getCcLicenses(request: VideosCreativeCommons.GetCcLicensesRequest, options?: RequestOptions): ApiPromise<CreativeCommonsConnection, ResponseError>`
- **Wire**: `GET /creativecommons`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreativeCommonsConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosCreativeCommons.GetCcLicensesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreativeCommonsConnection` | `creativeCommonsConnectionSchema` | `src/models/creative-commons-connection.ts` |

