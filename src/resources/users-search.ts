import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort13Schema, type Sort13 } from "../models/sort13.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to search for users.
 */
export class UsersSearch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search for users
   *
   * @remarks
   * This method returns user search results.
   *
   * @returns The search results were returned.
   *
   * @throws {@link UsersSearch.SearchUsersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchUsers(
    request: UsersSearch.SearchUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, UsersSearch.SearchUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort13Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: UsersSearch.SearchUsersError,
      },
      options,
    );
  }
}

export namespace UsersSearch {
  export type SearchUsersRequest = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     *  * `followers` - Sort the results by number of followers.
     *  * `relevant` - Sort the results by relevance.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort13;
  };

  export class SearchUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<SearchUsersError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
