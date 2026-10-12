import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter25Schema, type Filter25 } from "../models/filter25.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with likes.
 */
export class LikesEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if the user has liked a video
   *
   * @remarks
   * This method checks if the authenticated user has liked the specified video.
   *
   * @returns The user has liked the video.
   *
   * @throws {@link LikesEssentials.CheckIfUserLikedVideoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserLikedVideo(
    request: LikesEssentials.CheckIfUserLikedVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.CheckIfUserLikedVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/likes/{video_id}"),
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
        success: { kind: "empty" },
        errorFactory: LikesEssentials.CheckIfUserLikedVideoError,
      },
      options,
    );
  }

  /**
   * Check if the user has liked a video
   *
   * @remarks
   * This method checks if the authenticated user has liked the specified video.
   *
   * @returns The user has liked the video.
   *
   * @throws {@link LikesEssentials.CheckIfUserLikedVideoAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserLikedVideoAlt1(
    request: LikesEssentials.CheckIfUserLikedVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.CheckIfUserLikedVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/likes/{video_id}"),
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
        success: { kind: "empty" },
        errorFactory: LikesEssentials.CheckIfUserLikedVideoAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the videos that the user has liked
   *
   * @remarks
   * This method returns every video that the authenticated user has liked.
   *
   * @returns The videos were returned.
   *
   * @throws {@link LikesEssentials.GetLikesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLikes(
    request: LikesEssentials.GetLikesRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LikesEssentials.GetLikesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
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
        errorFactory: LikesEssentials.GetLikesError,
      },
      options,
    );
  }

  /**
   * Get all the videos that the user has liked
   *
   * @remarks
   * This method returns every video that the authenticated user has liked.
   *
   * @returns The videos were returned.
   *
   * @throws {@link LikesEssentials.GetLikesAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLikesAlt1(
    request: LikesEssentials.GetLikesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LikesEssentials.GetLikesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
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
        errorFactory: LikesEssentials.GetLikesAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the users who have liked a video
   *
   * @remarks
   * This method returns every user who has liked the specified video.
   *
   * @returns The users were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoLikes(
    request: LikesEssentials.GetVideoLikesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the users who have liked a video
   *
   * @remarks
   * This method returns every user who has liked the specified video.
   *
   * @returns The users were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoLikesAlt1(
    request: LikesEssentials.GetVideoLikesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the users who have liked a video on an On Demand page
   *
   * @remarks
   * This method returns every user who has liked the specified video on an On Demand page.
   *
   * @returns The users were returned.
   *
   * @throws {@link LikesEssentials.GetVodLikesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodLikes(
    request: LikesEssentials.GetVodLikesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, LikesEssentials.GetVodLikesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter25Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: LikesEssentials.GetVodLikesError,
      },
      options,
    );
  }

  /**
   * Cause the user to like a video
   *
   * @remarks
   * This method causes the authenticated user to like the specified video. The user can't like
   * their own video.
   *
   * @returns The video was liked.
   *
   * @throws {@link LikesEssentials.LikeVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  likeVideo(
    request: LikesEssentials.LikeVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.LikeVideoError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/likes/{video_id}"),
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
        errorFactory: LikesEssentials.LikeVideoError,
      },
      options,
    );
  }

  /**
   * Cause the user to like a video
   *
   * @remarks
   * This method causes the authenticated user to like the specified video. The user can't like
   * their own video.
   *
   * @returns The video was liked.
   *
   * @throws {@link LikesEssentials.LikeVideoAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  likeVideoAlt1(
    request: LikesEssentials.LikeVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.LikeVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/likes/{video_id}"),
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
        errorFactory: LikesEssentials.LikeVideoAlt1Error,
      },
      options,
    );
  }

  /**
   * Cause the user to unlike a video
   *
   * @remarks
   * This method causes the authenticated user to unlike the specified video.
   *
   * @returns The video was unliked.
   *
   * @throws {@link LikesEssentials.UnlikeVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlikeVideo(
    request: LikesEssentials.UnlikeVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.UnlikeVideoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/likes/{video_id}"),
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
        errorFactory: LikesEssentials.UnlikeVideoError,
      },
      options,
    );
  }

  /**
   * Cause the user to unlike a video
   *
   * @remarks
   * This method causes the authenticated user to unlike the specified video.
   *
   * @returns The video was unliked.
   *
   * @throws {@link LikesEssentials.UnlikeVideoAlt1Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlikeVideoAlt1(
    request: LikesEssentials.UnlikeVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.UnlikeVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/likes/{video_id}"),
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
        errorFactory: LikesEssentials.UnlikeVideoAlt1Error,
      },
      options,
    );
  }
}

export namespace LikesEssentials {
  export type CheckIfUserLikedVideoRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckIfUserLikedVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserLikedVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserLikedVideoAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckIfUserLikedVideoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserLikedVideoAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetLikesRequest = {
    /** The ID of the user. */
    userId: number;
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
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetLikesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetLikesError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLikesAlt1Request = {
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
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetLikesAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetLikesAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVideoLikesRequest = {
    /** The ID of the video. */
    videoId: number;
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
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by join date.
     */
    sort?: Sort8;
  };

  export type GetVideoLikesAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
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
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by join date.
     */
    sort?: Sort8;
  };

  export type GetVodLikesRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
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
     *  * `extra` - Consider extra content only.
     *  * `main` - Consider main content only.
     *  * `trailer` - Consider trailer content only.
     */
    filter?: Filter25;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by join date.
     */
    sort?: Sort8;
  };

  export class GetVodLikesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetVodLikesError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LikeVideoRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class LikeVideoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<LikeVideoError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type LikeVideoAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export class LikeVideoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<LikeVideoAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnlikeVideoRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class UnlikeVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<UnlikeVideoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnlikeVideoAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export class UnlikeVideoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<UnlikeVideoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
