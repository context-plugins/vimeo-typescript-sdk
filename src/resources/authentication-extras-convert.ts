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
  oauthAuthorizeVimeoOauth1RequestSchema,
  type OauthAuthorizeVimeoOauth1Request,
} from "../models/oauth-authorize-vimeo-oauth1-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to convert authentication resources.
 */
export class AuthenticationExtrasConvert {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Convert an OAuth 1 access token to an OAuth 2 access token
   *
   * @remarks
   * This method exchanges a legacy Advanced API OAuth 1 token for an API v3 OAuth 2 token.
   *
   * @returns The token was converted.
   *
   * @throws {@link AuthenticationExtrasConvert.ConvertAccessTokenError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  convertAccessToken(
    request: AuthenticationExtrasConvert.ConvertAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Auth, AuthenticationExtrasConvert.ConvertAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/authorize/vimeo_oauth1"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oauthAuthorizeVimeoOauth1RequestSchema },
      },
      {
        success: { kind: "json", schema: authSchema },
        errorFactory: AuthenticationExtrasConvert.ConvertAccessTokenError,
      },
      options,
    );
  }
}

export namespace AuthenticationExtrasConvert {
  export type ConvertAccessTokenRequest = {
    body: OauthAuthorizeVimeoOauth1Request;
  };

  export class ConvertAccessTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"authErrorModel", AuthErrorModel>>;

    static readonly errors: ErrorDecoders<ConvertAccessTokenError> = [
      { on: 400, kind: "authErrorModel", decode: { kind: "json", schema: authErrorModelSchema } },
    ];
  }
}
