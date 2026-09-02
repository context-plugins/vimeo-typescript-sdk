import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class WatchLaterQueueEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToWatchLater(
    request: WatchLaterQueueEssentials.AddVideoToWatchLaterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  addVideoToWatchLaterAlt1(
    request: WatchLaterQueueEssentials.AddVideoToWatchLaterAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/me/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  checkWatchLaterQueue(
    request: WatchLaterQueueEssentials.CheckWatchLaterQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, WatchLaterQueueEssentials.CheckWatchLaterQueueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: WatchLaterQueueEssentials.CheckWatchLaterQueueError,
      },
      options,
    );
  }

  checkWatchLaterQueueAlt1(
    request: WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: WatchLaterQueueEssentials.CheckWatchLaterQueueAlt1Error,
      },
      options,
    );
  }

  deleteVideoFromWatchLater(
    request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteVideoFromWatchLaterAlt1(
    request: WatchLaterQueueEssentials.DeleteVideoFromWatchLaterAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/me/watchlater/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getWatchLaterQueue(
    request: WatchLaterQueueEssentials.GetWatchLaterQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/watchlater"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: WatchLaterQueueEssentials.GetWatchLaterQueueError,
      },
      options,
    );
  }

  getWatchLaterQueueAlt1(
    request: WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, WatchLaterQueueEssentials.GetWatchLaterQueueAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/watchlater"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
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
    userId: number;
    videoId: number;
  };

  export type AddVideoToWatchLaterAlt1Request = {
    videoId: number;
  };

  export type CheckWatchLaterQueueRequest = {
    userId: number;
    videoId: number;
  };

  export class CheckWatchLaterQueueError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckWatchLaterQueueError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckWatchLaterQueueAlt1Request = {
    videoId: number;
  };

  export class CheckWatchLaterQueueAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckWatchLaterQueueAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromWatchLaterRequest = {
    userId: number;
    videoId: number;
  };

  export type DeleteVideoFromWatchLaterAlt1Request = {
    videoId: number;
  };

  export type GetWatchLaterQueueRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetWatchLaterQueueError extends ResponseError<Declared<"error304", undefined>> {
    static readonly errors: ErrorDecoders<GetWatchLaterQueueError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type GetWatchLaterQueueAlt1Request = {
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetWatchLaterQueueAlt1Error extends ResponseError<Declared<"error304", undefined>> {
    static readonly errors: ErrorDecoders<GetWatchLaterQueueAlt1Error> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }
}
