import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { meVideosRequest1Schema, type MeVideosRequest1 } from "../models/me-videos-request1.js";
import { uploadAttemptSchema, type UploadAttempt } from "../models/upload-attempt.js";
import { usersVideosRequest1Schema, type UsersVideosRequest1 } from "../models/users-videos-request1.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with video uploads.
 */
export class VideosUploads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Complete a streaming upload
   *
   * @remarks
   * This method completes the specified streaming upload of the authenticated user.
   *
   * @returns The streaming upload was completed.
   *
   * @throws {@link VideosUploads.CompleteStreamingUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  completeStreamingUpload(
    request: VideosUploads.CompleteStreamingUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosUploads.CompleteStreamingUploadError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/uploads/{upload_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "upload_id", value: request.uploadId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "video_file_id", value: request.videoFileId, schema: s.float64() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosUploads.CompleteStreamingUploadError,
      },
      options,
    );
  }

  /**
   * Get an upload attempt
   *
   * @remarks
   * This method returns the specified upload attempt of the authenticated user. _This method has
   * been deprecated. For information on our currently supported upload approaches, see our [Working
   * with Video Uploads](https://developer.vimeo.com/api/upload/videos) guide._
   *
   * @returns The upload attempt was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUploadAttempt(
    request: VideosUploads.GetUploadAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAttempt, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/uploads/{upload_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "upload_id", value: request.uploadId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadAttemptSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Upload a video
   *
   * @remarks
   * This method begins the video upload process for the authenticated user. For more information,
   * see our [upload documentation](https://developer.vimeo.com/api/upload/videos).
   *
   * @returns The upload procedure has begun.
   *
   * @throws {@link VideosUploads.UploadVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadVideo(
    request: VideosUploads.UploadVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosUploads.UploadVideoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersVideosRequest1Schema },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosUploads.UploadVideoError,
      },
      options,
    );
  }

  /**
   * Upload a video
   *
   * @remarks
   * This method begins the video upload process for the authenticated user. For more information,
   * see our [upload documentation](https://developer.vimeo.com/api/upload/videos).
   *
   * @returns The upload procedure has begun.
   *
   * @throws {@link VideosUploads.UploadVideoAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadVideoAlt1(
    request: VideosUploads.UploadVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosUploads.UploadVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the streaming upload. */
    uploadId: number;
    /** The ID of the user. */
    userId: number;
    /** The crypto signature of the completed upload. */
    signature: string;
    /** The ID of the uploaded file. */
    videoFileId: number;
  };

  export class CompleteStreamingUploadError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CompleteStreamingUploadError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUploadAttemptRequest = {
    /** The ID of the upload attempt. */
    uploadId: number;
    /** The ID of the user. */
    userId: number;
  };

  export type UploadVideoRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersVideosRequest1;
  };

  export class UploadVideoError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

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

  export class UploadVideoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<UploadVideoAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
