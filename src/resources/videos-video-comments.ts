import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class VideosVideoComments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createComment(
    request: VideosVideoComments.CreateCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.CreateCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/comments"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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

  createCommentAlt1(
    request: VideosVideoComments.CreateCommentAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.CreateCommentAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/comments"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
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

  createCommentReply(
    request: VideosVideoComments.CreateCommentReplyRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.CreateCommentReplyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/comments/{comment_id}/replies"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: videosCommentsRepliesRequestSchema },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.CreateCommentReplyError,
      },
      options,
    );
  }

  deleteComment(
    request: VideosVideoComments.DeleteCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosVideoComments.DeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/comments/{comment_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosVideoComments.DeleteCommentError,
      },
      options,
    );
  }

  editComment(
    request: VideosVideoComments.EditCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.EditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/comments/{comment_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
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

  getComment(
    request: VideosVideoComments.GetCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, VideosVideoComments.GetCommentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/comments/{comment_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: VideosVideoComments.GetCommentError,
      },
      options,
    );
  }

  getCommentReplies(
    request: VideosVideoComments.GetCommentRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentConnection, VideosVideoComments.GetCommentRepliesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/comments/{comment_id}/replies"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "comment_id", value: request.commentId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentConnectionSchema },
        errorFactory: VideosVideoComments.GetCommentRepliesError,
      },
      options,
    );
  }

  getComments(
    request: VideosVideoComments.GetCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentConnection, ResponseError> {
    return this.#rawClient.execute<CommentConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/comments"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getCommentsAlt1(
    request: VideosVideoComments.GetCommentsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<CommentConnection, ResponseError> {
    return this.#rawClient.execute<CommentConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/comments"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideosVideoComments {
  export type CreateCommentRequest = {
    videoId: number;
    body?: VideosCommentsRequest;
  };

  export class CreateCommentError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateCommentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateCommentAlt1Request = {
    channelId: number;
    videoId: number;
    body?: ChannelsVideosCommentsRequest;
  };

  export class CreateCommentAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateCommentAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateCommentReplyRequest = {
    commentId: number;
    videoId: number;
    body: VideosCommentsRepliesRequest;
  };

  export class CreateCommentReplyError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateCommentReplyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCommentRequest = {
    commentId: number;
    videoId: number;
  };

  export class DeleteCommentError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteCommentError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditCommentRequest = {
    commentId: number;
    videoId: number;
    body?: VideosCommentsRequest;
  };

  export class EditCommentError extends ResponseError<Declared<"error", Error> | Declared<"error2", Error>> {
    static readonly errors: ErrorDecoders<EditCommentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCommentRequest = {
    commentId: number;
    videoId: number;
  };

  export class GetCommentError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCommentError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCommentRepliesRequest = {
    commentId: number;
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetCommentRepliesError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCommentRepliesError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCommentsRequest = {
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
  };

  export type GetCommentsAlt1Request = {
    channelId: number;
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
  };
}
