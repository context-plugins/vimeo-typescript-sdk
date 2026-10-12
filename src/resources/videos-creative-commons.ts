import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  creativeCommonsConnectionSchema,
  type CreativeCommonsConnection,
} from "../models/creative-commons-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with Creative Commons licenses.
 */
export class VideosCreativeCommons {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all Creative Commons licenses
   *
   * @remarks
   * This method returns all available Creative Commons licenses.
   *
   * @returns The Creative Commons licenses were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCcLicenses(
    request: VideosCreativeCommons.GetCcLicensesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreativeCommonsConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/creativecommons"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creativeCommonsConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideosCreativeCommons {
  export type GetCcLicensesRequest = {
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };
}
