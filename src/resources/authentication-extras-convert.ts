import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth } from "../core/index.js";
import { authErrorModelSchema, type AuthErrorModel } from "../models/auth-error-model.js";
import { authSchema, type Auth } from "../models/auth.js";
import {
  oauthAuthorizeVimeoOauth1RequestSchema,
  type OauthAuthorizeVimeoOauth1Request,
} from "../models/oauth-authorize-vimeo-oauth1-request.js";
import type { Servers } from "../servers.js";

export class AuthenticationExtrasConvert {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  convertAccessToken(
    request: AuthenticationExtrasConvert.ConvertAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Auth, AuthenticationExtrasConvert.ConvertAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/oauth/authorize/vimeo_oauth1"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
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

  export class ConvertAccessTokenError extends ResponseError<Declared<"authErrorModel", AuthErrorModel>> {
    static readonly errors: ErrorDecoders<ConvertAccessTokenError> = [
      { on: 400, kind: "authErrorModel", decode: { kind: "json", schema: authErrorModelSchema } },
    ];
  }
}
