import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

export class VideosUnlistedVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoPrivacyUser(
    request: VideosUnlistedVideos.AddVideoPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<User, VideosUnlistedVideos.AddVideoPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/privacy/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: VideosUnlistedVideos.AddVideoPrivacyUserError,
      },
      options,
    );
  }

  addVideoPrivacyUsers(
    request: VideosUnlistedVideos.AddVideoPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<User[], ResponseError> {
    return this.#rawClient.execute<User[], ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/privacy/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  addVideoPrivacyUsersAlt1(
    request: VideosUnlistedVideos.AddVideoPrivacyUsersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<User[], ResponseError> {
    return this.#rawClient.execute<User[], ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/privacy/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteVideoPrivacyUser(
    request: VideosUnlistedVideos.DeleteVideoPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosUnlistedVideos.DeleteVideoPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/privacy/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosUnlistedVideos.DeleteVideoPrivacyUserError,
      },
      options,
    );
  }

  getVideoPrivacyUsers(
    request: VideosUnlistedVideos.GetVideoPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/privacy/users"),
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
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: VideosUnlistedVideos.GetVideoPrivacyUsersError,
      },
      options,
    );
  }

  getVideoPrivacyUsersAlt1(
    request: VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, VideosUnlistedVideos.GetVideoPrivacyUsersAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/privacy/users"),
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
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
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
    userId: number;
    videoId: number;
  };

  export class AddVideoPrivacyUserError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<AddVideoPrivacyUserError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoPrivacyUsersRequest = {
    videoId: number;
  };

  export type AddVideoPrivacyUsersAlt1Request = {
    channelId: number;
    videoId: number;
  };

  export type DeleteVideoPrivacyUserRequest = {
    userId: number;
    videoId: number;
  };

  export class DeleteVideoPrivacyUserError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVideoPrivacyUserError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoPrivacyUsersRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVideoPrivacyUsersError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoPrivacyUsersError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoPrivacyUsersAlt1Request = {
    channelId: number;
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVideoPrivacyUsersAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoPrivacyUsersAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
