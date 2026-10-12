import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import {
  channelsCategoriesRequestSchema,
  type ChannelsCategoriesRequest,
} from "../models/channels-categories-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with channel categories.
 */
export class ChannelsCategories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a channel to a list of categories
   *
   * @remarks
   * This method adds the specified channel to multiple categories.
   *
   * @returns The channel was added to the categories.
   *
   * @throws {@link ChannelsCategories.AddChannelCategoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addChannelCategories(
    request: ChannelsCategories.AddChannelCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsCategories.AddChannelCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsCategoriesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsCategories.AddChannelCategoriesError,
      },
      options,
    );
  }

  /**
   * Add a channel to a specific category
   *
   * @remarks
   * This method adds the specified channel to a single category. The authenticated user must be the
   * owner of the channel.
   *
   * @returns The channel was added to the category.
   *
   * @throws {@link ChannelsCategories.CategorizeChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  categorizeChannel(
    request: ChannelsCategories.CategorizeChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsCategories.CategorizeChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "channel_id", value: request.channelId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsCategories.CategorizeChannelError,
      },
      options,
    );
  }

  /**
   * Remove a channel from a category
   *
   * @remarks
   * This method removes a channel from the specified category. The authenticated user must be the
   * owner of the channel.
   *
   * @returns The channel was removed.
   *
   * @throws {@link ChannelsCategories.DeleteChannelCategoryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannelCategory(
    request: ChannelsCategories.DeleteChannelCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsCategories.DeleteChannelCategoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "channel_id", value: request.channelId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsCategories.DeleteChannelCategoryError,
      },
      options,
    );
  }

  /**
   * Get all the categories to which a channel belongs
   *
   * @remarks
   * This method returns every category to which the specified channel belongs.
   *
   * @returns The categories were returned.
   *
   * @throws {@link ChannelsCategories.GetChannelCategoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelCategories(
    request: ChannelsCategories.GetChannelCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, ChannelsCategories.GetChannelCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/categories"),
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
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: ChannelsCategories.GetChannelCategoriesError,
      },
      options,
    );
  }
}

export namespace ChannelsCategories {
  export type AddChannelCategoriesRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsCategoriesRequest;
  };

  export class AddChannelCategoriesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"legacyError", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddChannelCategoriesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CategorizeChannelRequest = {
    /** The name of the category. */
    category: string;
    /** The ID of the channel. */
    channelId: number;
  };

  export class CategorizeChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"legacyError", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CategorizeChannelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChannelCategoryRequest = {
    /** The name of the category. */
    category: string;
    /** The ID of the channel. */
    channelId: number;
  };

  export class DeleteChannelCategoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"legacyError", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteChannelCategoryError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelCategoriesRequest = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class GetChannelCategoriesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChannelCategoriesError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
