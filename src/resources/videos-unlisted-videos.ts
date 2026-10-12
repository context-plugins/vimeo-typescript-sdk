import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with unlisted videos.
 */
export class VideosUnlistedVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Permit a single user to access an unlisted video
   *
   * @remarks
   * This method gives a single user permission to access the specified unlisted video. The
   * authenticated user must be the owner of the video.
   *
   * @returns The user was granted access to the unlisted video.
   *
   * @throws {@link VideosUnlistedVideos.AddVideoPrivacyUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoPrivacyUser(
    request: VideosUnlistedVideos.AddVideoPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<User, VideosUnlistedVideos.AddVideoPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: VideosUnlistedVideos.AddVideoPrivacyUserError,
      },
      options,
    );
  }

  /**
   * Permit a list of users to access an unlisted video
   *
   * @remarks
   * This method gives multiple users permission to access the specified unlisted video. The
   * authenticated user must be the owner of the video. The body of the request should follow our
   * [batch request
   * format](https://developer.vimeo.com/api/common-formats#working-with-batch-requests): each
   * object must contain a single **uri** field whose value is the URI of the user who can access
   * the video.
   *
   * @returns The users were granted access to the unlisted video.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoPrivacyUsers(
    request: VideosUnlistedVideos.AddVideoPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<User[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Permit a list of users to access an unlisted video
   *
   * @remarks
   * This method gives multiple users permission to access the specified unlisted video. The
   * authenticated user must be the owner of the video. The body of the request should follow our
   * [batch request
   * format](https://developer.vimeo.com/api/common-formats#working-with-batch-requests): each
   * object must contain a single **uri** field whose value is the URI of the user who can access
   * the video.
   *
   * @returns The users were granted access to the unlisted video.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoPrivacyUsersAlt1(
    request: VideosUnlistedVideos.AddVideoPrivacyUsersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<User[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/privacy/users"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restrict a user from viewing an unlisted video
   *
   * @remarks
   * This method prevents a user from being able to view the specified unlisted video. The
   * authenticated user must be the owner of the video.
   *
   * @returns The user was restricted from accessing the unlisted video.
   *
   * @throws {@link VideosUnlistedVideos.DeleteVideoPrivacyUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoPrivacyUser(
    request: VideosUnlistedVideos.DeleteVideoPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosUnlistedVideos.DeleteVideoPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosUnlistedVideos.DeleteVideoPrivacyUserError,
      },
      options,
    );
  }

  /**
   * Get the users who can access an unlisted video
   *
   * @remarks
   * This method returns every user who has access to the specified unlisted video.
   *
   * @returns The users were returned.
   *
   * @throws {@link VideosUnlistedVideos.GetVideoPrivacyUsersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoPrivacyUsers(
    request: VideosUnlistedVideos.GetVideoPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/users"),
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
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: VideosUnlistedVideos.GetVideoPrivacyUsersError,
      },
      options,
    );
  }

  /**
   * Get the users who can access an unlisted video
   *
   * @remarks
   * This method returns every user who has access to the specified unlisted video.
   *
   * @returns The users were returned.
   *
   * @throws {@link VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoPrivacyUsersAlt1(
    request: VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/videos/{video_id}/privacy/users"),
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
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error,
      },
      options,
    );
  }
}

export namespace VideosUnlistedVideos {
  export type AddVideoPrivacyUserRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoPrivacyUserError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<AddVideoPrivacyUserError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoPrivacyUsersRequest = {
    /** The ID of the video. */
    videoId: number;
  };

  export type AddVideoPrivacyUsersAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export type DeleteVideoPrivacyUserRequest = {
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoPrivacyUserError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVideoPrivacyUserError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoPrivacyUsersRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVideoPrivacyUsersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoPrivacyUsersError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoPrivacyUsersAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVideoPrivacyUsersAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoPrivacyUsersAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
