import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { channelConnectionSchema, type ChannelConnection } from "../models/channel-connection.js";
import { channelSchema, type Channel } from "../models/channel.js";
import { channelsRequestSchema, type ChannelsRequest } from "../models/channels-request.js";
import { channelsRequest1Schema, type ChannelsRequest1 } from "../models/channels-request1.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter1Schema, type Filter1 } from "../models/filter1.js";
import { filter12Schema, type Filter12 } from "../models/filter12.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort4Schema, type Sort4 } from "../models/sort4.js";
import { sort7Schema, type Sort7 } from "../models/sort7.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with channels.
 */
export class ChannelsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a channel
   *
   * @remarks
   * This method creates a new channel.
   *
   * @returns The channel was created.
   *
   * @throws {@link ChannelsEssentials.CreateChannelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChannel(
    request: ChannelsEssentials.CreateChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, ChannelsEssentials.CreateChannelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelsRequestSchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: ChannelsEssentials.CreateChannelError,
      },
      options,
    );
  }

  /**
   * Delete a channel
   *
   * @remarks
   * This method deletes the specified channel. The authenticated user must own the channel.
   *
   * @returns The channel was deleted.
   *
   * @throws {@link ChannelsEssentials.DeleteChannelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannel(
    request: ChannelsEssentials.DeleteChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsEssentials.DeleteChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}"),
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
        errorFactory: ChannelsEssentials.DeleteChannelError,
      },
      options,
    );
  }

  /**
   * Edit a channel
   *
   * @remarks
   * This method edits the specified channel.
   *
   * @returns The channel was edited.
   *
   * @throws {@link ChannelsEssentials.EditChannelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editChannel(
    request: ChannelsEssentials.EditChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, ChannelsEssentials.EditChannelError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => channelsRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: ChannelsEssentials.EditChannelError,
      },
      options,
    );
  }

  /**
   * Get a specific channel
   *
   * @remarks
   * This method returns a single channel.
   *
   * @returns The channel was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannel(
    request: ChannelsEssentials.GetChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [{ name: "sizes", value: request.sizes, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the channels to which a user subscribes
   *
   * @remarks
   * This method returns all the channels to which the specified user subscribes.
   *
   * @returns The channels were returned.
   *
   * @throws {@link ChannelsEssentials.GetChannelSubscriptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelSubscriptions(
    request: ChannelsEssentials.GetChannelSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelConnection, ChannelsEssentials.GetChannelSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/channels"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter12Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort4Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelConnectionSchema },
        errorFactory: ChannelsEssentials.GetChannelSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Get all the channels to which a user subscribes
   *
   * @remarks
   * This method returns all the channels to which the specified user subscribes.
   *
   * @returns The channels were returned.
   *
   * @throws {@link ChannelsEssentials.GetChannelSubscriptionsAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelSubscriptionsAlt1(
    request: ChannelsEssentials.GetChannelSubscriptionsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<ChannelConnection, ChannelsEssentials.GetChannelSubscriptionsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/channels"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter12Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort4Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelConnectionSchema },
        errorFactory: ChannelsEssentials.GetChannelSubscriptionsAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all channels
   *
   * @remarks
   * This method returns all available channels.
   *
   * @returns The channels were returned.
   *
   * @throws {@link ChannelsEssentials.GetChannelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannels(
    request: ChannelsEssentials.GetChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelConnection, ChannelsEssentials.GetChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter1Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort7Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelConnectionSchema },
        errorFactory: ChannelsEssentials.GetChannelsError,
      },
      options,
    );
  }
}

export namespace ChannelsEssentials {
  export type CreateChannelRequest = {
    body: ChannelsRequest;
  };

  export class CreateChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateChannelError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class DeleteChannelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteChannelError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    body?: ChannelsRequest1;
  };

  export class EditChannelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<EditChannelError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    /**
     * The pixel dimensions of the image in `{width}x{height}` format. For more information, see our
     * [Using Common Formats and
     * Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide.
     */
    sizes?: string;
  };

  export type GetChannelSubscriptionsRequest = {
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
     *  * `moderated` - Return moderated channels.
     */
    filter?: Filter12;
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
     *  * `date` - Sort the results by creation date.
     *  * `followers` - Sort the results by number of followers.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort4;
  };

  export class GetChannelSubscriptionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error304", undefined> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetChannelSubscriptionsError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelSubscriptionsAlt1Request = {
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
     *  * `moderated` - Return moderated channels.
     */
    filter?: Filter12;
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
     *  * `date` - Sort the results by creation date.
     *  * `followers` - Sort the results by number of followers.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort4;
  };

  export class GetChannelSubscriptionsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error304", undefined> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetChannelSubscriptionsAlt1Error> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelsRequest = {
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
     *  * `featured` - Return featured channels.
     */
    filter?: Filter1;
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
     *  * `date` - Sort the results by creation date.
     *  * `default` - Sort the results by creation date.
     *  * `followers` - Sort the results by number of followers.
     *  * `relevant` - Sort the results by relevance. This option is available for search queries
     *    only.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort7;
  };

  export class GetChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetChannelsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
