import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter13Schema, type Filter13 } from "../models/filter13.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { meFollowingRequestSchema, type MeFollowingRequest } from "../models/me-following-request.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import {
  usersFollowingRequestSchema,
  type UsersFollowingRequest,
} from "../models/users-following-request.js";
import type { Servers } from "../servers.js";

export class UsersFollowers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfUserIsFollowing(
    request: UsersFollowers.CheckIfUserIsFollowingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.CheckIfUserIsFollowingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "follow_user_id", value: request.followUserId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.CheckIfUserIsFollowingError,
      },
      options,
    );
  }

  checkIfUserIsFollowingAlt1(
    request: UsersFollowers.CheckIfUserIsFollowingAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.CheckIfUserIsFollowingAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "follow_user_id", value: request.followUserId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.CheckIfUserIsFollowingAlt1Error,
      },
      options,
    );
  }

  followUser(
    request: UsersFollowers.FollowUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "follow_user_id", value: request.followUserId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUserError,
      },
      options,
    );
  }

  followUserAlt1(
    request: UsersFollowers.FollowUserAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUserAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "follow_user_id", value: request.followUserId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUserAlt1Error,
      },
      options,
    );
  }

  followUsers(
    request: UsersFollowers.FollowUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersFollowingRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUsersError,
      },
      options,
    );
  }

  followUsersAlt1(
    request: UsersFollowers.FollowUsersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUsersAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meFollowingRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUsersAlt1Error,
      },
      options,
    );
  }

  getFollowers(
    request: UsersFollowers.GetFollowersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/followers"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getFollowersAlt1(
    request: UsersFollowers.GetFollowersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/followers"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserFollowing(
    request: UsersFollowers.GetUserFollowingRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter13Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserFollowingAlt1(
    request: UsersFollowers.GetUserFollowingAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter13Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unfollowUser(
    request: UsersFollowers.UnfollowUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "follow_user_id", value: request.followUserId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
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

  unfollowUserAlt1(
    request: UsersFollowers.UnfollowUserAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/me/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "follow_user_id", value: request.followUserId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace UsersFollowers {
  export type CheckIfUserIsFollowingRequest = {
    followUserId: number;
    userId: number;
  };

  export class CheckIfUserIsFollowingError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserIsFollowingError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserIsFollowingAlt1Request = {
    followUserId: number;
  };

  export class CheckIfUserIsFollowingAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserIsFollowingAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type FollowUserRequest = {
    followUserId: number;
    userId: number;
  };

  export class FollowUserError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<FollowUserError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type FollowUserAlt1Request = {
    followUserId: number;
  };

  export class FollowUserAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<FollowUserAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type FollowUsersRequest = {
    userId: number;
    body: UsersFollowingRequest;
  };

  export class FollowUsersError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
  > {
    static readonly errors: ErrorDecoders<FollowUsersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FollowUsersAlt1Request = {
    body: MeFollowingRequest;
  };

  export class FollowUsersAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
  > {
    static readonly errors: ErrorDecoders<FollowUsersAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFollowersRequest = {
    userId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type GetFollowersAlt1Request = {
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type GetUserFollowingRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter13;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type GetUserFollowingAlt1Request = {
    direction?: Direction;
    filter?: Filter13;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type UnfollowUserRequest = {
    followUserId: number;
    userId: number;
  };

  export type UnfollowUserAlt1Request = {
    followUserId: number;
  };
}
