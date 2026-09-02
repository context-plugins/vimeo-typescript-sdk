import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import {
  channelsCategoriesRequestSchema,
  type ChannelsCategoriesRequest,
} from "../models/channels-categories-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

export class ChannelsCategories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addChannelCategories(
    request: ChannelsCategories.AddChannelCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsCategories.AddChannelCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: channelsCategoriesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsCategories.AddChannelCategoriesError,
      },
      options,
    );
  }

  categorizeChannel(
    request: ChannelsCategories.CategorizeChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsCategories.CategorizeChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "channel_id", value: request.channelId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsCategories.CategorizeChannelError,
      },
      options,
    );
  }

  deleteChannelCategory(
    request: ChannelsCategories.DeleteChannelCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsCategories.DeleteChannelCategoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "channel_id", value: request.channelId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsCategories.DeleteChannelCategoryError,
      },
      options,
    );
  }

  getChannelCategories(
    request: ChannelsCategories.GetChannelCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, ChannelsCategories.GetChannelCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: ChannelsCategories.GetChannelCategoriesError,
      },
      options,
    );
  }
}

export namespace ChannelsCategories {
  export type AddChannelCategoriesRequest = {
    channelId: number;
    body: ChannelsCategoriesRequest;
  };

  export class AddChannelCategoriesError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddChannelCategoriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CategorizeChannelRequest = {
    category: string;
    channelId: number;
  };

  export class CategorizeChannelError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CategorizeChannelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChannelCategoryRequest = {
    category: string;
    channelId: number;
  };

  export class DeleteChannelCategoryError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteChannelCategoryError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelCategoriesRequest = {
    channelId: number;
  };

  export class GetChannelCategoriesError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChannelCategoriesError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
