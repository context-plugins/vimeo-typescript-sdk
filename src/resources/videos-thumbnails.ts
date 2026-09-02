import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import {
  channelsVideosPicturesRequestSchema,
  type ChannelsVideosPicturesRequest,
} from "../models/channels-videos-pictures-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  videosPicturesRequestSchema,
  type VideosPicturesRequest,
} from "../models/videos-pictures-request.js";
import {
  videosPicturesRequest1Schema,
  type VideosPicturesRequest1,
} from "../models/videos-pictures-request1.js";
import type { Servers } from "../servers.js";

export class VideosThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createVideoThumbnail(
    request: VideosThumbnails.CreateVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createVideoThumbnailAlt1(
    request: VideosThumbnails.CreateVideoThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => channelsVideosPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteVideoThumbnail(
    request: VideosThumbnails.DeleteVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/pictures/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.number() },
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

  editVideoThumbnail(
    request: VideosThumbnails.EditVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/pictures/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosPicturesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoThumbnail(
    request: VideosThumbnails.GetVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/pictures/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoThumbnails(
    request: VideosThumbnails.GetVideoThumbnailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ResponseError> {
    return this.#rawClient.execute<PictureConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/pictures"),
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
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoThumbnailsAlt1(
    request: VideosThumbnails.GetVideoThumbnailsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ResponseError> {
    return this.#rawClient.execute<PictureConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/pictures"),
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
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideosThumbnails {
  export type CreateVideoThumbnailRequest = {
    videoId: number;
    body?: VideosPicturesRequest;
  };

  export type CreateVideoThumbnailAlt1Request = {
    channelId: number;
    videoId: number;
    body?: ChannelsVideosPicturesRequest;
  };

  export type DeleteVideoThumbnailRequest = {
    pictureId: number;
    videoId: number;
  };

  export type EditVideoThumbnailRequest = {
    pictureId: number;
    videoId: number;
    body?: VideosPicturesRequest1;
  };

  export type GetVideoThumbnailRequest = {
    pictureId: number;
    videoId: number;
  };

  export type GetVideoThumbnailsRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export type GetVideoThumbnailsAlt1Request = {
    channelId: number;
    videoId: number;
    page?: number;
    perPage?: number;
  };
}
