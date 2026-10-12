import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Use these methods to work with videos in channels.
 */
export class ChannelsVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a specific video to a channel
   *
   * @remarks
   * This method adds a single video to the specified channel. The authenticated user must be a
   * moderator of the channel.
   *
   * @returns The video was added.
   *
   * @throws {@link ChannelsVideos.AddVideoToChannelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToChannel(
    request: ChannelsVideos.AddVideoToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.AddVideoToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.AddVideoToChannelError,
      },
      options,
    );
  }

  /**
   * Add a list of videos to a channel
   *
   * @remarks
   * This method adds multiple videos to the specified channel. The authenticated user must be a
   * moderator of the channel.
   *
   * @returns The videos were added.
   *
   * @throws {@link ChannelsVideos.AddVideosToChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideosToChannel(
    request: ChannelsVideos.AddVideosToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.AddVideosToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsVideosRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.AddVideosToChannelError,
      },
      options,
    );
  }

  /**
   * Remove a specific video from a channel
   *
   * @remarks
   * This method removes a single video from the specified channel. The authenticated user must be a
   * moderator of the channel.
   *
   * @returns The video was removed.
   *
   * @throws {@link ChannelsVideos.DeleteVideoFromChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromChannel(
    request: ChannelsVideos.DeleteVideoFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.DeleteVideoFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsVideos.DeleteVideoFromChannelError,
      },
      options,
    );
  }

  /**
   * Get all the channels to which the user can add or remove a specific video
   *
   * @remarks
   * This method returns every channel to which the authenticated user can add or remove the
   * specified video. The authenticated user must be a moderator of the channel.
   *
   * @returns The channels were returned.
   *
   * @throws {@link ChannelsVideos.GetAvailableVideoChannelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableVideoChannels(
    request: ChannelsVideos.GetAvailableVideoChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelConnection, ChannelsVideos.GetAvailableVideoChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/available_channels"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelConnectionSchema },
        errorFactory: ChannelsVideos.GetAvailableVideoChannelsError,
      },
      options,
    );
  }

  /**
   * Get a specific video in a channel
   *
   * @remarks
   * This method returns a single video in the specified channel. You can use it to determine
   * whether the video is in the channel.
   *
   * @returns The video was returned.
   *
   * @throws {@link ChannelsVideos.GetChannelVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelVideo(
    request: ChannelsVideos.GetChannelVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ChannelsVideos.GetChannelVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ChannelsVideos.GetChannelVideoError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a channel
   *
   * @remarks
   * This method returns every video in the specified channel.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ChannelsVideos.GetChannelVideosError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelVideos(
    request: ChannelsVideos.GetChannelVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ChannelsVideos.GetChannelVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sizes", value: request.sizes, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort10Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ChannelsVideos.GetChannelVideosError,
      },
      options,
    );
  }

  /**
   * Remove a list of videos from a channel
   *
   * @remarks
   * This method removes multiple videos from the specified channel. Include the videos by their URI
   * as a JSON block in the body of the request using the **video_uri** field, like this: `[{
   * "video_uri": "/videos/1234" }, { "video_uri": "/videos/1235" }]`. The authenticated user must
   * be a moderator of the channel. For more information on batch requests like this one, see [Using
   * Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
   *
   * @returns The videos were removed.
   *
   * @throws {@link ChannelsVideos.RemoveVideosFromChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideosFromChannel(
    request: ChannelsVideos.RemoveVideosFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsVideos.RemoveVideosFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoToChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideosToChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsVideosRequest1;
  };

  export class AddVideosToChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideosToChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoFromChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVideoFromChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAvailableVideoChannelsRequest = {
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAvailableVideoChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetAvailableVideoChannelsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelVideoRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetChannelVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChannelVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelVideosRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The page that contains the video URI. */
    containingUri?: string;
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
     *  * `embeddable` - Return embeddable videos.
     */
    filter?: Filter3;
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
     * The pixel dimensions of the image in `{width}x{height}` format. For more information, see our
     * [Using Common Formats and
     * Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide.
     */
    sizes?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by date added.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `default` - Use the default sorting method.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `manual` - Sort the results as the user has arranged them.
     *  * `modified_time` - Sort the results by last modification.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort10;
  };

  export class GetChannelVideosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error304", undefined>
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetChannelVideosError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveVideosFromChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsVideosRequest;
  };

  export class RemoveVideosFromChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<RemoveVideosFromChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
