import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import {
  channelsPrivacyUsersRequestSchema,
  type ChannelsPrivacyUsersRequest,
} from "../models/channels-privacy-users-request.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

export class ChannelsPrivateChannelMembers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteChannelPrivacyUser(
    request: ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/privacy/users/{user_id}"),
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
        errorFactory: ChannelsPrivateChannelMembers.DeleteChannelPrivacyUserError,
      },
      options,
    );
  }

  getChannelPrivacyUsers(
    request: ChannelsPrivateChannelMembers.GetChannelPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/privacy/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: ChannelsPrivateChannelMembers.GetChannelPrivacyUsersError,
      },
      options,
    );
  }

  setChannelPrivacyUser(
    request: ChannelsPrivateChannelMembers.SetChannelPrivacyUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsPrivateChannelMembers.SetChannelPrivacyUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/privacy/users/{user_id}"),
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
        errorFactory: ChannelsPrivateChannelMembers.SetChannelPrivacyUserError,
      },
      options,
    );
  }

  setChannelPrivacyUsers(
    request: ChannelsPrivateChannelMembers.SetChannelPrivacyUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<User[], ChannelsPrivateChannelMembers.SetChannelPrivacyUsersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/privacy/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
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
    channelId: number;
    userId: number;
  };

  export class DeleteChannelPrivacyUserError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteChannelPrivacyUserError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelPrivacyUsersRequest = {
    channelId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
  };

  export class GetChannelPrivacyUsersError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetChannelPrivacyUsersError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetChannelPrivacyUserRequest = {
    channelId: number;
    userId: number;
  };

  export class SetChannelPrivacyUserError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SetChannelPrivacyUserError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetChannelPrivacyUsersRequest = {
    channelId: number;
    body: ChannelsPrivacyUsersRequest;
  };

  export class SetChannelPrivacyUsersError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<SetChannelPrivacyUsersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
