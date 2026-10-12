import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  channelsVideosCreditsRequestSchema,
  type ChannelsVideosCreditsRequest,
} from "../models/channels-videos-credits-request.js";
import { creditConnectionSchema, type CreditConnection } from "../models/credit-connection.js";
import { creditSchema, type Credit } from "../models/credit.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { videosCreditsRequestSchema, type VideosCreditsRequest } from "../models/videos-credits-request.js";
import {
  videosCreditsRequest1Schema,
  type VideosCreditsRequest1,
} from "../models/videos-credits-request1.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with credited users in videos.
 */
export class VideosCredits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Credit a user in a video
   *
   * @remarks
   * This method adds a user credit to the specified video.
   *
   * @returns The credit was added.
   *
   * @throws {@link VideosCredits.AddVideoCreditError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoCredit(
    request: VideosCredits.AddVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.AddVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/credits"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosCreditsRequestSchema },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.AddVideoCreditError,
      },
      options,
    );
  }

  /**
   * Credit a user in a video
   *
   * @remarks
   * This method adds a user credit to the specified video.
   *
   * @returns The credit was added.
   *
   * @throws {@link VideosCredits.AddVideoCreditAlt1Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoCreditAlt1(
    request: VideosCredits.AddVideoCreditAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.AddVideoCreditAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/credits"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsVideosCreditsRequestSchema },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.AddVideoCreditAlt1Error,
      },
      options,
    );
  }

  /**
   * Get users who can be credited on a video
   *
   * @remarks
   * This method returns the users who can be credited on the specified video.
   *
   * @returns The users who can be credited were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  availableUsers(
    request: VideosCredits.AvailableUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/credits/available_users"),
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
          { name: "query", value: request.query, schema: s.optional(s.string()) },
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
   * Delete the credit for a user in a video
   *
   * @remarks
   * This method deletes the specified user credit from a video. The authenticated user must be the
   * creator of the credit or the credited user.
   *
   * @returns The credit was deleted.
   *
   * @throws {@link VideosCredits.DeleteVideoCreditError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoCredit(
    request: VideosCredits.DeleteVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosCredits.DeleteVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/credits/{credit_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "credit_id", value: request.creditId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosCredits.DeleteVideoCreditError,
      },
      options,
    );
  }

  /**
   * Edit the credit for a user in a video
   *
   * @remarks
   * This method edits the specified user credit in a video.
   *
   * @returns The credit was edited.
   *
   * @throws {@link VideosCredits.EditVideoCreditError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVideoCredit(
    request: VideosCredits.EditVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.EditVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/credits/{credit_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "credit_id", value: request.creditId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosCreditsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.EditVideoCreditError,
      },
      options,
    );
  }

  /**
   * Get a specific credited user in a video
   *
   * @remarks
   * This method returns a single credited user in a video.
   *
   * @returns The credit was returned.
   *
   * @throws {@link VideosCredits.GetVideoCreditError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoCredit(
    request: VideosCredits.GetVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.GetVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/credits/{credit_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "credit_id", value: request.creditId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.GetVideoCreditError,
      },
      options,
    );
  }

  /**
   * Get all the credited users in a video
   *
   * @remarks
   * This method returns every credited user in a video.
   *
   * @returns The credited users were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoCredits(
    request: VideosCredits.GetVideoCreditsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/credits"),
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
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the credited users in a video
   *
   * @remarks
   * This method returns every credited user in a video.
   *
   * @returns The credited users were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoCreditsAlt1(
    request: VideosCredits.GetVideoCreditsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<CreditConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/credits"),
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
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideosCredits {
  export type AddVideoCreditRequest = {
    /** The ID of the video. */
    videoId: number;
    body: VideosCreditsRequest;
  };

  export class AddVideoCreditError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoCreditError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoCreditAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    body: ChannelsVideosCreditsRequest;
  };

  export class AddVideoCreditAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoCreditAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AvailableUsersRequest = {
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
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date followed.
     */
    sort?: Sort8;
  };

  export type DeleteVideoCreditRequest = {
    /** The ID of the credit. */
    creditId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoCreditError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoCreditError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVideoCreditRequest = {
    /** The ID of the credit. */
    creditId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosCreditsRequest1;
  };

  export class EditVideoCreditError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditVideoCreditError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCreditRequest = {
    /** The ID of the credit. */
    creditId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetVideoCreditError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoCreditError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCreditsRequest = {
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
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     */
    sort?: Sort8;
  };

  export type GetVideoCreditsAlt1Request = {
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
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     */
    sort?: Sort8;
  };
}
