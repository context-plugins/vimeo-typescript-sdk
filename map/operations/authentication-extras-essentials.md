<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationExtrasEssentials — operations

Accessor: `client.authenticationExtrasEssentials` · Source: `src/resources/authentication-extras-essentials.ts` · 2 operations · Request and error types: namespace `AuthenticationExtrasEssentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteToken

- **Signature**: `deleteToken(options?: RequestOptions): ApiPromise<undefined, AuthenticationExtrasEssentials.DeleteTokenError>`
- **Wire**: `DELETE /tokens`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AuthenticationExtrasEssentials.DeleteTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [400] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

### verifyToken

- **Signature**: `verifyToken(options?: RequestOptions): ApiPromise<Auth, AuthenticationExtrasEssentials.VerifyTokenError>`
- **Wire**: `GET /oauth/verify`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Auth`
- **Error**: `AuthenticationExtrasEssentials.VerifyTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"legacyError"` [401] `LegacyError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Auth` | `authSchema` | `src/models/auth.ts` |
| `LegacyError` | `legacyErrorSchema` | `src/models/legacy-error.ts` |

