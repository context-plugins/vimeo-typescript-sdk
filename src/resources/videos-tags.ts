import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort47Schema, type Sort47 } from "../models/sort47.js";
import { tagConnectionSchema, type TagConnection } from "../models/tag-connection.js";
import { tagSchema, type Tag } from "../models/tag.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with associated tags.
 */
export class VideosTags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a specific tag to a video
   *
   * @remarks
   * This method adds a single tag to the specified video. The authenticated user must have edit
   * access to the video.
   *
   * @returns The tag was added.
   *
   * @throws {@link VideosTags.AddVideoTagError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoTag(
    request: VideosTags.AddVideoTagRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag, VideosTags.AddVideoTagError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: VideosTags.AddVideoTagError,
      },
      options,
    );
  }

  /**
   * Add a list of tags to a video
   *
   * @remarks
   * This method adds multiple tags to the specified video. Include the tags as a JSON array as the
   * body of the request with the **name** field, like this: `[{ "name": "funny"}, {"name":
   * "concert" }]`. The authenticated user must have edit access to the video. For more information
   * on batch requests like this one, see [Using Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
   *
   * @returns The tags were added.
   *
   * @throws {@link VideosTags.AddVideoTagsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoTags(
    request: VideosTags.AddVideoTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag[], VideosTags.AddVideoTagsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/tags"),
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
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tagSchema)) },
        errorFactory: VideosTags.AddVideoTagsError,
      },
      options,
    );
  }

  /**
   * Check if a tag has been added to a video
   *
   * @remarks
   * This method determines whether the specified tag has been added to a video. The authenticated
   * user must be the owner of the video.
   *
   * @returns The tag has been added to the video.
   *
   * @throws {@link VideosTags.CheckVideoForTagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkVideoForTag(
    request: VideosTags.CheckVideoForTagRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag, VideosTags.CheckVideoForTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: VideosTags.CheckVideoForTagError,
      },
      options,
    );
  }

  /**
   * Remove a tag from a video
   *
   * @remarks
   * This method removes the specified tag from a video. The authenticated user must have edit
   * access to the video.
   *
   * @returns The tag was removed.
   *
   * @throws {@link VideosTags.DeleteVideoTagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoTag(
    request: VideosTags.DeleteVideoTagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosTags.DeleteVideoTagError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosTags.DeleteVideoTagError,
      },
      options,
    );
  }

  /**
   * Get all the tags of a video
   *
   * @remarks
   * This method returns all the tags associated with the specified video. The authenticated user
   * must be the owner of the video.
   *
   * @returns The tags were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoTags(
    request: VideosTags.GetVideoTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/tags"),
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
        success: { kind: "json", schema: tagConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the videos with a specific tag
   *
   * @remarks
   * This method returns all the public videos associated with the specified tag.
   *
   * @returns The videos were returned.
   *
   * @throws {@link VideosTags.GetVideosWithTagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideosWithTag(
    request: VideosTags.GetVideosWithTagRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosTags.GetVideosWithTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tags/{word}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "word", value: request.word, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort47Schema)) },
        ],
        headers: [],
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
    /** The ID of the video. */
    videoId: number;
    /** The tag word. */
    word: string;
  };

  export class AddVideoTagError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoTagsRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class AddVideoTagsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVideoTagsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckVideoForTagRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The tag word. */
    word: string;
  };

  export class CheckVideoForTagError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CheckVideoForTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoTagRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The tag word. */
    word: string;
  };

  export class DeleteVideoTagError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteVideoTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoTagsRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetVideosWithTagRequest = {
    /** The tag word. */
    word: string;
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
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `created_time` - Sort the results by creation time.
     *  * `duration` - Sort the results by duration.
     *  * `name` - Sort the results by name.
     */
    sort?: Sort47;
  };

  export class GetVideosWithTagError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideosWithTagError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
