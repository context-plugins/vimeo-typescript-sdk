<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationExtrasConvert — operations

Accessor: `client.authenticationExtrasConvert` · Source: `src/resources/authentication-extras-convert.ts` · 1 operation · Request and error types: namespace `AuthenticationExtrasConvert`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### convertAccessToken

- **Signature**: `convertAccessToken(request: AuthenticationExtrasConvert.ConvertAccessTokenRequest, options?: RequestOptions): ApiPromise<Auth, AuthenticationExtrasConvert.ConvertAccessTokenError>`
- **Wire**: `POST /oauth/authorize/vimeo_oauth1`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Auth`
- **Error**: `AuthenticationExtrasConvert.ConvertAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authErrorModel"` [400] `AuthErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationExtrasConvert.ConvertAccessTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthAuthorizeVimeoOauth1Request` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthAuthorizeVimeoOauth1Request` | `oauthAuthorizeVimeoOauth1RequestSchema` | `src/models/oauth-authorize-vimeo-oauth1-request.ts` |
| `Auth` | `authSchema` | `src/models/auth.ts` |
| `AuthErrorModel` | `authErrorModelSchema` | `src/models/auth-error-model.ts` |

