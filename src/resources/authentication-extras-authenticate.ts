import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authSchema, type Auth } from "../models/auth.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  oauthAuthorizeClientRequestSchema,
  type OauthAuthorizeClientRequest,
} from "../models/oauth-authorize-client-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to perform authentication.
 */
export class AuthenticationExtrasAuthenticate {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Authorize a client with OAuth
   *
   * @remarks
   * This method uses the OAuth protocol to authorize a client. For details on OAuth client
   * authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth
   * spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).
   *
   * @returns The authorization was successful.
   *
   * @throws {@link AuthenticationExtrasAuthenticate.ClientAuthError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientAuth(
    request: AuthenticationExtrasAuthenticate.ClientAuthRequest,
    options?: RequestOptions,
  ): ApiPromise<Auth, AuthenticationExtrasAuthenticate.ClientAuthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/authorize/client"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class ClientAuthError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<ClientAuthError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
