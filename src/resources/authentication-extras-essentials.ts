import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authSchema, type Auth } from "../models/auth.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with authentication.
 */
export class AuthenticationExtrasEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Revoke the current access token
   *
   * @remarks
   * This method revokes the access token that the requesting app is currently using. The token must
   * be of the OAuth 2 type.
   *
   * @returns The token was revoked.
   *
   * @throws {@link AuthenticationExtrasEssentials.DeleteTokenError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteToken(
    options?: RequestOptions,
  ): ApiPromise<undefined, AuthenticationExtrasEssentials.DeleteTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/tokens"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthenticationExtrasEssentials.DeleteTokenError,
      },
      options,
    );
  }

  /**
   * Verify an OAuth 2 access token
   *
   * @remarks
   * This method verifies that an OAuth 2 access token exists.
   *
   * @returns The token was verified.
   *
   * @throws {@link AuthenticationExtrasEssentials.VerifyTokenError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyToken(options?: RequestOptions): ApiPromise<Auth, AuthenticationExtrasEssentials.VerifyTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth/verify"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [],
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
  export class DeleteTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteTokenError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export class VerifyTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<VerifyTokenError> = [
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
