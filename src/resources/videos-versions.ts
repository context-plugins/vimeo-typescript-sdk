import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  alternateAudioTrackConnectionSchema,
  type AlternateAudioTrackConnection,
} from "../models/alternate-audio-track-connection.js";
import { alternateAudioTrackSchema, type AlternateAudioTrack } from "../models/alternate-audio-track.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  videoVersionConnectionSchema,
  type VideoVersionConnection,
} from "../models/video-version-connection.js";
import { videoVersionSchema, type VideoVersion } from "../models/video-version.js";
import {
  videosVersionsAudiotracksAudiotrackIdRequestSchema,
  type VideosVersionsAudiotracksAudiotrackIdRequest,
} from "../models/videos-versions-audiotracks-audiotrack-id-request.js";
import {
  videosVersionsAudiotracksRequestSchema,
  type VideosVersionsAudiotracksRequest,
} from "../models/videos-versions-audiotracks-request.js";
import {
  videosVersionsRequestSchema,
  type VideosVersionsRequest,
} from "../models/videos-versions-request.js";
import {
  videosVersionsRequest1Schema,
  type VideosVersionsRequest1,
} from "../models/videos-versions-request1.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with video versioning.
 */
export class VideosVersions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an audio track for a video version
   *
   * @remarks
   * This method creates a new audio track for a video version.
   *
   * @returns The audio track was created.
   *
   * @throws {@link VideosVersions.CreateAudioTrackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAudioTrack(
    request: VideosVersions.CreateAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrack, VideosVersions.CreateAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosVersionsAudiotracksRequestSchema },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackSchema },
        errorFactory: VideosVersions.CreateAudioTrackError,
      },
      options,
    );
  }

  /**
   * Add a version to a video
   *
   * @remarks
   * This method adds a version to the specified video. The authenticated user must be the owner of
   * the video.
   *
   * @returns The version was added.
   *
   * @throws {@link VideosVersions.CreateVideoVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVideoVersion(
    request: VideosVersions.CreateVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersion, VideosVersions.CreateVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosVersionsRequestSchema },
      },
      {
        success: { kind: "json", schema: videoVersionSchema },
        errorFactory: VideosVersions.CreateVideoVersionError,
      },
      options,
    );
  }

  /**
   * Delete an audio track from a video version
   *
   * @remarks
   * This method deletes an audio track from the specified video version.
   *
   * @returns The audio track was deleted.
   *
   * @throws {@link VideosVersions.DeleteAudioTrackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAudioTrack(
    request: VideosVersions.DeleteAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosVersions.DeleteAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "audiotrack_id", value: request.audiotrackId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosVersions.DeleteAudioTrackError,
      },
      options,
    );
  }

  /**
   * Delete a video version
   *
   * @remarks
   * This method deletes the specified version from a video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The video version was deleted.
   *
   * @throws {@link VideosVersions.DeleteVideoVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoVersion(
    request: VideosVersions.DeleteVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosVersions.DeleteVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosVersions.DeleteVideoVersionError,
      },
      options,
    );
  }

  /**
   * Edit an audio track for a video version
   *
   * @remarks
   * This method edits the metadata for the specified audio track.
   *
   * @returns The audio track was edited.
   *
   * @throws {@link VideosVersions.EditAudioTrackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editAudioTrack(
    request: VideosVersions.EditAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrack, VideosVersions.EditAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "audiotrack_id", value: request.audiotrackId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosVersionsAudiotracksAudiotrackIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackSchema },
        errorFactory: VideosVersions.EditAudioTrackError,
      },
      options,
    );
  }

  /**
   * Edit a video version
   *
   * @remarks
   * This method edits the specified version of a video. The authenticated user must be the owner of
   * the video.
   *
   * @returns The version was edited.
   *
   * @throws {@link VideosVersions.EditVideoVersionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVideoVersion(
    request: VideosVersions.EditVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersion, VideosVersions.EditVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosVersionsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: videoVersionSchema },
        errorFactory: VideosVersions.EditVideoVersionError,
      },
      options,
    );
  }

  /**
   * Get an audio track for a video version
   *
   * @remarks
   * This method returns the specified audio track that is associated with a video version.
   *
   * @returns The audio track was returned.
   *
   * @throws {@link VideosVersions.GetAudioTrackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudioTrack(
    request: VideosVersions.GetAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrack, VideosVersions.GetAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "audiotrack_id", value: request.audiotrackId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackSchema },
        errorFactory: VideosVersions.GetAudioTrackError,
      },
      options,
    );
  }

  /**
   * Get all audio tracks for a video version
   *
   * @remarks
   * This method returns all audio tracks that are associated with the specified video version.
   *
   * @returns The audio tracks were returned.
   *
   * @throws {@link VideosVersions.GetAudioTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudioTracks(
    request: VideosVersions.GetAudioTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrackConnection, VideosVersions.GetAudioTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackConnectionSchema },
        errorFactory: VideosVersions.GetAudioTracksError,
      },
      options,
    );
  }

  /**
   * Get a list of downloadable file links for a video with an alternate audio track
   *
   * @remarks
   * This method returns a list of downloadable file links for a version of a video that contains
   * the specified alternate audio track.
   *
   * @returns The list of downloadable file links was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudiotrackDownloads(
    request: VideosVersions.GetAudiotrackDownloadsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}/downloads"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
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
   * Get the thumbnail for a video version
   *
   * @remarks
   * This method returns the thumbnail associated with the specified version of a video.
   *
   * @returns The version thumbnail was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVersionThumbnail(
    request: VideosVersions.GetVersionThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}/picture"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
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
   * Get a specific video version
   *
   * @remarks
   * This method returns a single version of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The video version was returned.
   *
   * @throws {@link VideosVersions.GetVideoVersionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoVersion(
    request: VideosVersions.GetVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersion, VideosVersions.GetVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoVersionSchema },
        errorFactory: VideosVersions.GetVideoVersionError,
      },
      options,
    );
  }

  /**
   * Get all the versions of a video
   *
   * @remarks
   * This method returns every version of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The versions were returned.
   *
   * @throws {@link VideosVersions.GetVideoVersionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoVersions(
    request: VideosVersions.GetVideoVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersionConnection, VideosVersions.GetVideoVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions"),
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
        success: { kind: "json", schema: videoVersionConnectionSchema },
        errorFactory: VideosVersions.GetVideoVersionsError,
      },
      options,
    );
  }

  /**
   * Get all the versions of a video
   *
   * @remarks
   * This method returns every version of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The versions were returned.
   *
   * @throws {@link VideosVersions.GetVideoVersionsAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoVersionsAlt1(
    request: VideosVersions.GetVideoVersionsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoVersionConnection, VideosVersions.GetVideoVersionsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/versions"),
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
        success: { kind: "json", schema: videoVersionConnectionSchema },
        errorFactory: VideosVersions.GetVideoVersionsAlt1Error,
      },
      options,
    );
  }
}

export namespace VideosVersions {
  export type CreateAudioTrackRequest = {
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
    body: VideosVersionsAudiotracksRequest;
  };

  export class CreateAudioTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateVideoVersionRequest = {
    /** The ID of the video. */
    videoId: number;
    body: VideosVersionsRequest;
  };

  export class CreateVideoVersionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateVideoVersionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAudioTrackRequest = {
    /** The ID of the audio track. */
    audiotrackId: string;
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteAudioTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoVersionRequest = {
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoVersionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoVersionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditAudioTrackRequest = {
    /** The ID of the audio track. */
    audiotrackId: string;
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosVersionsAudiotracksAudiotrackIdRequest;
  };

  export class EditAudioTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<EditAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVideoVersionRequest = {
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosVersionsRequest1;
  };

  export class EditVideoVersionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<EditVideoVersionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAudioTrackRequest = {
    /** The ID of the audio track. */
    audiotrackId: string;
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAudioTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAudioTracksRequest = {
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAudioTracksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetAudioTracksError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAudiotrackDownloadsRequest = {
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type GetVersionThumbnailRequest = {
    /** The ID of the version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type GetVideoVersionRequest = {
    /** The ID of the video version. */
    versionId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetVideoVersionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoVersionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoVersionsRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVideoVersionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoVersionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoVersionsAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVideoVersionsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoVersionsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
