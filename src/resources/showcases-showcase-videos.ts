import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { albumConnectionSchema, type AlbumConnection } from "../models/album-connection.js";
import { albumSchema, type Album } from "../models/album.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter10Schema, type Filter10 } from "../models/filter10.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  meAlbumsVideosRequestSchema,
  type MeAlbumsVideosRequest,
} from "../models/me-albums-videos-request.js";
import {
  meAlbumsVideosSetAlbumThumbnailRequestSchema,
  type MeAlbumsVideosSetAlbumThumbnailRequest,
} from "../models/me-albums-videos-set-album-thumbnail-request.js";
import { sort2Schema, type Sort2 } from "../models/sort2.js";
import { sort21Schema, type Sort21 } from "../models/sort21.js";
import { sort74Schema, type Sort74 } from "../models/sort74.js";
import {
  usersAlbumsVideosRequestSchema,
  type UsersAlbumsVideosRequest,
} from "../models/users-albums-videos-request.js";
import {
  usersAlbumsVideosVideoIdSetAlbumThumbnailRequestSchema,
  type UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest,
} from "../models/users-albums-videos-video-id-set-album-thumbnail-request.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage showcase videos.
 */
export class ShowcasesShowcaseVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a specific video to a showcase
   *
   * @remarks
   * This method adds a single video to the specified showcase. The authenticated user must be the
   * owner of the showcase.
   *
   * @returns The video was added.
   *
   * @throws {@link ShowcasesShowcaseVideos.AddVideoToShowcaseError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToShowcase(
    request: ShowcasesShowcaseVideos.AddVideoToShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.AddVideoToShowcaseError,
      },
      options,
    );
  }

  /**
   * Add a specific video to a showcase
   *
   * @remarks
   * This method adds a single video to the specified showcase. The authenticated user must be the
   * owner of the showcase.
   *
   * @returns The video was added.
   *
   * @throws {@link ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToShowcaseAlt2(
    request: ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Get all the user's videos that can be added to or removed from a showcase
   *
   * @remarks
   * This method returns every video belonging to the authenticated user that can be added to or
   * removed from the specified showcase.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableShowcaseVideos(
    request: ShowcasesShowcaseVideos.GetAvailableShowcaseVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/albums/{album_id}/available_videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort2Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError,
      },
      options,
    );
  }

  /**
   * Get all the showcases to which the user can add or remove a specific video
   *
   * @remarks
   * This method returns every showcase to which the authenticated user can add or remove the
   * specified video. The user must be the owner of the showcase.
   *
   * @returns The showcases were returned.
   *
   * @throws {@link ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableVideoShowcases(
    request: ShowcasesShowcaseVideos.GetAvailableVideoShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/available_albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort74Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError,
      },
      options,
    );
  }

  /**
   * Get a specific video in a showcase
   *
   * @remarks
   * This method returns a single video belonging to the specified showcase. The authenticated user
   * must be the owner of the showcase.
   *
   * @returns The video was returned.
   *
   * @throws {@link ShowcasesShowcaseVideos.GetShowcaseVideoError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseVideo(
    request: ShowcasesShowcaseVideos.GetShowcaseVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ShowcasesShowcaseVideos.GetShowcaseVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideoError,
      },
      options,
    );
  }

  /**
   * Get a specific video in a showcase
   *
   * @remarks
   * This method returns a single video belonging to the specified showcase. The authenticated user
   * must be the owner of the showcase.
   *
   * @returns The video was returned.
   *
   * @throws {@link ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseVideoAlt2(
    request: ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error,
      },
      options,
    );
  }

  /**
   * Get all the videos in a showcase
   *
   * @remarks
   * This method returns every video in the specified showcase. The authenticated user must be the
   * owner of the showcase.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ShowcasesShowcaseVideos.GetShowcaseVideosError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseVideos(
    request: ShowcasesShowcaseVideos.GetShowcaseVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter10Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort21Schema)) },
          { name: "weak_search", value: request.weakSearch, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideosError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a showcase
   *
   * @remarks
   * This method returns every video in the specified showcase. The authenticated user must be the
   * owner of the showcase.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseVideosAlt2(
    request: ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter10Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort21Schema)) },
          { name: "weak_search", value: request.weakSearch, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error,
      },
      options,
    );
  }

  /**
   * Remove a video from a showcase
   *
   * @remarks
   * This method removes the specified video from its showcase. The authenticated user must be the
   * owner of the showcase.
   *
   * @returns The video was removed.
   *
   * @throws {@link ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideoFromShowcase(
    request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError,
      },
      options,
    );
  }

  /**
   * Remove a video from a showcase
   *
   * @remarks
   * This method removes the specified video from its showcase. The authenticated user must be the
   * owner of the showcase.
   *
   * @returns The video was removed.
   *
   * @throws {@link ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideoFromShowcaseAlt2(
    request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Replace all the videos in a showcase
   *
   * @remarks
   * This method replaces all the videos in the specified showcase with a new set of one or more
   * videos. The authenticated user must be the owner of the showcase.
   *
   * @returns The videos were replaced.
   *
   * @throws {@link ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceVideosInShowcase(
    request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersAlbumsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError,
      },
      options,
    );
  }

  /**
   * Replace all the videos in a showcase
   *
   * @remarks
   * This method replaces all the videos in the specified showcase with a new set of one or more
   * videos. The authenticated user must be the owner of the showcase.
   *
   * @returns The videos were replaced.
   *
   * @throws {@link ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceVideosInShowcaseAlt2(
    request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meAlbumsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Set the featured video of a showcase
   *
   * @remarks
   * This method sets the featured video of the specified showcase. The authenticated user must be
   * the owner of the showcase, and the featured video must belong to it.
   *
   * @returns The video is now the featured video of the showcase.
   *
   * @throws {@link ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setVideoAsShowcaseFeatured(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_featured_video",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError,
      },
      options,
    );
  }

  /**
   * Set the featured video of a showcase
   *
   * @remarks
   * This method sets the featured video of the specified showcase. The authenticated user must be
   * the owner of the showcase, and the featured video must belong to it.
   *
   * @returns The video is now the featured video of the showcase.
   *
   * @throws {@link ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setVideoAsShowcaseFeaturedAlt2(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos/{video_id}/set_featured_video"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error,
      },
      options,
    );
  }

  /**
   * Create a thumbnail for a showcase from a showcase video
   *
   * @remarks
   * This method creates a thumbnail image for a showcase from the specified frame of a showcase
   * video. The authenticated user must be the owner of the showcase.
   *
   * @returns The showcase thumbnail was created.
   *
   * @throws {@link ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setVideoAsShowcaseThumbnail(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsVideosVideoIdSetAlbumThumbnailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError,
      },
      options,
    );
  }

  /**
   * Create a thumbnail for a showcase from a showcase video
   *
   * @remarks
   * This method creates a thumbnail image for a showcase from the specified frame of a showcase
   * video. The authenticated user must be the owner of the showcase.
   *
   * @returns The showcase thumbnail was created.
   *
   * @throws {@link ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setVideoAsShowcaseThumbnailAlt2(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/videos/{video_id}/set_album_thumbnail"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meAlbumsVideosSetAlbumThumbnailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error,
      },
      options,
    );
  }
}

export namespace ShowcasesShowcaseVideos {
  export type AddVideoToShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoToShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoToShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoToShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAvailableShowcaseVideosRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
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
     *  * `default` - Sort the results by the default method.
     *  * `duration` - Sort the results by duration.
     *  * `last_user_action_event_date` - Sort the results by most recent user interaction.
     *  * `likes` - Sort the results by number of likes.
     *  * `modified_time` - Sort the results by last modification.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort2;
  };

  export class GetAvailableShowcaseVideosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetAvailableShowcaseVideosError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAvailableVideoShowcasesRequest = {
    /** The ID of the video. */
    videoId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
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
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort74;
  };

  export class GetAvailableVideoShowcasesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAvailableVideoShowcasesError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetShowcaseVideoRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
    /** The password of the showcase. */
    password?: string;
  };

  export class GetShowcaseVideoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseVideoAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the video. */
    videoId: number;
    /** The password of the showcase. */
    password?: string;
  };

  export class GetShowcaseVideoAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseVideoAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseVideosRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The page containing the video URI. */
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
     *  * `embeddable` - Filter the results by the **embeddable** attribute.
     *  * `playable` - Filter the results by the **playable** attribute.
     */
    filter?: Filter10;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The password of the showcase. */
    password?: string;
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
     *  * `default` - Sort the results by the default method.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `manual` - Sort the results by their manual order.
     *  * `modified_time` - Sort the results by last modification.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort21;
    /**
     * Whether to include private videos in the search. Please note that a separate search service
     * provides this functionality. The service performs a partial text search on the video's name.
     */
    weakSearch?: boolean;
  };

  export class GetShowcaseVideosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseVideosError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseVideosAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The page containing the video URI. */
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
     *  * `embeddable` - Filter the results by the **embeddable** attribute.
     *  * `playable` - Filter the results by the **playable** attribute.
     */
    filter?: Filter10;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The password of the showcase. */
    password?: string;
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
     *  * `default` - Sort the results by the default method.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `manual` - Sort the results by their manual order.
     *  * `modified_time` - Sort the results by last modification.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort21;
    /**
     * Whether to include private videos in the search. Please note that a separate search service
     * provides this functionality. The service performs a partial text search on the video's name.
     */
    weakSearch?: boolean;
  };

  export class GetShowcaseVideosAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseVideosAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveVideoFromShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class RemoveVideoFromShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<RemoveVideoFromShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveVideoFromShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class RemoveVideoFromShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<RemoveVideoFromShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceVideosInShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    body: UsersAlbumsVideosRequest;
  };

  export class ReplaceVideosInShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<ReplaceVideosInShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceVideosInShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    body: MeAlbumsVideosRequest;
  };

  export class ReplaceVideosInShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<ReplaceVideosInShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SetVideoAsShowcaseFeaturedRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class SetVideoAsShowcaseFeaturedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SetVideoAsShowcaseFeaturedError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetVideoAsShowcaseFeaturedAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class SetVideoAsShowcaseFeaturedAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SetVideoAsShowcaseFeaturedAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetVideoAsShowcaseThumbnailRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
    body?: UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest;
  };

  export class SetVideoAsShowcaseThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<SetVideoAsShowcaseThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetVideoAsShowcaseThumbnailAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the video. */
    videoId: number;
    body?: MeAlbumsVideosSetAlbumThumbnailRequest;
  };

  export class SetVideoAsShowcaseThumbnailAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<SetVideoAsShowcaseThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
