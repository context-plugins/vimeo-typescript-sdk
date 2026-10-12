import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { filter7Schema, type Filter7 } from "../models/filter7.js";
import { languageConnectionSchema, type LanguageConnection } from "../models/language-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with video languages.
 */
export class VideosLanguages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all languages
   *
   * @remarks
   * This method returns all available video languages.
   *
   * @returns The languages were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLanguages(
    request: VideosLanguages.GetLanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<LanguageConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/languages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter7Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: languageConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideosLanguages {
  export type GetLanguagesRequest = {
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `audiotracks` - Return languages that can be used for audio tracks.
     *  * `texttracks` - Return languages that can be used for text tracks.
     */
    filter?: Filter7;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };
}
