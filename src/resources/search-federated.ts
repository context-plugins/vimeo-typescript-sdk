import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  federatedSearchItemsConnectionSchema,
  type FederatedSearchItemsConnection,
} from "../models/federated-search-items-connection.js";
import { filter30Schema, type Filter30 } from "../models/filter30.js";
import { sort46Schema, type Sort46 } from "../models/sort46.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with federated searches.
 */
export class SearchFederated {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the federated search results of the user's items
   *
   * @remarks
   * This method returns the federated search results of the authenticated user's videos and folders
   * according to a search query.
   *
   * If no query is provided, the method returns items sorted by the most recent user action.
   *
   * @returns The federated search results were returned.
   *
   * @throws {@link SearchFederated.FederatedSearchUserItemsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  federatedSearchUserItems(
    request: SearchFederated.FederatedSearchUserItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search/{user_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter30Schema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "modified_end_date", value: request.modifiedEndDate, schema: s.optional(s.string()) },
          { name: "modified_start_date", value: request.modifiedStartDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort46Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: federatedSearchItemsConnectionSchema },
        errorFactory: SearchFederated.FederatedSearchUserItemsError,
      },
      options,
    );
  }

  /**
   * Get the federated search results of the user's items
   *
   * @remarks
   * This method returns the federated search results of the authenticated user's videos and folders
   * according to a search query.
   *
   * If no query is provided, the method returns items sorted by the most recent user action.
   *
   * @returns The federated search results were returned.
   *
   * @throws {@link SearchFederated.FederatedSearchUserItemsAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  federatedSearchUserItemsAlt1(
    request: SearchFederated.FederatedSearchUserItemsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/search/{workspace_uuid}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "workspace_uuid", value: request.workspaceUuid, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter30Schema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "modified_end_date", value: request.modifiedEndDate, schema: s.optional(s.string()) },
          { name: "modified_start_date", value: request.modifiedStartDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort46Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: federatedSearchItemsConnectionSchema },
        errorFactory: SearchFederated.FederatedSearchUserItemsAlt1Error,
      },
      options,
    );
  }
}

export namespace SearchFederated {
  export type FederatedSearchUserItemsRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `video` - Return videos.
     */
    filter?: Filter30;
    /**
     * A comma-separated list of privacy settings to filter the results by. Possible values include
     * `unlisted` for videos that are accessible but not searchable from Vimeo, `password` for
     * videos on Vimeo that anyone can access with the correct password, `hide-from-vimeo` for
     * videos that don't appear on Vimeo, `private` for videos on Vimeo that only their owner can
     * access, and `public` for videos on Vimeo that anyone can access. By default, all privacy
     * settings are considered.
     */
    filterPrivacy?: string;
    /** The inclusive end date of the range. */
    modifiedEndDate?: string;
    /**
     * The inclusive start date of the range. This value must be earlier than the modified end date.
     */
    modifiedStartDate?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * A comma-separated list of fields to query over. The default value is
     * `title,description,chapters,tags`.
     */
    queryFields?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     *  * `default` - Use the default sorting order.
     *  * `duration` - Sort the results by duration, where available.
     *  * `folder_path` - Sort the results by the hierarchy of folders.
     *  * `last_user_action_event_date` - Sort the results by most recent user interaction.
     */
    sort?: Sort46;
  };

  export class FederatedSearchUserItemsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<FederatedSearchUserItemsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FederatedSearchUserItemsAlt1Request = {
    /** The UUID of the workspace. */
    workspaceUuid: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `video` - Return videos.
     */
    filter?: Filter30;
    /**
     * A comma-separated list of privacy settings to filter the results by. Possible values include
     * `unlisted` for videos that are accessible but not searchable from Vimeo, `password` for
     * videos on Vimeo that anyone can access with the correct password, `hide-from-vimeo` for
     * videos that don't appear on Vimeo, `private` for videos on Vimeo that only their owner can
     * access, and `public` for videos on Vimeo that anyone can access. By default, all privacy
     * settings are considered.
     */
    filterPrivacy?: string;
    /** The inclusive end date of the range. */
    modifiedEndDate?: string;
    /**
     * The inclusive start date of the range. This value must be earlier than the modified end date.
     */
    modifiedStartDate?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * A comma-separated list of fields to query over. The default value is
     * `title,description,chapters,tags`.
     */
    queryFields?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     *  * `default` - Use the default sorting order.
     *  * `duration` - Sort the results by duration, where available.
     *  * `folder_path` - Sort the results by the hierarchy of folders.
     *  * `last_user_action_event_date` - Sort the results by most recent user interaction.
     */
    sort?: Sort46;
  };

  export class FederatedSearchUserItemsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<FederatedSearchUserItemsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
