import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with videos that have embed presets.
 */
export class EmbedPresetsVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an embed preset to a video
   *
   * @remarks
   * This method adds an embed preset to the specified video. The authenticated user must either be
   * the owner of the video or a team user with the contributor or admin role.
   *
   * @returns The embed preset was added to the video.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoEmbedPreset(
    request: EmbedPresetsVideos.AddVideoEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
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
   * Remove an embed preset from a video
   *
   * @remarks
   * This method removes the specified embed preset from a video. The authenticated user must either
   * be the owner of the video or a team user with the contributor or admin role.
   *
   * @returns The embed preset was removed.
   *
   * @throws {@link EmbedPresetsVideos.DeleteVideoEmbedPresetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoEmbedPreset(
    request: EmbedPresetsVideos.DeleteVideoEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsVideos.DeleteVideoEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsVideos.DeleteVideoEmbedPresetError,
      },
      options,
    );
  }

  /**
   * Get all the videos that have a specific embed preset
   *
   * @remarks
   * This method returns every video to which the specified embed preset has been added. The
   * authenticated user must be the owner of the videos.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmbedPresetVideos(
    request: EmbedPresetsVideos.GetEmbedPresetVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/presets/{preset_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the videos that have a specific embed preset
   *
   * @remarks
   * This method returns every video to which the specified embed preset has been added. The
   * authenticated user must be the owner of the videos.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmbedPresetVideosAlt1(
    request: EmbedPresetsVideos.GetEmbedPresetVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/presets/{preset_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Check if an embed preset has been added to a video
   *
   * @remarks
   * This method determines whether a video has the specified embed preset.
   *
   * @returns The embed preset has been added to the video.
   *
   * @throws {@link EmbedPresetsVideos.GetVideoEmbedPresetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoEmbedPreset(
    request: EmbedPresetsVideos.GetVideoEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsVideos.GetVideoEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsVideos.GetVideoEmbedPresetError,
      },
      options,
    );
  }
}

export namespace EmbedPresetsVideos {
  export type AddVideoEmbedPresetRequest = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type DeleteVideoEmbedPresetRequest = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoEmbedPresetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoEmbedPresetError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetEmbedPresetVideosRequest = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The ID of the user. */
    userId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetEmbedPresetVideosAlt1Request = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetVideoEmbedPresetRequest = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetVideoEmbedPresetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoEmbedPresetError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
