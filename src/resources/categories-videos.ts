import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class CategoriesVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkCategoryForVideo(
    request: CategoriesVideos.CheckCategoryForVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, CategoriesVideos.CheckCategoryForVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/categories/{category}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: CategoriesVideos.CheckCategoryForVideoError,
      },
      options,
    );
  }

  getCategoryVideos(
    request: CategoriesVideos.GetCategoryVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, CategoriesVideos.GetCategoryVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/categories/{category}/videos"),
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
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort6Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: CategoriesVideos.GetCategoryVideosError,
      },
      options,
    );
  }

  getVideoCategories(
    request: CategoriesVideos.GetVideoCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, CategoriesVideos.GetVideoCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: CategoriesVideos.GetVideoCategoriesError,
      },
      options,
    );
  }

  suggestVideoCategory(
    request: CategoriesVideos.SuggestVideoCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, CategoriesVideos.SuggestVideoCategoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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
    category: string;
    videoId: number;
  };

  export class CheckCategoryForVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckCategoryForVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCategoryVideosRequest = {
    category: string;
    direction?: Direction;
    filter?: Filter;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort6;
  };

  export class GetCategoryVideosError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCategoryVideosError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCategoriesRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVideoCategoriesError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoCategoriesError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SuggestVideoCategoryRequest = {
    videoId: number;
    body: VideosCategoriesRequest;
  };

  export class SuggestVideoCategoryError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<SuggestVideoCategoryError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
