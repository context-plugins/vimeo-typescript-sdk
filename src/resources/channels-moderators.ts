import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  channelsModeratorsRequestSchema,
  type ChannelsModeratorsRequest,
} from "../models/channels-moderators-request.js";
import {
  channelsModeratorsRequest1Schema,
  type ChannelsModeratorsRequest1,
} from "../models/channels-moderators-request1.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with channel moderators.
 */
export class ChannelsModerators {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a specific moderator to a channel
   *
   * @remarks
   * This method adds a single user as a moderator to the specified channel. The authenticated user
   * must be a follower of the requested user to add them as a channel moderator.
   *
   * @throws {@link ChannelsModerators.AddChannelModeratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addChannelModerator(
    request: ChannelsModerators.AddChannelModeratorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.AddChannelModeratorError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsModerators.AddChannelModeratorError,
      },
      options,
    );
  }

  /**
   * Add a list of moderators to a channel
   *
   * @remarks
   * This method adds multiple users as moderators to the specified channel. Include the users by
   * their URI as a JSON array in the body of the request using the **user_uri** field, like this:
   * `[{ "user_uri": "/users/1234" }, { "user_uri": "/users/1235" }]`. The authenticated user must
   * be a follower of a requested user to add this person as a moderator. For more information on
   * batch requests like this one, see [Using Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
   *
   * @returns The moderators were added.
   *
   * @throws {@link ChannelsModerators.AddChannelModeratorsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addChannelModerators(
    request: ChannelsModerators.AddChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.AddChannelModeratorsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsModerators.AddChannelModeratorsError,
      },
      options,
    );
  }

  /**
   * Get a specific moderator of a channel
   *
   * @remarks
   * This method returns a single moderator of the specified channel.
   *
   * @returns The moderator was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelModerator(
    request: ChannelsModerators.GetChannelModeratorRequest,
    options?: RequestOptions,
  ): ApiPromise<User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the moderators of a channel
   *
   * @remarks
   * This method returns every moderator of the specified channel.
   *
   * @returns The moderators were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelModerators(
    request: ChannelsModerators.GetChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
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
   * Remove a specific moderator from a channel
   *
   * @remarks
   * This method removes a single moderator from the specified channel. The authenticated user must
   * be the owner of the channel.
   *
   * @returns The moderator was removed.
   *
   * @throws {@link ChannelsModerators.RemoveChannelModeratorError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeChannelModerator(
    request: ChannelsModerators.RemoveChannelModeratorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.RemoveChannelModeratorError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsModerators.RemoveChannelModeratorError,
      },
      options,
    );
  }

  /**
   * Remove a list of moderators from a channel
   *
   * @remarks
   * This method removes multiple moderators from the specified channel. The authenticated user must
   * be the owner of the channel.
   *
   * @returns The moderators were removed.
   *
   * @throws {@link ChannelsModerators.RemoveChannelModeratorsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeChannelModerators(
    request: ChannelsModerators.RemoveChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.RemoveChannelModeratorsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsModeratorsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsModerators.RemoveChannelModeratorsError,
      },
      options,
    );
  }

  /**
   * Replace the moderators of a channel
   *
   * @remarks
   * This method replaces the current list of channel moderators with a new list. The authenticated
   * user must be the owner of the channel and a follower of each requested user to add them as a
   * channel moderator.
   *
   * @returns The moderators were replaced.
   *
   * @throws {@link ChannelsModerators.ReplaceChannelModeratorsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceChannelModerators(
    request: ChannelsModerators.ReplaceChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<User[], ChannelsModerators.ReplaceChannelModeratorsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/channels/{channel_id}/moderators"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsModeratorsRequest1Schema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSchema)) },
        errorFactory: ChannelsModerators.ReplaceChannelModeratorsError,
      },
      options,
    );
  }
}

export namespace ChannelsModerators {
  export type AddChannelModeratorRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class AddChannelModeratorError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddChannelModeratorError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddChannelModeratorsRequest = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class AddChannelModeratorsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddChannelModeratorsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelModeratorRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export type GetChannelModeratorsRequest = {
    /** The ID of the channel. */
    channelId: number;
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
     *  * `date` - Sort the results by date added.
     */
    sort?: Sort8;
  };

  export type RemoveChannelModeratorRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class RemoveChannelModeratorError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<RemoveChannelModeratorError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveChannelModeratorsRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsModeratorsRequest;
  };

  export class RemoveChannelModeratorsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<RemoveChannelModeratorsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceChannelModeratorsRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsModeratorsRequest1;
  };

  export class ReplaceChannelModeratorsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<ReplaceChannelModeratorsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
