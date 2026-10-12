import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Use these methods to work with videos on On Demand pages.
 */
export class OnDemandVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video to an On Demand page
   *
   * @remarks
   * This method adds a video to the specified On Demand page. The authenticated user must be the
   * owner of the page.
   *
   * @returns The video was added.
   *
   * @throws {@link OnDemandVideos.AddVideoToVodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToVod(
    request: OnDemandVideos.AddVideoToVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandVideo, OnDemandVideos.AddVideoToVodError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ondemandPagesVideosRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandVideoSchema },
        errorFactory: OnDemandVideos.AddVideoToVodError,
      },
      options,
    );
  }

  /**
   * Remove a video from an On Demand page
   *
   * @remarks
   * This method removes a video from the specified On Demand page. The authenticated user must be
   * the owner of the page.
   *
   * @returns The video was removed.
   *
   * @throws {@link OnDemandVideos.DeleteVideoFromVodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromVod(
    request: OnDemandVideos.DeleteVideoFromVodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandVideos.DeleteVideoFromVodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandVideos.DeleteVideoFromVodError,
      },
      options,
    );
  }

  /**
   * Get a specific video on an On Demand page
   *
   * @remarks
   * This method returns a single video on the specified On Demand page. Use this method to
   * determine whether the video is on the page.
   *
   * @returns The video was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodVideo(
    request: OnDemandVideos.GetVodVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the videos on an On Demand page
   *
   * @remarks
   * This method returns every video on the specified On Demand page.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodVideos(
    request: OnDemandVideos.GetVodVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandVideoConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter29Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort45Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandVideoConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace OnDemandVideos {
  export type AddVideoToVodRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the video. */
    videoId: number;
    body: OndemandPagesVideosRequest;
  };

  export class AddVideoToVodError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoToVodError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoFromVodRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoFromVodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoFromVodError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodVideoRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type GetVodVideosRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
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
     *  * `all` - Filter for all videos.
     *  * `buy` - Filter for purchased videos.
     *  * `expiring_soon` - Filter for videos that expire soon.
     *  * `extra` - Filter for extra footage videos.
     *  * `main` - Filter for main videos.
     *  * `main.viewable` - Filter for videos that are both the main video and are viewable.
     *  * `rent` - Filter for rented videos.
     *  * `trailer` - Filter for trailer videos.
     *  * `unwatched` - Filter for unwatched videos.
     *  * `viewable` - Filter for videos that are viewable.
     *  * `watched` - Filter for watched videos.
     */
    filter?: Filter29;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sorting method.
     *  * `episode` - Sort the results by episode.
     *  * `manual` - Sort the results manually.
     *  * `name` - Sort the results by name.
     *  * `purchase_time` - Sort the results by time of purchase.
     *  * `release_date` - Sort the results by release date.
     */
    sort?: Sort45;
  };
}
