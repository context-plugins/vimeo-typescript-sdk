import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { meVideosRequest1Schema, type MeVideosRequest1 } from "../models/me-videos-request1.js";
import { uploadAttemptSchema, type UploadAttempt } from "../models/upload-attempt.js";
import { usersVideosRequest1Schema, type UsersVideosRequest1 } from "../models/users-videos-request1.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class VideosUploads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  completeStreamingUpload(
    request: VideosUploads.CompleteStreamingUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosUploads.CompleteStreamingUploadError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/uploads/{upload_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "upload_id", value: request.uploadId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "video_file_id", value: request.videoFileId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosUploads.CompleteStreamingUploadError,
      },
      options,
    );
  }

  getUploadAttempt(
    request: VideosUploads.GetUploadAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAttempt, ResponseError> {
    return this.#rawClient.execute<UploadAttempt, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/uploads/{upload_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "upload_id", value: request.uploadId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadAttemptSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  uploadVideo(
    request: VideosUploads.UploadVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosUploads.UploadVideoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersVideosRequest1Schema },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosUploads.UploadVideoError,
      },
      options,
    );
  }

  uploadVideoAlt1(
    request: VideosUploads.UploadVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosUploads.UploadVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meVideosRequest1Schema },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosUploads.UploadVideoAlt1Error,
      },
      options,
    );
  }
}

export namespace VideosUploads {
  export type CompleteStreamingUploadRequest = {
    uploadId: number;
    userId: number;
    signature: string;
    videoFileId: number;
  };

  export class CompleteStreamingUploadError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CompleteStreamingUploadError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUploadAttemptRequest = {
    uploadId: number;
    userId: number;
  };

  export type UploadVideoRequest = {
    userId: number;
    body: UsersVideosRequest1;
  };

  export class UploadVideoError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<UploadVideoError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UploadVideoAlt1Request = {
    body: MeVideosRequest1;
  };

  export class UploadVideoAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<UploadVideoAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
