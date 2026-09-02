<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideosLanguages — operations

Accessor: `client.videosLanguages` · Source: `src/resources/videos-languages.ts` · 1 operation · Request types: namespace `VideosLanguages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getLanguages

- **Signature**: `getLanguages(request: VideosLanguages.GetLanguagesRequest, options?: RequestOptions): ApiPromise<LanguageConnection, ResponseError>`
- **Wire**: `GET /languages`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LanguageConnection`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideosLanguages.GetLanguagesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | — | `Filter7` | no |
| `page` | `query` | — | `number` | no |
| `perPage` | `query` | `per_page` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter7` | `filter7Schema` | `src/models/filter7.ts` |
| `LanguageConnection` | `languageConnectionSchema` | `src/models/language-connection.ts` |

