import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { activity31ConnectionSchema, type Activity31Connection } from "../models/activity31-connection.js";
import { errorSchema, type Error } from "../models/error.js";
import { type33Schema, type Type33 } from "../models/type33.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with user feeds.
 */
export class UsersFeeds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all the videos in the user's feed
   *
   * @remarks
   * This method returns every video in the authenticated user's feed.
   *
   * @returns The videos were returned.
   *
   * @throws {@link UsersFeeds.GetFeedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeed(
    request: UsersFeeds.GetFeedRequest,
    options?: RequestOptions,
  ): ApiPromise<Activity31Connection, UsersFeeds.GetFeedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/feed"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type33Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activity31ConnectionSchema },
        errorFactory: UsersFeeds.GetFeedError,
      },
      options,
    );
  }

  /**
   * Get all the videos in the user's feed
   *
   * @remarks
   * This method returns every video in the authenticated user's feed.
   *
   * @returns The videos were returned.
   *
   * @throws {@link UsersFeeds.GetFeedAlt1Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeedAlt1(
    request: UsersFeeds.GetFeedAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Activity31Connection, UsersFeeds.GetFeedAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/feed"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type33Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activity31ConnectionSchema },
        errorFactory: UsersFeeds.GetFeedAlt1Error,
      },
      options,
    );
  }
}

export namespace UsersFeeds {
  export type GetFeedRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The pagination offset. We recommend that you use the pagination links in the feed response
     * instead of working with this value directly. For more details, see our [pagination
     * documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).
     */
    offset?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The feed type.
     *
     * Option descriptions:
     *  * `appears` - Videos in which the user appears.
     *  * `category_featured` - Featured videos.
     *  * `channel` - Channel videos.
     *  * `facebook_feed` - Videos from the user's Facebook feed.
     *  * `following` - Videos from accounts that the user follows.
     *  * `group` - Group videos.
     *  * `likes` - Liked videos.
     *  * `ondemand_publish` - On Demand videos.
     *  * `share` - Shared videos.
     *  * `tagged_with` - Tagged videos.
     *  * `twitter_timeline` - Videos from the user's Twitter timeline.
     *  * `uploads` - Uploaded videos.
     */
    type?: Type33;
  };

  export class GetFeedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetFeedError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFeedAlt1Request = {
    /**
     * The pagination offset. We recommend that you use the pagination links in the feed response
     * instead of working with this value directly. For more details, see our [pagination
     * documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).
     */
    offset?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The feed type.
     *
     * Option descriptions:
     *  * `appears` - Videos in which the user appears.
     *  * `category_featured` - Featured videos.
     *  * `channel` - Channel videos.
     *  * `facebook_feed` - Videos from the user's Facebook feed.
     *  * `following` - Videos from accounts that the user follows.
     *  * `group` - Group videos.
     *  * `likes` - Liked videos.
     *  * `ondemand_publish` - On Demand videos.
     *  * `share` - Shared videos.
     *  * `tagged_with` - Tagged videos.
     *  * `twitter_timeline` - Videos from the user's Twitter timeline.
     *  * `uploads` - Uploaded videos.
     */
    type?: Type33;
  };

  export class GetFeedAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetFeedAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
