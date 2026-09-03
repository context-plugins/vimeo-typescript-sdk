import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { channelConnectionSchema, type ChannelConnection } from "../models/channel-connection.js";
import {
  channelsVideosRequestSchema,
  type ChannelsVideosRequest,
} from "../models/channels-videos-request.js";
import {
  channelsVideosRequest1Schema,
  type ChannelsVideosRequest1,
} from "../models/channels-videos-request1.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort10Schema, type Sort10 } from "../models/sort10.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class ChannelsVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToChannel(
    request: ChannelsVideos.AddVideoToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.AddVideoToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.AddVideoToChannelError,
      },
      options,
    );
  }

  addVideosToChannel(
    request: ChannelsVideos.AddVideosToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.AddVideosToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: channelsVideosRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.AddVideosToChannelError,
      },
      options,
    );
  }

  deleteVideoFromChannel(
    request: ChannelsVideos.DeleteVideoFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.DeleteVideoFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.DeleteVideoFromChannelError,
      },
      options,
    );
  }

  getAvailableVideoChannels(
    request: ChannelsVideos.GetAvailableVideoChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelConnection, ChannelsVideos.GetAvailableVideoChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/available_channels"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelConnectionSchema },
        errorFactory: ChannelsVideos.GetAvailableVideoChannelsError,
      },
      options,
    );
  }

  getChannelVideo(
    request: ChannelsVideos.GetChannelVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ChannelsVideos.GetChannelVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ChannelsVideos.GetChannelVideoError,
      },
      options,
    );
  }

  getChannelVideos(
    request: ChannelsVideos.GetChannelVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ChannelsVideos.GetChannelVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sizes", value: request.sizes, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort10Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ChannelsVideos.GetChannelVideosError,
      },
      options,
    );
  }

  removeVideosFromChannel(
    request: ChannelsVideos.RemoveVideosFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.RemoveVideosFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: channelsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.RemoveVideosFromChannelError,
      },
      options,
    );
  }
}

export namespace ChannelsVideos {
  export type AddVideoToChannelRequest = {
    channelId: number;
    videoId: number;
  };

  export class AddVideoToChannelError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoToChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideosToChannelRequest = {
    channelId: number;
    body: ChannelsVideosRequest1;
  };

  export class AddVideosToChannelError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideosToChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromChannelRequest = {
    channelId: number;
    videoId: number;
  };

  export class DeleteVideoFromChannelError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVideoFromChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAvailableVideoChannelsRequest = {
    videoId: number;
  };

  export class GetAvailableVideoChannelsError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetAvailableVideoChannelsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelVideoRequest = {
    channelId: number;
    videoId: number;
  };

  export class GetChannelVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChannelVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelVideosRequest = {
    channelId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sizes?: string;
    sort?: Sort10;
  };

  export class GetChannelVideosError extends ResponseError<
    | Declared<"error304", undefined>
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetChannelVideosError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveVideosFromChannelRequest = {
    channelId: number;
    body: ChannelsVideosRequest;
  };

  export class RemoveVideosFromChannelError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<RemoveVideosFromChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
