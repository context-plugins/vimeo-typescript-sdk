import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Use these methods to work with user followers.
 */
export class UsersFollowers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if the user is following another user
   *
   * @remarks
   * This method determines whether the authenticated user is a follower of the specified user.
   *
   * @returns The authenticated user follows the specified user.
   *
   * @throws {@link UsersFollowers.CheckIfUserIsFollowingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserIsFollowing(
    request: UsersFollowers.CheckIfUserIsFollowingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.CheckIfUserIsFollowingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "follow_user_id", value: request.followUserId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.CheckIfUserIsFollowingError,
      },
      options,
    );
  }

  /**
   * Check if the user is following another user
   *
   * @remarks
   * This method determines whether the authenticated user is a follower of the specified user.
   *
   * @returns The authenticated user follows the specified user.
   *
   * @throws {@link UsersFollowers.CheckIfUserIsFollowingAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserIsFollowingAlt1(
    request: UsersFollowers.CheckIfUserIsFollowingAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.CheckIfUserIsFollowingAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "follow_user_id", value: request.followUserId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.CheckIfUserIsFollowingAlt1Error,
      },
      options,
    );
  }

  /**
   * Follow a specific user
   *
   * @remarks
   * This method causes the authenticated user to become the follower of the specified user.
   *
   * @returns The user was followed.
   *
   * @throws {@link UsersFollowers.FollowUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followUser(
    request: UsersFollowers.FollowUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "follow_user_id", value: request.followUserId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUserError,
      },
      options,
    );
  }

  /**
   * Follow a specific user
   *
   * @remarks
   * This method causes the authenticated user to become the follower of the specified user.
   *
   * @returns The user was followed.
   *
   * @throws {@link UsersFollowers.FollowUserAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followUserAlt1(
    request: UsersFollowers.FollowUserAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUserAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "follow_user_id", value: request.followUserId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUserAlt1Error,
      },
      options,
    );
  }

  /**
   * Follow a list of users
   *
   * @remarks
   * This method causes the authenticated user to become a follower of multiple users. In the body
   * of the request, specify the list of users to follow as an array of URIs, where `user01_id`,
   * `user02_id`, `user03_id`, and so on, are the user IDs of the users in question:
   *
   * ```
   * {
   *  [
   *      {"uri" : "/users/{user01_id}"},
   *      {"uri" : "/users/{user02_id}"},
   *      {"uri" : "/users/{user03_id}"}
   *  ]
   * }
   * ```
   *
   * @returns The users were followed.
   *
   * @throws {@link UsersFollowers.FollowUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followUsers(
    request: UsersFollowers.FollowUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersFollowingRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUsersError,
      },
      options,
    );
  }

  /**
   * Follow a list of users
   *
   * @remarks
   * This method causes the authenticated user to become a follower of multiple users. In the body
   * of the request, specify the list of users to follow as an array of URIs, where `user01_id`,
   * `user02_id`, `user03_id`, and so on, are the user IDs of the users in question:
   *
   * ```
   * {
   *  [
   *      {"uri" : "/users/{user01_id}"},
   *      {"uri" : "/users/{user02_id}"},
   *      {"uri" : "/users/{user03_id}"}
   *  ]
   * }
   * ```
   *
   * @returns The users were followed.
   *
   * @throws {@link UsersFollowers.FollowUsersAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followUsersAlt1(
    request: UsersFollowers.FollowUsersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersFollowers.FollowUsersAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meFollowingRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersFollowers.FollowUsersAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the followers of the user
   *
   * @remarks
   * This method returns every follower of the authenticated user.
   *
   * @returns The user's followers were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFollowers(
    request: UsersFollowers.GetFollowersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/followers"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the followers of the user
   *
   * @remarks
   * This method returns every follower of the authenticated user.
   *
   * @returns The user's followers were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFollowersAlt1(
    request: UsersFollowers.GetFollowersAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/followers"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the users who are followed by the user
   *
   * @remarks
   * This method returns every user who is followed by the authenticated user.
   *
   * @returns The followed users were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserFollowing(
    request: UsersFollowers.GetUserFollowingRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter13Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the users who are followed by the user
   *
   * @remarks
   * This method returns every user who is followed by the authenticated user.
   *
   * @returns The followed users were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserFollowingAlt1(
    request: UsersFollowers.GetUserFollowingAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/following"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter13Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Unfollow a user
   *
   * @remarks
   * This method causes the authenticated user to stop following another user.
   *
   * @returns The user was unfollowed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfollowUser(
    request: UsersFollowers.UnfollowUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "follow_user_id", value: request.followUserId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Unfollow a user
   *
   * @remarks
   * This method causes the authenticated user to stop following another user.
   *
   * @returns The user was unfollowed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfollowUserAlt1(
    request: UsersFollowers.UnfollowUserAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/following/{follow_user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "follow_user_id", value: request.followUserId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace UsersFollowers {
  export type CheckIfUserIsFollowingRequest = {
    /** The ID of the user to follow. */
    followUserId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class CheckIfUserIsFollowingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserIsFollowingError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserIsFollowingAlt1Request = {
    /** The ID of the user to follow. */
    followUserId: number;
  };

  export class CheckIfUserIsFollowingAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserIsFollowingAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type FollowUserRequest = {
    /** The ID of the user to follow. */
    followUserId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class FollowUserError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<FollowUserError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type FollowUserAlt1Request = {
    /** The ID of the user to follow. */
    followUserId: number;
  };

  export class FollowUserAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<FollowUserAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type FollowUsersRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersFollowingRequest;
  };

  export class FollowUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
    >;

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

  export class FollowUsersAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
    >;

    static readonly errors: ErrorDecoders<FollowUsersAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFollowersRequest = {
    /** The ID of the user. */
    userId: number;
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
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date followed.
     */
    sort?: Sort8;
  };

  export type GetFollowersAlt1Request = {
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
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date followed.
     */
    sort?: Sort8;
  };

  export type GetUserFollowingRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `online` - Return users who are currently online.
     */
    filter?: Filter13;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date followed.
     */
    sort?: Sort8;
  };

  export type GetUserFollowingAlt1Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `online` - Return users who are currently online.
     */
    filter?: Filter13;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date followed.
     */
    sort?: Sort8;
  };

  export type UnfollowUserRequest = {
    /** The ID of the user to unfollow. */
    followUserId: number;
    /** The ID of the user. */
    userId: number;
  };

  export type UnfollowUserAlt1Request = {
    /** The ID of the user to unfollow. */
    followUserId: number;
  };
}
