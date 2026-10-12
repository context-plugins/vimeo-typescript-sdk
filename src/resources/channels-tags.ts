import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { channelsTagsRequestSchema, type ChannelsTagsRequest } from "../models/channels-tags-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { tagConnectionSchema, type TagConnection } from "../models/tag-connection.js";
import { tagSchema, type Tag } from "../models/tag.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with tags in channels.
 */
export class ChannelsTags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a specific tag to a channel
   *
   * @remarks
   * This method adds a single tag to the specified channel. The authenticated user must be the
   * owner of the channel.
   *
   * @returns The tag was added.
   *
   * @throws {@link ChannelsTags.AddChannelTagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addChannelTag(
    request: ChannelsTags.AddChannelTagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsTags.AddChannelTagError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsTags.AddChannelTagError,
      },
      options,
    );
  }

  /**
   * Add a list of tags to a channel
   *
   * @remarks
   * This method adds multiple tags to the specified channel. Include the tags as a JSON array in
   * the body of the request using the **tag** field, like this: `[{ "tag": "funny" }, { "tag":
   * "concert" }]`. The authenticated user must be the owner of the channel. For more information on
   * batch requests like this one, see [Using Common Formats and
   * Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
   *
   * @returns The tags were added.
   *
   * @throws {@link ChannelsTags.AddTagsToChannelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTagsToChannel(
    request: ChannelsTags.AddTagsToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag[], ChannelsTags.AddTagsToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels/{channel_id}/tags"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => channelsTagsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tagSchema)) },
        errorFactory: ChannelsTags.AddTagsToChannelError,
      },
      options,
    );
  }

  /**
   * Check if a tag has been added to a channel
   *
   * @remarks
   * This method determines whether a tag has been added to the specified channel.
   *
   * @returns The tag has been added to the channel.
   *
   * @throws {@link ChannelsTags.CheckIfChannelHasTagError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfChannelHasTag(
    request: ChannelsTags.CheckIfChannelHasTagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsTags.CheckIfChannelHasTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsTags.CheckIfChannelHasTagError,
      },
      options,
    );
  }

  /**
   * Remove a tag from a channel
   *
   * @remarks
   * This method removes a single tag from the specified channel. The authenticated user must be the
   * owner of the channel.
   *
   * @returns The tag was removed.
   *
   * @throws {@link ChannelsTags.DeleteTagFromChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTagFromChannel(
    request: ChannelsTags.DeleteTagFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsTags.DeleteTagFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{channel_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.float64() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsTags.DeleteTagFromChannelError,
      },
      options,
    );
  }

  /**
   * Get all the tags that have been added to a channel
   *
   * @remarks
   * This method returns every tag that has been added to the specified channel.
   *
   * @returns The tags were returned.
   *
   * @throws {@link ChannelsTags.GetChannelTagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelTags(
    request: ChannelsTags.GetChannelTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagConnection, ChannelsTags.GetChannelTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/channels/{channel_id}/tags"),
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
        success: { kind: "json", schema: tagConnectionSchema },
        errorFactory: ChannelsTags.GetChannelTagsError,
      },
      options,
    );
  }
}

export namespace ChannelsTags {
  export type AddChannelTagRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The word to use as the tag. */
    word: string;
  };

  export class AddChannelTagError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"error", Error> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<AddChannelTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddTagsToChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    body: ChannelsTagsRequest[];
  };

  export class AddTagsToChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"error", Error> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<AddTagsToChannelError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CheckIfChannelHasTagRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The word to use as the tag. */
    word: string;
  };

  export class CheckIfChannelHasTagError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<CheckIfChannelHasTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteTagFromChannelRequest = {
    /** The ID of the channel. */
    channelId: number;
    /** The word to use as the tag. */
    word: string;
  };

  export class DeleteTagFromChannelError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"error", Error> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteTagFromChannelError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelTagsRequest = {
    /** The ID of the channel. */
    channelId: number;
  };

  export class GetChannelTagsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChannelTagsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
