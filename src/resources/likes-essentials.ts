import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class LikesEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfUserLikedVideo(
    request: LikesEssentials.CheckIfUserLikedVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.CheckIfUserLikedVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/likes/{video_id}"),
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
        errorFactory: LikesEssentials.CheckIfUserLikedVideoError,
      },
      options,
    );
  }

  checkIfUserLikedVideoAlt1(
    request: LikesEssentials.CheckIfUserLikedVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.CheckIfUserLikedVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/likes/{video_id}"),
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
        errorFactory: LikesEssentials.CheckIfUserLikedVideoAlt1Error,
      },
      options,
    );
  }

  getLikes(
    request: LikesEssentials.GetLikesRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LikesEssentials.GetLikesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
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
        errorFactory: LikesEssentials.GetLikesError,
      },
      options,
    );
  }

  getLikesAlt1(
    request: LikesEssentials.GetLikesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LikesEssentials.GetLikesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
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
        errorFactory: LikesEssentials.GetLikesAlt1Error,
      },
      options,
    );
  }

  getVideoLikes(
    request: LikesEssentials.GetVideoLikesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoLikesAlt1(
    request: LikesEssentials.GetVideoLikesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVodLikes(
    request: LikesEssentials.GetVodLikesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, LikesEssentials.GetVodLikesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/likes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter25Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: LikesEssentials.GetVodLikesError,
      },
      options,
    );
  }

  likeVideo(
    request: LikesEssentials.LikeVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.LikeVideoError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/likes/{video_id}"),
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
        errorFactory: LikesEssentials.LikeVideoError,
      },
      options,
    );
  }

  likeVideoAlt1(
    request: LikesEssentials.LikeVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.LikeVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/likes/{video_id}"),
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
        errorFactory: LikesEssentials.LikeVideoAlt1Error,
      },
      options,
    );
  }

  unlikeVideo(
    request: LikesEssentials.UnlikeVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.UnlikeVideoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/likes/{video_id}"),
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
        errorFactory: LikesEssentials.UnlikeVideoError,
      },
      options,
    );
  }

  unlikeVideoAlt1(
    request: LikesEssentials.UnlikeVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LikesEssentials.UnlikeVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/likes/{video_id}"),
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
        errorFactory: LikesEssentials.UnlikeVideoAlt1Error,
      },
      options,
    );
  }
}

export namespace LikesEssentials {
  export type CheckIfUserLikedVideoRequest = {
    userId: number;
    videoId: number;
  };

  export class CheckIfUserLikedVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserLikedVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserLikedVideoAlt1Request = {
    videoId: number;
  };

  export class CheckIfUserLikedVideoAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserLikedVideoAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetLikesRequest = {
    userId: number;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetLikesError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetLikesError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLikesAlt1Request = {
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetLikesAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetLikesAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVideoLikesRequest = {
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort8;
  };

  export type GetVideoLikesAlt1Request = {
    channelId: number;
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort8;
  };

  export type GetVodLikesRequest = {
    ondemandId: number;
    direction?: Direction;
    filter?: Filter25;
    page?: number;
    perPage?: number;
    sort?: Sort8;
  };

  export class GetVodLikesError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetVodLikesError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LikeVideoRequest = {
    userId: number;
    videoId: number;
  };

  export class LikeVideoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<LikeVideoError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type LikeVideoAlt1Request = {
    videoId: number;
  };

  export class LikeVideoAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<LikeVideoAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnlikeVideoRequest = {
    userId: number;
    videoId: number;
  };

  export class UnlikeVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<UnlikeVideoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnlikeVideoAlt1Request = {
    videoId: number;
  };

  export class UnlikeVideoAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<UnlikeVideoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
