import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  channelsPrivacyUsersRequestSchema,
  type ChannelsPrivacyUsersRequest,
} from "../models/channels-privacy-users-request.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with private channel members.
 */
export class ChannelsPrivateChannelMembers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Restrict a user from accessing a private channel
   *
   * @remarks
   * This method prevents a single user from being able to access the specified private channel. The
   * authenticated user must be the owner of the channel.
   *
   * @returns The user can't acceess the private channel.
   *
   * @throws {@link ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannelPrivacyUser(
    request: ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/privacy/users/{user_id}"),
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
        errorFactory: ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError,
      },
      options,
    );
  }

  /**
   * Get all the users who can access a private channel
   *
   * @remarks
   * This method returns all the users who have access to the specified private channel. The
   * authenticated user must be the owner of the channel.
   *
   * @returns The users were returned.
   *
   * @throws {@link ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelPrivacyUsers(
    request: ChannelsPrivateChannelMembers.GetChannelPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/privacy/users"),
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
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError,
      },
      options,
    );
  }

  /**
   * Permit a specific user to access a private channel
   *
   * @remarks
   * This method gives a single user access to the specified private channel. The authenticated user
   * must be the owner of the channel.
   *
   * @returns The user can now view the private channel.
   *
   * @throws {@link ChannelsPrivateChannelMembers.SetChannelPrivacyUserError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setChannelPrivacyUser(
    request: ChannelsPrivateChannelMembers.SetChannelPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsPrivateChannelMembers.SetChannelPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/privacy/users/{user_id}"),
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
        errorFactory: ChannelsPrivateChannelMembers.SetChannelPrivacyUserError,
      },
      options,
    );
  }

  /**
   * Permit a list of users to access a private channel
   *
   * @remarks
   * This method gives multiple users access to the specified private channel. The authenticated
   * user must be the owner of the channel.
   *
   * @returns The users can access the private channel.
   *
   * @throws {@link ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setChannelPrivacyUsers(
    request: ChannelsPrivateChannelMembers.SetChannelPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<User[], ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/privacy/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsPrivacyUsersRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSchema)) },
        errorFactory: ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError,
      },
      options,
    );
  }
}

export namespace ChannelsPrivateChannelMembers {
  export type DeleteChannelPrivacyUserRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteChannelPrivacyUserError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteChannelPrivacyUserError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelPrivacyUsersRequest = {
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
  };

  export class GetChannelPrivacyUsersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetChannelPrivacyUsersError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetChannelPrivacyUserRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class SetChannelPrivacyUserError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<SetChannelPrivacyUserError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetChannelPrivacyUsersRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsPrivacyUsersRequest;
  };

  export class SetChannelPrivacyUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<SetChannelPrivacyUsersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
