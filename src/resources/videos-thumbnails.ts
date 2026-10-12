import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Use these methods to work with video thumbnails.
 */
export class VideosThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video thumbnail
   *
   * @remarks
   * This method adds a thumbnail image to the specified video. The authenticated user must have
   * team permissions for the video.
   *
   * @returns The thumbnail image was added to the video.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVideoThumbnail(
    request: VideosThumbnails.CreateVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add a video thumbnail
   *
   * @remarks
   * This method adds a thumbnail image to the specified video. The authenticated user must have
   * team permissions for the video.
   *
   * @returns The thumbnail image was added to the video.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVideoThumbnailAlt1(
    request: VideosThumbnails.CreateVideoThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => channelsVideosPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a video thumbnail
   *
   * @remarks
   * This method deletes the specified thumbnail image from a video. The authenticated user must
   * have team permissions for the video.
   *
   * @returns The thumbnail was deleted.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoThumbnail(
    request: VideosThumbnails.DeleteVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/pictures/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Edit a video thumbnail
   *
   * @remarks
   * This method edits the specified video thumbnail image. The authenticated user must be the owner
   * of the thumbnail.
   *
   * @returns The thumbnail was edited.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVideoThumbnail(
    request: VideosThumbnails.EditVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/pictures/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosPicturesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific video thumbnail
   *
   * @remarks
   * This method returns a single thumbnail image from the specified video. The authenticated user
   * must have team permissions for the video.
   *
   * @returns The thumbnail was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoThumbnail(
    request: VideosThumbnails.GetVideoThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/pictures/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the thumbnails of a video
   *
   * @remarks
   * This method returns all thumbnail images of the specified video. The authenticated user must
   * have team permissions for the video.
   *
   * @returns The thumbnails were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoThumbnails(
    request: VideosThumbnails.GetVideoThumbnailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/pictures"),
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
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the thumbnails of a video
   *
   * @remarks
   * This method returns all thumbnail images of the specified video. The authenticated user must
   * have team permissions for the video.
   *
   * @returns The thumbnails were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoThumbnailsAlt1(
    request: VideosThumbnails.GetVideoThumbnailsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideosThumbnails {
  export type CreateVideoThumbnailRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosPicturesRequest;
  };

  export type CreateVideoThumbnailAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    body?: ChannelsVideosPicturesRequest;
  };

  export type DeleteVideoThumbnailRequest = {
    /** The ID of the thumbnail. */
    pictureId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type EditVideoThumbnailRequest = {
    /** The ID of the thumbnail. */
    pictureId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosPicturesRequest1;
  };

  export type GetVideoThumbnailRequest = {
    /** The ID of the thumbnail. */
    pictureId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type GetVideoThumbnailsRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetVideoThumbnailsAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };
}
