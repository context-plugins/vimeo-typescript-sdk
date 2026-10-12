<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiInformationEssentials — operations

Accessor: `client.apiInformationEssentials` · Source: `src/resources/api-information-essentials.ts` · 1 operation · Request types: namespace `ApiInformationEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEndpoints

- **Signature**: `getEndpoints(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VimeoApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

