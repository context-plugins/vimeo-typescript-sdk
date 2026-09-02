import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort35Schema, type Sort35 } from "../models/sort35.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class PortfoliosVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToPortfolio(
    request: PortfoliosVideos.AddVideoToPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.AddVideoToPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.AddVideoToPortfolioError,
      },
      options,
    );
  }

  addVideoToPortfolioAlt1(
    request: PortfoliosVideos.AddVideoToPortfolioAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.AddVideoToPortfolioAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.AddVideoToPortfolioAlt1Error,
      },
      options,
    );
  }

  deleteVideoFromPortfolio(
    request: PortfoliosVideos.DeleteVideoFromPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.DeleteVideoFromPortfolioError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.DeleteVideoFromPortfolioError,
      },
      options,
    );
  }

  deleteVideoFromPortfolioAlt1(
    request: PortfoliosVideos.DeleteVideoFromPortfolioAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PortfoliosVideos.DeleteVideoFromPortfolioAlt1Error,
      },
      options,
    );
  }

  getPortfolioVideo(
    request: PortfoliosVideos.GetPortfolioVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ResponseError> {
    return this.#rawClient.execute<Video, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPortfolioVideoAlt1(
    request: PortfoliosVideos.GetPortfolioVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, ResponseError> {
    return this.#rawClient.execute<Video, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/portfolios/{portfolio_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPortfolioVideos(
    request: PortfoliosVideos.GetPortfolioVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ResponseError> {
    return this.#rawClient.execute<VideoConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort35Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPortfolioVideosAlt1(
    request: PortfoliosVideos.GetPortfolioVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ResponseError> {
    return this.#rawClient.execute<VideoConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/portfolios/{portfolio_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portfolio_id", value: request.portfolioId, schema: s.number() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort35Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace PortfoliosVideos {
  export type AddVideoToPortfolioRequest = {
    portfolioId: number;
    userId: number;
    videoId: number;
  };

  export class AddVideoToPortfolioError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<AddVideoToPortfolioError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoToPortfolioAlt1Request = {
    portfolioId: number;
    videoId: number;
  };

  export class AddVideoToPortfolioAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<AddVideoToPortfolioAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromPortfolioRequest = {
    portfolioId: number;
    userId: number;
    videoId: number;
  };

  export class DeleteVideoFromPortfolioError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoFromPortfolioError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromPortfolioAlt1Request = {
    portfolioId: number;
    videoId: number;
  };

  export class DeleteVideoFromPortfolioAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoFromPortfolioAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetPortfolioVideoRequest = {
    portfolioId: number;
    userId: number;
    videoId: number;
  };

  export type GetPortfolioVideoAlt1Request = {
    portfolioId: number;
    videoId: number;
  };

  export type GetPortfolioVideosRequest = {
    portfolioId: number;
    userId: number;
    containingUri?: string;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    sort?: Sort35;
  };

  export type GetPortfolioVideosAlt1Request = {
    portfolioId: number;
    containingUri?: string;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    sort?: Sort35;
  };
}
