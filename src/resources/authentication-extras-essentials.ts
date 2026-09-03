import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { authSchema, type Auth } from "../models/auth.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

export class AuthenticationExtrasEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteToken(
    options?: RequestOptions,
  ): ApiPromise<undefined, AuthenticationExtrasEssentials.DeleteTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/tokens"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthenticationExtrasEssentials.DeleteTokenError,
      },
      options,
    );
  }

  verifyToken(options?: RequestOptions): ApiPromise<Auth, AuthenticationExtrasEssentials.VerifyTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/oauth/verify"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authSchema },
        errorFactory: AuthenticationExtrasEssentials.VerifyTokenError,
      },
      options,
    );
  }
}

export namespace AuthenticationExtrasEssentials {
  export class DeleteTokenError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteTokenError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export class VerifyTokenError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<VerifyTokenError> = [
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
