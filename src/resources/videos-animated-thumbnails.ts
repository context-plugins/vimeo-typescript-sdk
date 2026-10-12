import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  animatedThumbsetConnectionSchema,
  type AnimatedThumbsetConnection,
} from "../models/animated-thumbset-connection.js";
import { animatedThumbsetSchema, type AnimatedThumbset } from "../models/animated-thumbset.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  videosAnimatedThumbsetsRequestSchema,
  type VideosAnimatedThumbsetsRequest,
} from "../models/videos-animated-thumbsets-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with animated thumbnails for videos.
 */
export class VideosAnimatedThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a set of animated thumbnails for a video
   *
   * @remarks
   * This method creates a set of animated thumbnails for the specified video. Please note that you
   * can't create more than four sets of animated thumbnails for the same video.
   *
   * @returns The set of animated thumbnails was created.
   *
   * @throws {@link VideosAnimatedThumbnails.CreateAnimatedThumbsetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAnimatedThumbset(
    request: VideosAnimatedThumbnails.CreateAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.CreateAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/animated_thumbsets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosAnimatedThumbsetsRequestSchema },
      },
      {
        success: { kind: "json", schema: animatedThumbsetSchema },
        errorFactory: VideosAnimatedThumbnails.CreateAnimatedThumbsetError,
      },
      options,
    );
  }

  /**
   * Delete a set of animated thumbnails for a video
   *
   * @remarks
   * This method deletes a set of animated thumbnails for the specified video.
   *
   * @returns The set of animated thumbnails was deleted.
   *
   * @throws {@link VideosAnimatedThumbnails.DeleteAnimatedThumbsetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAnimatedThumbset(
    request: VideosAnimatedThumbnails.DeleteAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAnimatedThumbnails.DeleteAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/animated_thumbsets/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAnimatedThumbnails.DeleteAnimatedThumbsetError,
      },
      options,
    );
  }

  /**
   * Get all the animated thumbnails of a video
   *
   * @remarks
   * This method returns all the sets of animated thumbnails associated with the specified video.
   * The authenticated user must be the owner of the video.
   *
   * @returns The sets of animated thumbnails were returned.
   *
   * @throws {@link VideosAnimatedThumbnails.GetAllAnimatedThumbsetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAnimatedThumbset(
    request: VideosAnimatedThumbnails.GetAllAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbsetConnection, VideosAnimatedThumbnails.GetAllAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/animated_thumbsets"),
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
        success: { kind: "json", schema: animatedThumbsetConnectionSchema },
        errorFactory: VideosAnimatedThumbnails.GetAllAnimatedThumbsetError,
      },
      options,
    );
  }

  /**
   * Get a specific set of animated thumbnails
   *
   * @remarks
   * This method returns a particular set of animated thumbnails associated with the specified
   * video. The authenticated user must be the owner of the video.
   *
   * @returns The set of animated thumbnails was returned.
   *
   * @throws {@link VideosAnimatedThumbnails.GetAnimatedThumbsetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnimatedThumbset(
    request: VideosAnimatedThumbnails.GetAnimatedThumbsetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/animated_thumbsets/{picture_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: animatedThumbsetSchema },
        errorFactory: VideosAnimatedThumbnails.GetAnimatedThumbsetError,
      },
      options,
    );
  }

  /**
   * Get the status of a set of animated thumbnails
   *
   * @remarks
   * This method returns the status of a particular set of animated thumbnails associated with the
   * specified video. The status indicates whether the thumbnails are ready to use. The
   * authenticated user must be the owner of the video.
   *
   * @returns The status of the set of animated thumbnails was returned.
   *
   * @throws {@link VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnimatedThumbsetStatus(
    request: VideosAnimatedThumbnails.GetAnimatedThumbsetStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AnimatedThumbset, VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/animated_thumbsets/{picture_id}/status"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "picture_id", value: request.pictureId, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: animatedThumbsetSchema },
        errorFactory: VideosAnimatedThumbnails.GetAnimatedThumbsetStatusError,
      },
      options,
    );
  }
}

export namespace VideosAnimatedThumbnails {
  export type CreateAnimatedThumbsetRequest = {
    /** The ID of the video. */
    videoId: number;
    body: VideosAnimatedThumbsetsRequest;
  };

  export class CreateAnimatedThumbsetError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateAnimatedThumbsetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 429, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteAnimatedThumbsetRequest = {
    /** The UUID of the set of animated thumbnails. */
    pictureId: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteAnimatedThumbsetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeleteAnimatedThumbsetError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllAnimatedThumbsetRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetAllAnimatedThumbsetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAllAnimatedThumbsetError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnimatedThumbsetRequest = {
    /** The UUID of the set of animated thumbnails. */
    pictureId: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAnimatedThumbsetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAnimatedThumbsetError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnimatedThumbsetStatusRequest = {
    /** The UUID of the set of animated thumbnails. */
    pictureId: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAnimatedThumbsetStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAnimatedThumbsetStatusError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
