import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

export class EmbedPresetsVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoEmbedPreset(
    request: EmbedPresetsVideos.AddVideoEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
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

  deleteVideoEmbedPreset(
    request: EmbedPresetsVideos.DeleteVideoEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsVideos.DeleteVideoEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsVideos.DeleteVideoEmbedPresetError,
      },
      options,
    );
  }

  getEmbedPresetVideos(
    request: EmbedPresetsVideos.GetEmbedPresetVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ResponseError> {
    return this.#rawClient.execute<VideoConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/presets/{preset_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEmbedPresetVideosAlt1(
    request: EmbedPresetsVideos.GetEmbedPresetVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ResponseError> {
    return this.#rawClient.execute<VideoConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/presets/{preset_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoEmbedPreset(
    request: EmbedPresetsVideos.GetVideoEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsVideos.GetVideoEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
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
    presetId: number;
    videoId: number;
  };

  export type DeleteVideoEmbedPresetRequest = {
    presetId: number;
    videoId: number;
  };

  export class DeleteVideoEmbedPresetError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoEmbedPresetError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetEmbedPresetVideosRequest = {
    presetId: number;
    userId: number;
    page?: number;
    perPage?: number;
  };

  export type GetEmbedPresetVideosAlt1Request = {
    presetId: number;
    page?: number;
    perPage?: number;
  };

  export type GetVideoEmbedPresetRequest = {
    presetId: number;
    videoId: number;
  };

  export class GetVideoEmbedPresetError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoEmbedPresetError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
