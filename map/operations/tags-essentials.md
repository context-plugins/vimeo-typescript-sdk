<!-- Generated file — do not edit; regenerated with the SDK. -->

# TagsEssentials — operations

Accessor: `client.tagsEssentials` · Source: `src/resources/tags-essentials.ts` · 1 operation · Request types: namespace `TagsEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTag

- **Signature**: `getTag(request: TagsEssentials.GetTagRequest, options?: RequestOptions): ApiPromise<Tag, ApiError>`
- **Wire**: `GET /tags/{word}`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tag`
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TagsEssentials.GetTagRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Tag` | `tagSchema` | `src/models/tag.ts` |

