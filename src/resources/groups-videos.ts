import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { groupConnectionSchema, type GroupConnection } from "../models/group-connection.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage group videos.
 */
export class GroupsVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video to a group
   *
   * @remarks
   * This method adds a video to the specified group. The authenticated user must be the owner of
   * the group.
   *
   * @returns The video was added.
   *
   * @throws {@link GroupsVideos.AddVideoToGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToGroup(
    request: GroupsVideos.AddVideoToGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, GroupsVideos.AddVideoToGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/groups/{group_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: GroupsVideos.AddVideoToGroupError,
      },
      options,
    );
  }

  /**
   * Remove a video from a group
   *
   * @remarks
   * This method removes a video from the specified group. The authenticated user must be the owner
   * of the group.
   *
   * @returns The video was removed.
   *
   * @throws {@link GroupsVideos.DeleteVideoFromGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoFromGroup(
    request: GroupsVideos.DeleteVideoFromGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsVideos.DeleteVideoFromGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/groups/{group_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsVideos.DeleteVideoFromGroupError,
      },
      options,
    );
  }

  /**
   * Get all the groups to which the user can add or remove a specific video
   *
   * @remarks
   * This method returns every group to which the authenticated user can add or remove the specified
   * video.
   *
   * @returns The groups were returned.
   *
   * @throws {@link GroupsVideos.GetAvailableVideoGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableVideoGroups(
    request: GroupsVideos.GetAvailableVideoGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsVideos.GetAvailableVideoGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/available_groups"),
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
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: GroupsVideos.GetAvailableVideoGroupsError,
      },
      options,
    );
  }

  /**
   * Get a specific video in a group
   *
   * @remarks
   * This method returns a single video from the specified group. You can use this method to
   * determine whether the video belongs to the group.
   *
   * @returns The video was returned.
   *
   * @throws {@link GroupsVideos.GetGroupVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupVideo(
    request: GroupsVideos.GetGroupVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, GroupsVideos.GetGroupVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: GroupsVideos.GetGroupVideoError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a group
   *
   * @remarks
   * This method returns every video from the specified group.
   *
   * @returns The videos were returned.
   *
   * @throws {@link GroupsVideos.GetGroupVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupVideos(
    request: GroupsVideos.GetGroupVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, GroupsVideos.GetGroupVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: GroupsVideos.GetGroupVideosError,
      },
      options,
    );
  }
}

export namespace GroupsVideos {
  export type AddVideoToGroupRequest = {
    /** The ID of the group. */
    groupId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AddVideoToGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteVideoFromGroupRequest = {
    /** The ID of the group. */
    groupId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoFromGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeleteVideoFromGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAvailableVideoGroupsRequest = {
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAvailableVideoGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAvailableVideoGroupsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupVideoRequest = {
    /** The ID of the group. */
    groupId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetGroupVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetGroupVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGroupVideosRequest = {
    /** The ID of the group. */
    groupId: number;
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
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetGroupVideosError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error304", undefined> | Declared<"legacyError", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetGroupVideosError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
