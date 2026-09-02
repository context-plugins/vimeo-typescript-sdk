import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class ChannelsModerators {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addChannelModerator(
    request: ChannelsModerators.AddChannelModeratorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.AddChannelModeratorError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/moderators/{user_id}"),
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
        errorFactory: ChannelsModerators.AddChannelModeratorError,
      },
      options,
    );
  }

  addChannelModerators(
    request: ChannelsModerators.AddChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.AddChannelModeratorsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/moderators"),
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
        errorFactory: ChannelsModerators.AddChannelModeratorsError,
      },
      options,
    );
  }

  getChannelModerator(
    request: ChannelsModerators.GetChannelModeratorRequest,
    options?: RequestOptions,
  ): ApiPromise<User, ResponseError> {
    return this.#rawClient.execute<User, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/moderators/{user_id}"),
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
        success: { kind: "json", schema: userSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getChannelModerators(
    request: ChannelsModerators.GetChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/moderators"),
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

  removeChannelModerator(
    request: ChannelsModerators.RemoveChannelModeratorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.RemoveChannelModeratorError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/moderators/{user_id}"),
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
        errorFactory: ChannelsModerators.RemoveChannelModeratorError,
      },
      options,
    );
  }

  removeChannelModerators(
    request: ChannelsModerators.RemoveChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsModerators.RemoveChannelModeratorsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/moderators"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: channelsModeratorsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsModerators.RemoveChannelModeratorsError,
      },
      options,
    );
  }

  replaceChannelModerators(
    request: ChannelsModerators.ReplaceChannelModeratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<User[], ChannelsModerators.ReplaceChannelModeratorsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/channels/{channel_id}/moderators"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
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
    channelId: number;
    userId: number;
  };

  export class AddChannelModeratorError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddChannelModeratorError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddChannelModeratorsRequest = {
    channelId: number;
  };

  export class AddChannelModeratorsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddChannelModeratorsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelModeratorRequest = {
    channelId: number;
    userId: number;
  };

  export type GetChannelModeratorsRequest = {
    channelId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type RemoveChannelModeratorRequest = {
    channelId: number;
    userId: number;
  };

  export class RemoveChannelModeratorError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<RemoveChannelModeratorError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveChannelModeratorsRequest = {
    channelId: number;
    body: ChannelsModeratorsRequest;
  };

  export class RemoveChannelModeratorsError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<RemoveChannelModeratorsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceChannelModeratorsRequest = {
    channelId: number;
    body: ChannelsModeratorsRequest1;
  };

  export class ReplaceChannelModeratorsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<ReplaceChannelModeratorsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
