import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import {
  animatedThumbsetConnectionSchema,
  type AnimatedThumbsetConnection,
} from "../models/animated-thumbset-connection.js";
import { animatedThumbsetSchema, type AnimatedThumbset } from "../models/animated-thumbset.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  videosAnimatedThumbsetsRequestSchema,
  type VideosAnimatedThumbsetsRequest,
} from "../models/videos-animated-thumbsets-request.js";
import type { Servers } from "../servers.js";

export class VideosAnimatedThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAnimatedThumbset(
    request: VideosAnimatedThumbnails.CreateAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.CreateAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/animated_thumbsets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: videosAnimatedThumbsetsRequestSchema },
      },
      {
        success: { kind: "json", schema: animatedThumbsetSchema },
        errorFactory: VideosAnimatedThumbnails.CreateAnimatedThumbsetError,
      },
      options,
    );
  }

  deleteAnimatedThumbset(
    request: VideosAnimatedThumbnails.DeleteAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAnimatedThumbnails.DeleteAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/animated_thumbsets/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAnimatedThumbnails.DeleteAnimatedThumbsetError,
      },
      options,
    );
  }

  getAllAnimatedThumbset(
    request: VideosAnimatedThumbnails.GetAllAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbsetConnection, VideosAnimatedThumbnails.GetAllAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/animated_thumbsets"),
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
        success: { kind: "json", schema: animatedThumbsetConnectionSchema },
        errorFactory: VideosAnimatedThumbnails.GetAllAnimatedThumbsetError,
      },
      options,
    );
  }

  getAnimatedThumbset(
    request: VideosAnimatedThumbnails.GetAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/animated_thumbsets/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: animatedThumbsetSchema },
        errorFactory: VideosAnimatedThumbnails.GetAnimatedThumbsetError,
      },
      options,
    );
  }

  getAnimatedThumbsetStatus(
    request: VideosAnimatedThumbnails.GetAnimatedThumbsetStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/animated_thumbsets/{picture_id}/status"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: animatedThumbsetSchema },
        errorFactory: VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError,
      },
      options,
    );
  }
}

export namespace VideosAnimatedThumbnails {
  export type CreateAnimatedThumbsetRequest = {
    videoId: number;
    body: VideosAnimatedThumbsetsRequest;
  };

  export class CreateAnimatedThumbsetError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateAnimatedThumbsetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 429, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteAnimatedThumbsetRequest = {
    pictureId: string;
    videoId: number;
  };

  export class DeleteAnimatedThumbsetError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<DeleteAnimatedThumbsetError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllAnimatedThumbsetRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetAllAnimatedThumbsetError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAllAnimatedThumbsetError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnimatedThumbsetRequest = {
    pictureId: string;
    videoId: number;
  };

  export class GetAnimatedThumbsetError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAnimatedThumbsetError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnimatedThumbsetStatusRequest = {
    pictureId: string;
    videoId: number;
  };

  export class GetAnimatedThumbsetStatusError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAnimatedThumbsetStatusError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
