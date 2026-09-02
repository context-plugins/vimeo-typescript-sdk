<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationExtrasAuthenticate — operations

Accessor: `client.authenticationExtrasAuthenticate` · Source: `src/resources/authentication-extras-authenticate.ts` · 1 operation · Request and error types: namespace `AuthenticationExtrasAuthenticate`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### clientAuth

- **Signature**: `clientAuth(request: AuthenticationExtrasAuthenticate.ClientAuthRequest, options?: RequestOptions): ApiPromise<Auth, AuthenticationExtrasAuthenticate.ClientAuthError>`
- **Wire**: `POST /oauth/authorize/client`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Auth`
- **Error**: `AuthenticationExtrasAuthenticate.ClientAuthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationExtrasAuthenticate.ClientAuthRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthAuthorizeClientRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthAuthorizeClientRequest` | `oauthAuthorizeClientRequestSchema` | `src/models/oauth-authorize-client-request.ts` |
| `Auth` | `authSchema` | `src/models/auth.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

