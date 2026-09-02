import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter2Schema, type Filter2 } from "../models/filter2.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import type { Servers } from "../servers.js";

export class ChannelsSubscriptionsAndSubscribers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfUserSubscribedToChannel(
    request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelError,
      },
      options,
    );
  }

  checkIfUserSubscribedToChannelAlt1(
    request: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.CheckIfUserSubscribedToChannelAlt1Error,
      },
      options,
    );
  }

  getChannelSubscribers(
    request: ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        query: [
          { name: "filter", value: request.filter, schema: filter2Schema },
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
        errorFactory: ChannelsSubscriptionsAndSubscribers.GetChannelSubscribersError,
      },
      options,
    );
  }

  subscribeToChannel(
    request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelError,
      },
      options,
    );
  }

  subscribeToChannelAlt1(
    request: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.SubscribeToChannelAlt1Error,
      },
      options,
    );
  }

  unsubscribeFromChannel(
    request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelError,
      },
      options,
    );
  }

  unsubscribeFromChannelAlt1(
    request: ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsSubscriptionsAndSubscribers.UnsubscribeFromChannelAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
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
    channelId: number;
    userId: number;
  };

  export class CheckIfUserSubscribedToChannelError extends ResponseError<
    Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CheckIfUserSubscribedToChannelError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserSubscribedToChannelAlt1Request = {
    channelId: number;
  };

  export class CheckIfUserSubscribedToChannelAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CheckIfUserSubscribedToChannelAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelSubscribersRequest = {
    channelId: number;
    filter: Filter2;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export class GetChannelSubscribersError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChannelSubscribersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SubscribeToChannelRequest = {
    channelId: number;
    userId: number;
  };

  export class SubscribeToChannelError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<SubscribeToChannelError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SubscribeToChannelAlt1Request = {
    channelId: number;
  };

  export class SubscribeToChannelAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<SubscribeToChannelAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnsubscribeFromChannelRequest = {
    channelId: number;
    userId: number;
  };

  export class UnsubscribeFromChannelError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<UnsubscribeFromChannelError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UnsubscribeFromChannelAlt1Request = {
    channelId: number;
  };

  export class UnsubscribeFromChannelAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<UnsubscribeFromChannelAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
