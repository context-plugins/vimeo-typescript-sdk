import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth } from "../core/index.js";
import { authSchema, type Auth } from "../models/auth.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  oauthAuthorizeClientRequestSchema,
  type OauthAuthorizeClientRequest,
} from "../models/oauth-authorize-client-request.js";
import type { Servers } from "../servers.js";

export class AuthenticationExtrasAuthenticate {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  clientAuth(
    request: AuthenticationExtrasAuthenticate.ClientAuthRequest,
    options?: RequestOptions,
  ): ApiPromise<Auth, AuthenticationExtrasAuthenticate.ClientAuthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/oauth/authorize/client"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: oauthAuthorizeClientRequestSchema },
      },
      {
        success: { kind: "json", schema: authSchema },
        errorFactory: AuthenticationExtrasAuthenticate.ClientAuthError,
      },
      options,
    );
  }
}

export namespace AuthenticationExtrasAuthenticate {
  export type ClientAuthRequest = {
    body: OauthAuthorizeClientRequest;
  };

  export class ClientAuthError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<ClientAuthError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
