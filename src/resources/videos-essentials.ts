import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { customMetadataValuesSchema, type CustomMetadataValues } from "../models/custom-metadata-values.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter22Schema, type Filter22 } from "../models/filter22.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { filter45Schema, type Filter45 } from "../models/filter45.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { meVideosCopyRequestSchema, type MeVideosCopyRequest } from "../models/me-videos-copy-request.js";
import { meVideosRequestSchema, type MeVideosRequest } from "../models/me-videos-request.js";
import { queryFieldsSchema, type QueryFields } from "../models/query-fields.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { sort39Schema, type Sort39 } from "../models/sort39.js";
import { sort73Schema, type Sort73 } from "../models/sort73.js";
import {
  usersVideosCopyRequestSchema,
  type UsersVideosCopyRequest,
} from "../models/users-videos-copy-request.js";
import { usersVideosRequestSchema, type UsersVideosRequest } from "../models/users-videos-request.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import {
  videosCustomMetadataRequestSchema,
  type VideosCustomMetadataRequest,
} from "../models/videos-custom-metadata-request.js";
import { videosRequestSchema, type VideosRequest } from "../models/videos-request.js";
import { videosRequest1Schema, type VideosRequest1 } from "../models/videos-request1.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with videos.
 */
export class VideosEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if the user owns a video
   *
   * @remarks
   * This method determines whether the authenticated user is the owner of the specified video.
   *
   * @returns The authenticated user owns the video.
   *
   * @throws {@link VideosEssentials.CheckIfUserOwnsVideoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserOwnsVideo(
    request: VideosEssentials.CheckIfUserOwnsVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CheckIfUserOwnsVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CheckIfUserOwnsVideoError,
      },
      options,
    );
  }

  /**
   * Check if the user owns a video
   *
   * @remarks
   * This method determines whether the authenticated user is the owner of the specified video.
   *
   * @returns The authenticated user owns the video.
   *
   * @throws {@link VideosEssentials.CheckIfUserOwnsVideoAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserOwnsVideoAlt1(
    request: VideosEssentials.CheckIfUserOwnsVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CheckIfUserOwnsVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/videos/{video_id}"),
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
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CheckIfUserOwnsVideoAlt1Error,
      },
      options,
    );
  }

  /**
   * Copy a video
   *
   * @remarks
   * This method creates a copy of the specified video. Only the source's current version is copied;
   * prior version history is not carried over.
   *
   * @returns The copied video was created.
   *
   * @throws {@link VideosEssentials.CopyVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  copyVideo(
    request: VideosEssentials.CopyVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CopyVideoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/videos/{video_id}/copy"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersVideosCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CopyVideoError,
      },
      options,
    );
  }

  /**
   * Copy a video
   *
   * @remarks
   * This method creates a copy of the specified video. Only the source's current version is copied;
   * prior version history is not carried over.
   *
   * @returns The copied video was created.
   *
   * @throws {@link VideosEssentials.CopyVideoAlt2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  copyVideoAlt2(
    request: VideosEssentials.CopyVideoAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CopyVideoAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/videos/{video_id}/copy"),
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
          schema: s.optional(s.lazy(() => meVideosCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CopyVideoAlt2Error,
      },
      options,
    );
  }

  /**
   * Delete a video
   *
   * @remarks
   * This method deletes the specified video. The authenticated user must be the owner of the video.
   *
   * @returns The video was deleted.
   *
   * @throws {@link VideosEssentials.DeleteVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideo(
    request: VideosEssentials.DeleteVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEssentials.DeleteVideoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => videosRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEssentials.DeleteVideoError,
      },
      options,
    );
  }

  /**
   * Delete a user's videos
   *
   * @remarks
   * This method deletes one or more videos belonging to the specified user. The authenticated user
   * must have permission to delete the videos.
   *
   * Specify the videos to delete in a comma-separated list by URI using the **uris** query
   * parameter.
   *
   * @returns The videos were deleted.
   *
   * @throws {@link VideosEssentials.DeleteVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideos(
    request: VideosEssentials.DeleteVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEssentials.DeleteVideosError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [{ name: "uris", value: request.uris, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersVideosRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEssentials.DeleteVideosError,
      },
      options,
    );
  }

  /**
   * Delete a user's videos
   *
   * @remarks
   * This method deletes one or more videos belonging to the specified user. The authenticated user
   * must have permission to delete the videos.
   *
   * Specify the videos to delete in a comma-separated list by URI using the **uris** query
   * parameter.
   *
   * @returns The videos were deleted.
   *
   * @throws {@link VideosEssentials.DeleteVideosAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideosAlt1(
    request: VideosEssentials.DeleteVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEssentials.DeleteVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [{ name: "uris", value: request.uris, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => meVideosRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEssentials.DeleteVideosAlt1Error,
      },
      options,
    );
  }

  /**
   * Edit a video
   *
   * @remarks
   * This method edits the specified video.
   *
   * @returns The video was edited.
   *
   * @throws {@link VideosEssentials.EditVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVideo(
    request: VideosEssentials.EditVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.EditVideoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosRequest1Schema },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.EditVideoError,
      },
      options,
    );
  }

  /**
   * Get all the videos in which the user appears
   *
   * @remarks
   * This method returns all the videos in which the authenticated user has a credited appearance.
   *
   * @returns The videos were returned.
   *
   * @throws {@link VideosEssentials.GetAppearancesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppearances(
    request: VideosEssentials.GetAppearancesRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetAppearancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/appearances"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
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
        errorFactory: VideosEssentials.GetAppearancesError,
      },
      options,
    );
  }

  /**
   * Get all the videos in which the user appears
   *
   * @remarks
   * This method returns all the videos in which the authenticated user has a credited appearance.
   *
   * @returns The videos were returned.
   *
   * @throws {@link VideosEssentials.GetAppearancesAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppearancesAlt1(
    request: VideosEssentials.GetAppearancesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetAppearancesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/appearances"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
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
        errorFactory: VideosEssentials.GetAppearancesAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific video
   *
   * @remarks
   * This method returns a single video.
   *
   * @returns The video was returned.
   *
   * @throws {@link VideosEssentials.GetVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideo(
    request: VideosEssentials.GetVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.GetVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [{ name: "time_links", value: request.timeLinks, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.GetVideoError,
      },
      options,
    );
  }

  /**
   * Get all the videos that the user has uploaded
   *
   * @remarks
   * This method returns all the videos that the authenticated user has uploaded.
   *
   * @returns The videos were returned.
   *
   * @throws {@link VideosEssentials.GetVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideos(
    request: VideosEssentials.GetVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter22Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "filter_playable", value: request.filterPlayable, schema: s.optional(s.boolean()) },
          {
            name: "filter_screen_recorded",
            value: request.filterScreenRecorded,
            schema: s.optional(s.boolean()),
          },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "filter_uploader", value: request.filterUploader, schema: s.optional(s.float64()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          {
            name: "query_fields",
            value: request.queryFields,
            schema: s.optional(s.lazy(() => queryFieldsSchema)),
          },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort39Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.GetVideosError,
      },
      options,
    );
  }

  /**
   * Get all the videos that the user has uploaded
   *
   * @remarks
   * This method returns all the videos that the authenticated user has uploaded.
   *
   * @returns The videos were returned.
   *
   * @throws {@link VideosEssentials.GetVideosAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideosAlt1(
    request: VideosEssentials.GetVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter22Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "filter_playable", value: request.filterPlayable, schema: s.optional(s.boolean()) },
          {
            name: "filter_screen_recorded",
            value: request.filterScreenRecorded,
            schema: s.optional(s.boolean()),
          },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "filter_uploader", value: request.filterUploader, schema: s.optional(s.float64()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          {
            name: "query_fields",
            value: request.queryFields,
            schema: s.optional(s.lazy(() => queryFieldsSchema)),
          },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort39Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.GetVideosAlt1Error,
      },
      options,
    );
  }

  /**
   * Search for videos
   *
   * @remarks
   * This method returns all the videos that match custom search criteria.
   *
   * @returns The search results were returned.
   *
   * @throws {@link VideosEssentials.SearchVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchVideos(
    request: VideosEssentials.SearchVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.SearchVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter45Schema)) },
          { name: "links", value: request.links, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort73Schema)) },
          { name: "uris", value: request.uris, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.SearchVideosError,
      },
      options,
    );
  }

  /**
   * Set custom metadata values for a video
   *
   * @remarks
   * This method sets, updates, or clears custom metadata values on a single video.
   *
   * The authenticated user must own the video or have team permission to edit it.
   *
   * Send each value as a `{field_id, field_value}` pair under the `fields` array. The value's data
   * type is validated against the field's definition (set via `POST
   * /teams/{user_id}/custom_metadata`):
   *
   * | Type           | Accepted format                                         |
   * | -------------- | ------------------------------------------------------- |
   * | `str`          | A non-empty string of up to 50 characters               |
   * | `int`          | An integer, optionally negative (for example, `42`)     |
   * | `date`         | `YYYY-MM-DD`                                            |
   * | `bool`         | `"true"`, `"false"`, `"1"`, or `"0"`                    |
   * | `select`       | One of the values defined for the field                 |
   * | `multi-select` | A JSON-encoded array of allowed values                  |
   *
   * To clear an existing value, send `field_value: null`. The field will return to its default
   * value (if one is defined) or become unset.
   *
   * @returns The updated custom metadata for the video.
   *
   * @throws {@link VideosEssentials.UpdateVideoCustomMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVideoCustomMetadata(
    request: VideosEssentials.UpdateVideoCustomMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataValues[], VideosEssentials.UpdateVideoCustomMetadataError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/custom_metadata"),
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
          schema: s.optional(s.lazy(() => videosCustomMetadataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customMetadataValuesSchema)) },
        errorFactory: VideosEssentials.UpdateVideoCustomMetadataError,
      },
      options,
    );
  }
}

export namespace VideosEssentials {
  export type CheckIfUserOwnsVideoRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckIfUserOwnsVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserOwnsVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserOwnsVideoAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export class CheckIfUserOwnsVideoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserOwnsVideoAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CopyVideoRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
    body?: UsersVideosCopyRequest;
  };

  export class CopyVideoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CopyVideoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CopyVideoAlt2Request = {
    /** The ID of the video. */
    videoId: number;
    body?: MeVideosCopyRequest;
  };

  export class CopyVideoAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CopyVideoAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosRequest;
  };

  export class DeleteVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideosRequest = {
    /** The ID of the user. */
    userId: number;
    /** A comma-separated list of the video URIs to delete. */
    uris: string;
    body?: UsersVideosRequest;
  };

  export class DeleteVideosError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteVideosAlt1Request = {
    /** A comma-separated list of the video URIs to delete. */
    uris: string;
    body?: MeVideosRequest;
  };

  export class DeleteVideosAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteVideosAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditVideoRequest = {
    /** The ID of the video. */
    videoId: number;
    body: VideosRequest1;
  };

  export class EditVideoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditVideoError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAppearancesRequest = {
    /** The ID of the user. */
    userId: number;
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
     *  * `date` - Sort the results by date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetAppearancesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAppearancesError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAppearancesAlt1Request = {
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
     *  * `date` - Sort the results by date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort15;
  };

  export class GetAppearancesAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAppearancesAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVideoRequest = {
    /** The ID of the video. */
    videoId: number;
    /** Whether to return timestamps in the description as links. */
    timeLinks?: boolean;
  };

  export class GetVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideosRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The page that contains the video URI. The field is available only when not paired with
     * **query**.
     */
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
     *  * `app_only` - Return app-only videos.
     *  * `cold_privacy` - Return the owner's active videos whose privacy is suppressed because
     *    their plan no longer supports it (cold privacy).
     *  * `cold_storage` - Return cold storage videos.
     *  * `embeddable` - Return embeddable videos.
     *  * `featured` - Return featured videos.
     *  * `live` - Return only live videos.
     *  * `no_placeholder` - Return no placeholder videos.
     *  * `nolive` - Return no live videos.
     *  * `playable` - Return playable videos.
     *  * `screen_recorded` - Return screen-recorded videos.
     */
    filter?: Filter22;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /**
     * Whether to filter the results by playable videos (`true`) or non-playable videos (`false`).
     */
    filterPlayable?: boolean;
    /**
     * Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded
     * videos (`false`).
     */
    filterScreenRecorded?: boolean;
    /**
     * A comma-separated list of tags to filter on. All results must include at least one of these
     * tags.
     */
    filterTag?: string;
    /** A comma-separated list of tags to filter on. All results must include all of these tags. */
    filterTagAllOf?: string;
    /** A comma-separated list of tags to exclude. All results must exclude all of these tags. */
    filterTagExclude?: string;
    /** The ID of the team member or team owner uploader to filter for. */
    filterUploader?: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * A comma-separated list of fields to query over. The default value is
     * `title,description,chapters,tags`.
     *
     * Option descriptions:
     *  * `chapters` - Query by chapter titles that have been added to the video.
     *  * `description` - Query by the description of the video.
     *  * `tags` - Query by tag names that have been added to the video.
     *  * `title` - Query by the title of the video.
     */
    queryFields?: QueryFields;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically by title.
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sorting method.
     *  * `duration` - Sort the results by duration.
     *  * `last_user_action_event_date` - Sort the results by last user interaction. If a result
     *    hasn't had an interaction, the upload date is used instead.
     *  * `likes` - Sort the results by number of likes. To use this option, **direction** must be
     *    `desc`.
     *  * `modified_time` - Sort the results by last modification.
     *  * `plays` - Sort the results by number of plays. To use this option, **direction** must be
     *    `desc`.
     */
    sort?: Sort39;
  };

  export class GetVideosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error304", undefined>>;

    static readonly errors: ErrorDecoders<GetVideosError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type GetVideosAlt1Request = {
    /**
     * The page that contains the video URI. The field is available only when not paired with
     * **query**.
     */
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
     *  * `app_only` - Return app-only videos.
     *  * `cold_privacy` - Return the owner's active videos whose privacy is suppressed because
     *    their plan no longer supports it (cold privacy).
     *  * `cold_storage` - Return cold storage videos.
     *  * `embeddable` - Return embeddable videos.
     *  * `featured` - Return featured videos.
     *  * `live` - Return only live videos.
     *  * `no_placeholder` - Return no placeholder videos.
     *  * `nolive` - Return no live videos.
     *  * `playable` - Return playable videos.
     *  * `screen_recorded` - Return screen-recorded videos.
     */
    filter?: Filter22;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /**
     * Whether to filter the results by playable videos (`true`) or non-playable videos (`false`).
     */
    filterPlayable?: boolean;
    /**
     * Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded
     * videos (`false`).
     */
    filterScreenRecorded?: boolean;
    /**
     * A comma-separated list of tags to filter on. All results must include at least one of these
     * tags.
     */
    filterTag?: string;
    /** A comma-separated list of tags to filter on. All results must include all of these tags. */
    filterTagAllOf?: string;
    /** A comma-separated list of tags to exclude. All results must exclude all of these tags. */
    filterTagExclude?: string;
    /** The ID of the team member or team owner uploader to filter for. */
    filterUploader?: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * A comma-separated list of fields to query over. The default value is
     * `title,description,chapters,tags`.
     *
     * Option descriptions:
     *  * `chapters` - Query by chapter titles that have been added to the video.
     *  * `description` - Query by the description of the video.
     *  * `tags` - Query by tag names that have been added to the video.
     *  * `title` - Query by the title of the video.
     */
    queryFields?: QueryFields;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically by title.
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sorting method.
     *  * `duration` - Sort the results by duration.
     *  * `last_user_action_event_date` - Sort the results by last user interaction. If a result
     *    hasn't had an interaction, the upload date is used instead.
     *  * `likes` - Sort the results by number of likes. To use this option, **direction** must be
     *    `desc`.
     *  * `modified_time` - Sort the results by last modification.
     *  * `plays` - Sort the results by number of plays. To use this option, **direction** must be
     *    `desc`.
     */
    sort?: Sort39;
  };

  export class GetVideosAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error304", undefined>>;

    static readonly errors: ErrorDecoders<GetVideosAlt1Error> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type SearchVideosRequest = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results. `CC` and related filters target videos with the
     * corresponding Creative Commons licenses. For more information, see our [Creative
     * Commons](https://vimeo.com/creativecommons) page.
     *
     * Option descriptions:
     *  * `CC` - Return videos under any Creative Commons license.
     *  * `CC-BY` - Return CC BY, or attribution-only, videos.
     *  * `CC-BY-NC` - Return CC BY-NC, or Attribution-NonCommercial, videos.
     *  * `CC-BY-NC-ND` - Return CC BY-NC-ND, or Attribution-NonCommercial-NoDerivs, videos.
     *  * `CC-BY-NC-SA` - Return CC BY-NC-SA, or Attribution-NonCommercial-ShareAlike, videos.
     *  * `CC-BY-ND` - Return CC BY-ND, or Attribution-NoDerivs, videos.
     *  * `CC-BY-SA` - Return CC BY-SA, or Attribution-ShareAlike, videos.
     *  * `CC0` - Return CC0, or public domain, videos.
     *  * `categories` - Filter by categories.
     *  * `duration` - Filter by duration.
     *  * `in-progress` - Return in-progress videos.
     *  * `minimum_likes` - Filter by minimum likes.
     *  * `trending` - Return trending videos.
     *  * `upload_date` - Filter by upload date.
     */
    filter?: Filter45;
    /**
     * A comma-separated list of video URLs to find. Querying, filtering, and sorting aren't
     * supported when using this field.
     */
    links?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     *  * `relevant` - Sort the results by relevance.
     */
    sort?: Sort73;
    /**
     * A comma-separated list of video URIs to find. Querying, filtering, and sorting aren't
     * supported when using this field.
     */
    uris?: string;
  };

  export class SearchVideosError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"legacyError", LegacyError>
    >;

    static readonly errors: ErrorDecoders<SearchVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UpdateVideoCustomMetadataRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosCustomMetadataRequest;
  };

  export class UpdateVideoCustomMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<UpdateVideoCustomMetadataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
