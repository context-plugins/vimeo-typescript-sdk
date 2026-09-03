import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter29Schema, type Filter29 } from "../models/filter29.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandVideoConnectionSchema,
  type OnDemandVideoConnection,
} from "../models/on-demand-video-connection.js";
import { onDemandVideoSchema, type OnDemandVideo } from "../models/on-demand-video.js";
import {
  ondemandPagesVideosRequestSchema,
  type OndemandPagesVideosRequest,
} from "../models/ondemand-pages-videos-request.js";
import { sort45Schema, type Sort45 } from "../models/sort45.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class OnDemandVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToVod(
    request: OnDemandVideos.AddVideoToVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandVideo, OnDemandVideos.AddVideoToVodError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: ondemandPagesVideosRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandVideoSchema },
        errorFactory: OnDemandVideos.AddVideoToVodError,
      },
      options,
    );
  }

  deleteVideoFromVod(
    request: OnDemandVideos.DeleteVideoFromVodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandVideos.DeleteVideoFromVodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandVideos.DeleteVideoFromVodError,
      },
      options,
    );
  }

  getVodVideo(
    request: OnDemandVideos.GetVodVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ResponseError> {
    return this.#rawClient.execute<Video, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
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

  getVodVideos(
    request: OnDemandVideos.GetVodVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandVideoConnection, ResponseError> {
    return this.#rawClient.execute<OnDemandVideoConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter29Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort45Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandVideoConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace OnDemandVideos {
  export type AddVideoToVodRequest = {
    ondemandId: number;
    videoId: number;
    body: OndemandPagesVideosRequest;
  };

  export class AddVideoToVodError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoToVodError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromVodRequest = {
    ondemandId: number;
    videoId: number;
  };

  export class DeleteVideoFromVodError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoFromVodError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodVideoRequest = {
    ondemandId: number;
    videoId: number;
  };

  export type GetVodVideosRequest = {
    ondemandId: number;
    direction?: Direction;
    filter?: Filter29;
    page?: number;
    perPage?: number;
    sort?: Sort45;
  };
}
