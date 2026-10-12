import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  channelsVideosTexttracksRequestSchema,
  type ChannelsVideosTexttracksRequest,
} from "../models/channels-videos-texttracks-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { textTrackConnectionSchema, type TextTrackConnection } from "../models/text-track-connection.js";
import { textTrackSchema, type TextTrack } from "../models/text-track.js";
import {
  videosTexttracksRequestSchema,
  type VideosTexttracksRequest,
} from "../models/videos-texttracks-request.js";
import {
  videosTexttracksRequest1Schema,
  type VideosTexttracksRequest1,
} from "../models/videos-texttracks-request1.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with video text tracks.
 */
export class VideosTextTracks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a text track to a video
   *
   * @remarks
   * This method adds a text track to the specified video. For more information, see [Working with
   * Text Track Uploads](https://developer.vimeo.com/api/upload/texttracks).
   *
   * @returns The text track was added.
   *
   * @throws {@link VideosTextTracks.CreateTextTrackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTextTrack(
    request: VideosTextTracks.CreateTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.CreateTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosTexttracksRequestSchema },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.CreateTextTrackError,
      },
      options,
    );
  }

  /**
   * Add a text track to a video
   *
   * @remarks
   * This method adds a text track to the specified video. For more information, see [Working with
   * Text Track Uploads](https://developer.vimeo.com/api/upload/texttracks).
   *
   * @returns The text track was added.
   *
   * @throws {@link VideosTextTracks.CreateTextTrackAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTextTrackAlt1(
    request: VideosTextTracks.CreateTextTrackAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.CreateTextTrackAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/texttracks"),
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
        body: { kind: "json", value: request.body, schema: channelsVideosTexttracksRequestSchema },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.CreateTextTrackAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete a text track
   *
   * @remarks
   * This method deletes the specified text track from a video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The text track was deleted.
   *
   * @throws {@link VideosTextTracks.DeleteTextTrackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTextTrack(
    request: VideosTextTracks.DeleteTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosTextTracks.DeleteTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosTextTracks.DeleteTextTrackError,
      },
      options,
    );
  }

  /**
   * Edit a text track
   *
   * @remarks
   * This method edits the specified text track of a video. The authenticated user must be the owner
   * of the video.
   *
   * @returns The text track was edited.
   *
   * @throws {@link VideosTextTracks.EditTextTrackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editTextTrack(
    request: VideosTextTracks.EditTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.EditTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosTexttracksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.EditTextTrackError,
      },
      options,
    );
  }

  /**
   * Get a specific text track
   *
   * @remarks
   * This method returns a single text track of the specified video. The authenticated user must be
   * the owner of the video.
   *
   * @returns The text track was returned.
   *
   * @throws {@link VideosTextTracks.GetTextTrackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTextTrack(
    request: VideosTextTracks.GetTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.GetTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.GetTextTrackError,
      },
      options,
    );
  }

  /**
   * Get all the text tracks of a video
   *
   * @remarks
   * This method returns every text track of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The text tracks were returned.
   *
   * @throws {@link VideosTextTracks.GetTextTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTextTracks(
    request: VideosTextTracks.GetTextTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/texttracks"),
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
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksError,
      },
      options,
    );
  }

  /**
   * Get all the text tracks of a video
   *
   * @remarks
   * This method returns every text track of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The text tracks were returned.
   *
   * @throws {@link VideosTextTracks.GetTextTracksAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTextTracksAlt1(
    request: VideosTextTracks.GetTextTracksAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/versions/{version_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "version_id", value: request.versionId, schema: s.string() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the text tracks of a video
   *
   * @remarks
   * This method returns every text track of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The text tracks were returned.
   *
   * @throws {@link VideosTextTracks.GetTextTracksAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTextTracksAlt2(
    request: VideosTextTracks.GetTextTracksAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/texttracks"),
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
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksAlt2Error,
      },
      options,
    );
  }

  /**
   * Get all the text tracks of a video
   *
   * @remarks
   * This method returns every text track of the specified video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The text tracks were returned.
   *
   * @throws {@link VideosTextTracks.GetTextTracksAlt3Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTextTracksAlt3(
    request: VideosTextTracks.GetTextTracksAlt3Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/albums/{album_id}/videos/{video_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
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
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksAlt3Error,
      },
      options,
    );
  }
}

export namespace VideosTextTracks {
  export type CreateTextTrackRequest = {
    /** The ID of the video. */
    videoId: number;
    body: VideosTexttracksRequest;
  };

  export class CreateTextTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateTextTrackError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateTextTrackAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    body: ChannelsVideosTexttracksRequest;
  };

  export class CreateTextTrackAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateTextTrackAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteTextTrackRequest = {
    /** The ID of the text track. */
    texttrackId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteTextTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteTextTrackError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditTextTrackRequest = {
    /** The ID of the text track. */
    texttrackId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosTexttracksRequest1;
  };

  export class EditTextTrackError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditTextTrackError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTrackRequest = {
    /** The ID of the text track. */
    texttrackId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetTextTrackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetTextTrackError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetTextTracksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetTextTracksError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksAlt1Request = {
    /** The ID of the video. */
    videoId: number;
    versionId: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetTextTracksAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetTextTracksAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksAlt2Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetTextTracksAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetTextTracksAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksAlt3Request = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetTextTracksAlt3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetTextTracksAlt3Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
