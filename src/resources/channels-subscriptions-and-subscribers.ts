import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter2Schema, type Filter2 } from "../models/filter2.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with channel subscriptions.
 */
export class ChannelsSubscriptionsAndSubscribers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if a user follows a channel
   *
   * @remarks
   * This method determines whether the specified user is a follower of a particular channel.
   *
   * @returns The user follows the channel.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserSubscribedToChannel(
    request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/channels/{channel_id}"),
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
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError,
      },
      options,
    );
  }

  /**
   * Check if a user follows a channel
   *
   * @remarks
   * This method determines whether the specified user is a follower of a particular channel.
   *
   * @returns The user follows the channel.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserSubscribedToChannelAlt1(
    request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the followers of a channel
   *
   * @remarks
   * This method returns every follower of the specified channel.
   *
   * @returns The followers were returned.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelSubscribers(
    request: ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [
          { name: "filter", value: request.filter, schema: filter2Schema },
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
        errorFactory: ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError,
      },
      options,
    );
  }

  /**
   * Subscribe the user to a specific channel
   *
   * @remarks
   * This method subscribes the authenticated user to the specified channel.
   *
   * @returns The user is subscribed to the channel.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeToChannel(
    request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/channels/{channel_id}"),
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
        errorFactory: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError,
      },
      options,
    );
  }

  /**
   * Subscribe the user to a specific channel
   *
   * @remarks
   * This method subscribes the authenticated user to the specified channel.
   *
   * @returns The user is subscribed to the channel.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeToChannelAlt1(
    request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/channels/{channel_id}"),
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
        errorFactory: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error,
      },
      options,
    );
  }

  /**
   * Unsubscribe the user from a specific channel
   *
   * @remarks
   * This method unsubscribes the authenticated user from the specified channel.
   *
   * @returns The user is unsubscribed from the channel.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unsubscribeFromChannel(
    request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/channels/{channel_id}"),
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
        errorFactory: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError,
      },
      options,
    );
  }

  /**
   * Unsubscribe the user from a specific channel
   *
   * @remarks
   * This method unsubscribes the authenticated user from the specified channel.
   *
   * @returns The user is unsubscribed from the channel.
   *
   * @throws {@link ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unsubscribeFromChannelAlt1(
    request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/channels/{channel_id}"),
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
        errorFactory: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error,
      },
      options,
    );
  }
}

export namespace ChannelsSubscriptionsAndSubscribers {
  export type CheckIfUserSubscribedToChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class CheckIfUserSubscribedToChannelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserSubscribedToChannelError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserSubscribedToChannelAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class CheckIfUserSubscribedToChannelAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserSubscribedToChannelAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelSubscribersRequest = {
    /** The ID of the channel. */
    channelId: number;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `moderators` - Return moderators.
     */
    filter: Filter2;
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
     *  * `date` - Sort the results by follow date.
     */
    sort?: Sort8;
  };

  export class GetChannelSubscribersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChannelSubscribersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SubscribeToChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class SubscribeToChannelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<SubscribeToChannelError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SubscribeToChannelAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class SubscribeToChannelAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<SubscribeToChannelAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnsubscribeFromChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class UnsubscribeFromChannelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<UnsubscribeFromChannelError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnsubscribeFromChannelAlt1Request = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class UnsubscribeFromChannelAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<UnsubscribeFromChannelAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
