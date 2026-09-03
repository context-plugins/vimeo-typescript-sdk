import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { authErrorModelSchema, type AuthErrorModel } from "../models/auth-error-model.js";
import { authSchema, type Auth } from "../models/auth.js";
import {
  oauthAccessTokenRequestSchema,
  type OauthAccessTokenRequest,
} from "../models/oauth-access-token-request.js";
import type { Servers } from "../servers.js";

export class AuthenticationExtrasExchange {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  exchangeAuthCode(
    request: AuthenticationExtrasExchange.ExchangeAuthCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<Auth, AuthenticationExtrasExchange.ExchangeAuthCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/oauth/access_token"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: oauthAccessTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: authSchema },
        errorFactory: AuthenticationExtrasExchange.ExchangeAuthCodeError,
      },
      options,
    );
  }
}

export namespace AuthenticationExtrasExchange {
  export type ExchangeAuthCodeRequest = {
    body: OauthAccessTokenRequest;
  };

  export class ExchangeAuthCodeError extends ResponseError<Declared<"authErrorModel", AuthErrorModel>> {
    static readonly errors: ErrorDecoders<ExchangeAuthCodeError> = [
      { on: 400, kind: "authErrorModel", decode: { kind: "json", schema: authErrorModelSchema } },
    ];
  }
}
