import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort47Schema, type Sort47 } from "../models/sort47.js";
import { tagConnectionSchema, type TagConnection } from "../models/tag-connection.js";
import { tagSchema, type Tag } from "../models/tag.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

export class VideosTags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoTag(
    request: VideosTags.AddVideoTagRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag, VideosTags.AddVideoTagError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: VideosTags.AddVideoTagError,
      },
      options,
    );
  }

  addVideoTags(
    request: VideosTags.AddVideoTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag[], VideosTags.AddVideoTagsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/tags"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tagSchema)) },
        errorFactory: VideosTags.AddVideoTagsError,
      },
      options,
    );
  }

  checkVideoForTag(
    request: VideosTags.CheckVideoForTagRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag, VideosTags.CheckVideoForTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: VideosTags.CheckVideoForTagError,
      },
      options,
    );
  }

  deleteVideoTag(
    request: VideosTags.DeleteVideoTagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosTags.DeleteVideoTagError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosTags.DeleteVideoTagError,
      },
      options,
    );
  }

  getVideoTags(
    request: VideosTags.GetVideoTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagConnection, ResponseError> {
    return this.#rawClient.execute<TagConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/tags"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideosWithTag(
    request: VideosTags.GetVideosWithTagRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosTags.GetVideosWithTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/tags/{word}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "word", value: request.word, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort47Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosTags.GetVideosWithTagError,
      },
      options,
    );
  }
}

export namespace VideosTags {
  export type AddVideoTagRequest = {
    videoId: number;
    word: string;
  };

  export class AddVideoTagError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoTagsRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class AddVideoTagsError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoTagsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckVideoForTagRequest = {
    videoId: number;
    word: string;
  };

  export class CheckVideoForTagError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CheckVideoForTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoTagRequest = {
    videoId: number;
    word: string;
  };

  export class DeleteVideoTagError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoTagsRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export type GetVideosWithTagRequest = {
    word: string;
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort47;
  };

  export class GetVideosWithTagError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideosWithTagError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
