import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import { categorySchema, type Category } from "../models/category.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filterSchema, type Filter } from "../models/filter.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort6Schema, type Sort6 } from "../models/sort6.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import {
  videosCategoriesRequestSchema,
  type VideosCategoriesRequest,
} from "../models/videos-categories-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with videos in a category.
 */
export class CategoriesVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a specific video in a category
   *
   * @remarks
   * This method returns a single video in the specified category. You can use this method to
   * determine whether the video belongs to the category.
   *
   * @returns The video was returned.
   *
   * @throws {@link CategoriesVideos.CheckCategoryForVideoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkCategoryForVideo(
    request: CategoriesVideos.CheckCategoryForVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, CategoriesVideos.CheckCategoryForVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/categories/{category}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: CategoriesVideos.CheckCategoryForVideoError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a category
   *
   * @remarks
   * This method returns every video that belongs to the specified category.
   *
   * @returns The videos were returned.
   *
   * @throws {@link CategoriesVideos.GetCategoryVideosError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategoryVideos(
    request: CategoriesVideos.GetCategoryVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, CategoriesVideos.GetCategoryVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/categories/{category}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filterSchema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort6Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: CategoriesVideos.GetCategoryVideosError,
      },
      options,
    );
  }

  /**
   * Get all the categories to which a video belongs
   *
   * @remarks
   * This method returns every category that contains the specified video.
   *
   * @returns The categories were returned.
   *
   * @throws {@link CategoriesVideos.GetVideoCategoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoCategories(
    request: CategoriesVideos.GetVideoCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, CategoriesVideos.GetVideoCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: CategoriesVideos.GetVideoCategoriesError,
      },
      options,
    );
  }

  /**
   * Set categories for a video
   *
   * @remarks
   * This method sets multiple categories and subcategories for the specified video. Include the
   * categories as a JSON block in the body of the request using the **category** field, like this:
   * `[{ "category": "Tech" }, { "category": "Music" }]`. The authenticated user must have edit
   * access to the video. For more information on batch requests like this one, see [Using Common
   * Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
   *
   * @returns The categories were set.
   *
   * @throws {@link CategoriesVideos.SuggestVideoCategoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  suggestVideoCategory(
    request: CategoriesVideos.SuggestVideoCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, CategoriesVideos.SuggestVideoCategoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosCategoriesRequestSchema },
      },
      {
        success: { kind: "json", schema: categorySchema },
        errorFactory: CategoriesVideos.SuggestVideoCategoryError,
      },
      options,
    );
  }
}

export namespace CategoriesVideos {
  export type CheckCategoryForVideoRequest = {
    /** The name of the category. */
    category: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckCategoryForVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckCategoryForVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCategoryVideosRequest = {
    /** The name of the category. */
    category: string;
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
     *  * `conditional_featured` - Return featured videos.
     *  * `embeddable` - Return embeddable videos.
     */
    filter?: Filter;
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
     *  * `date` - Sort the results by date.
     *  * `duration` - Sort the results by duration.
     *  * `featured` - Sort the results by featured status.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     *  * `relevant` - Sort the results by relevance.
     */
    sort?: Sort6;
  };

  export class GetCategoryVideosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCategoryVideosError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCategoriesRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVideoCategoriesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoCategoriesError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SuggestVideoCategoryRequest = {
    /** The ID of the video. */
    videoId: number;
    body: VideosCategoriesRequest;
  };

  export class SuggestVideoCategoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<SuggestVideoCategoryError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
