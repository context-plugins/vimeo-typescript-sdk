import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with a user's Watch Later queue.
 */
export class WatchLaterQueueEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video to the user's Watch Later queue
   *
   * @remarks
   * This method adds the specified video to the authenticated user's Watch Later queue.
   *
   * @returns The video was added.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToWatchLater(
    request: WatchLaterQueueEssentials.AddVideoToWatchLaterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add a video to the user's Watch Later queue
   *
   * @remarks
   * This method adds the specified video to the authenticated user's Watch Later queue.
   *
   * @returns The video was added.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToWatchLaterAlt1(
    request: WatchLaterQueueEssentials.AddVideoToWatchLaterAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Check if the user has added a video to their Watch Later queue
   *
   * @remarks
   * This method checks the authenticated user's Watch Later queue for the specified video.
   *
   * @returns The video is in the user's Watch Later queue.
   *
   * @throws {@link WatchLaterQueueEssentials.CheckWatchLaterQueueError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkWatchLaterQueue(
    request: WatchLaterQueueEssentials.CheckWatchLaterQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, WatchLaterQueueEssentials.CheckWatchLaterQueueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: WatchLaterQueueEssentials.CheckWatchLaterQueueError,
      },
      options,
    );
  }

  /**
   * Check if the user has added a video to their Watch Later queue
   *
   * @remarks
   * This method checks the authenticated user's Watch Later queue for the specified video.
   *
   * @returns The video is in the user's Watch Later queue.
   *
   * @throws {@link WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkWatchLaterQueueAlt1(
    request: WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error,
      },
      options,
    );
  }

  /**
   * Remove a video from the user's Watch Later queue
   *
   * @remarks
   * This method removes the specified video from the authenticated user's Watch Later queue.
   *
   * @returns The video was removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromWatchLater(
    request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a video from the user's Watch Later queue
   *
   * @remarks
   * This method removes the specified video from the authenticated user's Watch Later queue.
   *
   * @returns The video was removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromWatchLaterAlt1(
    request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the videos in the user's Watch Later queue
   *
   * @remarks
   * This method returns every video from the authenticated user's Watch Later queue.
   *
   * @returns The videos were returned.
   *
   * @throws {@link WatchLaterQueueEssentials.GetWatchLaterQueueError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWatchLaterQueue(
    request: WatchLaterQueueEssentials.GetWatchLaterQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/watchlater"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: WatchLaterQueueEssentials.GetWatchLaterQueueError,
      },
      options,
    );
  }

  /**
   * Get all the videos in the user's Watch Later queue
   *
   * @remarks
   * This method returns every video from the authenticated user's Watch Later queue.
   *
   * @returns The videos were returned.
   *
   * @throws {@link WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWatchLaterQueueAlt1(
    request: WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/watchlater"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error,
      },
      options,
    );
  }
}

export namespace WatchLaterQueueEssentials {
  export type AddVideoToWatchLaterRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type AddVideoToWatchLaterAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export type CheckWatchLaterQueueRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckWatchLaterQueueError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckWatchLaterQueueError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckWatchLaterQueueAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckWatchLaterQueueAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckWatchLaterQueueAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromWatchLaterRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type DeleteVideoFromWatchLaterAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export type GetWatchLaterQueueRequest = {
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
     *  * `embeddable` - Return embeddable videos.
     */
    filter?: Filter3;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
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
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by date added.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetWatchLaterQueueError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error304", undefined>>;

    static readonly errors: ErrorDecoders<GetWatchLaterQueueError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type GetWatchLaterQueueAlt1Request = {
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
     *  * `embeddable` - Return embeddable videos.
     */
    filter?: Filter3;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
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
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by date added.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetWatchLaterQueueAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error304", undefined>>;

    static readonly errors: ErrorDecoders<GetWatchLaterQueueAlt1Error> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }
}
