<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationExtrasExchange — operations

Accessor: `client.authenticationExtrasExchange` · Source: `src/resources/authentication-extras-exchange.ts` · 1 operation · Request and error types: namespace `AuthenticationExtrasExchange`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `vimeo-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### exchangeAuthCode

- **Signature**: `exchangeAuthCode(request: AuthenticationExtrasExchange.ExchangeAuthCodeRequest, options?: RequestOptions): ApiPromise<Auth, AuthenticationExtrasExchange.ExchangeAuthCodeError>`
- **Wire**: `POST /oauth/access_token`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearer` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Auth`
- **Error**: `AuthenticationExtrasExchange.ExchangeAuthCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authErrorModel"` [400] `AuthErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationExtrasExchange.ExchangeAuthCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OauthAccessTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OauthAccessTokenRequest` | `oauthAccessTokenRequestSchema` | `src/models/oauth-access-token-request.ts` |
| `Auth` | `authSchema` | `src/models/auth.ts` |
| `AuthErrorModel` | `authErrorModelSchema` | `src/models/auth-error-model.ts` |

