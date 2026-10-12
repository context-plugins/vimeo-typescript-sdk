import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort35Schema, type Sort35 } from "../models/sort35.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage portfolio videos.
 */
export class PortfoliosVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video to a portfolio
   *
   * @remarks
   * This method adds a video to the specified portfolio belonging to the authenticated user.
   *
   * @returns The video was added.
   *
   * @throws {@link PortfoliosVideos.AddVideoToPortfolioError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToPortfolio(
    request: PortfoliosVideos.AddVideoToPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.AddVideoToPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.AddVideoToPortfolioError,
      },
      options,
    );
  }

  /**
   * Add a video to a portfolio
   *
   * @remarks
   * This method adds a video to the specified portfolio belonging to the authenticated user.
   *
   * @returns The video was added.
   *
   * @throws {@link PortfoliosVideos.AddVideoToPortfolioAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToPortfolioAlt1(
    request: PortfoliosVideos.AddVideoToPortfolioAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.AddVideoToPortfolioAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.AddVideoToPortfolioAlt1Error,
      },
      options,
    );
  }

  /**
   * Remove a video from a portfolio
   *
   * @remarks
   * This method removes a video from the specified portfolio belonging to the authenticated user.
   *
   * @returns The video was removed.
   *
   * @throws {@link PortfoliosVideos.DeleteVideoFromPortfolioError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromPortfolio(
    request: PortfoliosVideos.DeleteVideoFromPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.DeleteVideoFromPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.DeleteVideoFromPortfolioError,
      },
      options,
    );
  }

  /**
   * Remove a video from a portfolio
   *
   * @remarks
   * This method removes a video from the specified portfolio belonging to the authenticated user.
   *
   * @returns The video was removed.
   *
   * @throws {@link PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromPortfolioAlt1(
    request: PortfoliosVideos.DeleteVideoFromPortfolioAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific video in a portfolio
   *
   * @remarks
   * This method returns a single video from the specified portfolio belonging to the authenticated
   * user.
   *
   * @returns The video was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioVideo(
    request: PortfoliosVideos.GetPortfolioVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific video in a portfolio
   *
   * @remarks
   * This method returns a single video from the specified portfolio belonging to the authenticated
   * user.
   *
   * @returns The video was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioVideoAlt1(
    request: PortfoliosVideos.GetPortfolioVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a portfolio
   *
   * @remarks
   * This method returns every video from the specified portfolio belonging to the authenticated
   * user.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioVideos(
    request: PortfoliosVideos.GetPortfolioVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort35Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a portfolio
   *
   * @remarks
   * This method returns every video from the specified portfolio belonging to the authenticated
   * user.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioVideosAlt1(
    request: PortfoliosVideos.GetPortfolioVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/portfolios/{portfolio_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portfolio_id", value: request.portfolioId, schema: s.float64() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort35Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace PortfoliosVideos {
  export type AddVideoToPortfolioRequest = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToPortfolioError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<AddVideoToPortfolioError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoToPortfolioAlt1Request = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToPortfolioAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<AddVideoToPortfolioAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromPortfolioRequest = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoFromPortfolioError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoFromPortfolioError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromPortfolioAlt1Request = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoFromPortfolioAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoFromPortfolioAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetPortfolioVideoRequest = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type GetPortfolioVideoAlt1Request = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type GetPortfolioVideosRequest = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The ID of the user. */
    userId: number;
    /** The page that contains the video URI. */
    containingUri?: string;
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
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `default` - Use the default sorting method.
     *  * `likes` - Sort the results by number of likes.
     *  * `manual` - Sort the results by their user-specified order.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort35;
  };

  export type GetPortfolioVideosAlt1Request = {
    /** The ID of the portfolio. */
    portfolioId: number;
    /** The page that contains the video URI. */
    containingUri?: string;
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
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `default` - Use the default sorting method.
     *  * `likes` - Sort the results by number of likes.
     *  * `manual` - Sort the results by their user-specified order.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort35;
  };
}
