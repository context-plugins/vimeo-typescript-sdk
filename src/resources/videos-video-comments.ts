import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  channelsVideosCommentsRequestSchema,
  type ChannelsVideosCommentsRequest,
} from "../models/channels-videos-comments-request.js";
import { commentConnectionSchema, type CommentConnection } from "../models/comment-connection.js";
import { commentSchema, type Comment } from "../models/comment.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  videosCommentsRepliesRequestSchema,
  type VideosCommentsRepliesRequest,
} from "../models/videos-comments-replies-request.js";
import {
  videosCommentsRequestSchema,
  type VideosCommentsRequest,
} from "../models/videos-comments-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with video comments.
 */
export class VideosVideoComments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video comment to a video
   *
   * @remarks
   * This method adds a video comment to the specified video.
   *
   * @returns The comment was added.
   *
   * @throws {@link VideosVideoComments.CreateCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComment(
    request: VideosVideoComments.CreateCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.CreateCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments"),
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
          schema: s.optional(s.lazy(() => videosCommentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.CreateCommentError,
      },
      options,
    );
  }

  /**
   * Add a video comment to a video
   *
   * @remarks
   * This method adds a video comment to the specified video.
   *
   * @returns The comment was added.
   *
   * @throws {@link VideosVideoComments.CreateCommentAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCommentAlt1(
    request: VideosVideoComments.CreateCommentAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.CreateCommentAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/comments"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => channelsVideosCommentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.CreateCommentAlt1Error,
      },
      options,
    );
  }

  /**
   * Add a reply to a video comment
   *
   * @remarks
   * This method adds a reply to the specified video comment.
   *
   * @returns The reply was added.
   *
   * @throws {@link VideosVideoComments.CreateCommentReplyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCommentReply(
    request: VideosVideoComments.CreateCommentReplyRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.CreateCommentReplyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments/{comment_id}/replies"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosCommentsRepliesRequestSchema },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.CreateCommentReplyError,
      },
      options,
    );
  }

  /**
   * Delete a video comment
   *
   * @remarks
   * This method deletes the specified video comment. The authenticated user must be the owner of
   * the comment.
   *
   * @returns The comment was deleted.
   *
   * @throws {@link VideosVideoComments.DeleteCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteComment(
    request: VideosVideoComments.DeleteCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosVideoComments.DeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments/{comment_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosVideoComments.DeleteCommentError,
      },
      options,
    );
  }

  /**
   * Edit a video comment
   *
   * @remarks
   * This method edits the specified video comment. The authenticated user must be the owner of the
   * comment.
   *
   * @returns The comment was edited.
   *
   * @throws {@link VideosVideoComments.EditCommentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editComment(
    request: VideosVideoComments.EditCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.EditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments/{comment_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosCommentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.EditCommentError,
      },
      options,
    );
  }

  /**
   * Get a specific video comment
   *
   * @remarks
   * This method returns the specified video comment.
   *
   * @returns The comment was returned.
   *
   * @throws {@link VideosVideoComments.GetCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getComment(
    request: VideosVideoComments.GetCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.GetCommentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments/{comment_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.GetCommentError,
      },
      options,
    );
  }

  /**
   * Get all the replies to a video comment
   *
   * @remarks
   * This method returns every reply to the specified video comment.
   *
   * @returns The replies were returned.
   *
   * @throws {@link VideosVideoComments.GetCommentRepliesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommentReplies(
    request: VideosVideoComments.GetCommentRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentConnection, VideosVideoComments.GetCommentRepliesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments/{comment_id}/replies"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.float64() },
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
        success: { kind: "json", schema: commentConnectionSchema },
        errorFactory: VideosVideoComments.GetCommentRepliesError,
      },
      options,
    );
  }

  /**
   * Get all the video comments on a video
   *
   * @remarks
   * This method returns every video comment on the specified video.
   *
   * @returns The comments were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getComments(
    request: VideosVideoComments.GetCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/comments"),
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
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the video comments on a video
   *
   * @remarks
   * This method returns every video comment on the specified video.
   *
   * @returns The comments were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommentsAlt1(
    request: VideosVideoComments.GetCommentsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<CommentConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/comments"),
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
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideosVideoComments {
  export type CreateCommentRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosCommentsRequest;
  };

  export class CreateCommentError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateCommentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateCommentAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    body?: ChannelsVideosCommentsRequest;
  };

  export class CreateCommentAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateCommentAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateCommentReplyRequest = {
    /** The ID of the comment. */
    commentId: number;
    /** The ID of the video. */
    videoId: number;
    body: VideosCommentsRepliesRequest;
  };

  export class CreateCommentReplyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateCommentReplyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCommentRequest = {
    /** The ID of the comment. */
    commentId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteCommentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteCommentError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditCommentRequest = {
    /** The ID of the comment. */
    commentId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosCommentsRequest;
  };

  export class EditCommentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EditCommentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCommentRequest = {
    /** The ID of the comment. */
    commentId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetCommentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCommentError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCommentRepliesRequest = {
    /** The ID of the comment. */
    commentId: number;
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetCommentRepliesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCommentRepliesError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCommentsRequest = {
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
  };

  export type GetCommentsAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
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
  };
}
