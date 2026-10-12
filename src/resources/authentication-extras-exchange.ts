import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authErrorModelSchema, type AuthErrorModel } from "../models/auth-error-model.js";
import { authSchema, type Auth } from "../models/auth.js";
import {
  oauthAccessTokenRequestSchema,
  type OauthAccessTokenRequest,
} from "../models/oauth-access-token-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to exchange authentication resources.
 */
export class AuthenticationExtrasExchange {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Exchange an authorization code for an access token
   *
   * @remarks
   * This method exchanges an OAuth authorization code for an OAuth access token.
   *
   * @returns The authorization code was exchanged.
   *
   * @throws {@link AuthenticationExtrasExchange.ExchangeAuthCodeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exchangeAuthCode(
    request: AuthenticationExtrasExchange.ExchangeAuthCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<Auth, AuthenticationExtrasExchange.ExchangeAuthCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/access_token"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class ExchangeAuthCodeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"authErrorModel", AuthErrorModel>>;

    static readonly errors: ErrorDecoders<ExchangeAuthCodeError> = [
      { on: 400, kind: "authErrorModel", decode: { kind: "json", schema: authErrorModelSchema } },
    ];
  }
}
