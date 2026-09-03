import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { channelsTagsRequestSchema, type ChannelsTagsRequest } from "../models/channels-tags-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { tagConnectionSchema, type TagConnection } from "../models/tag-connection.js";
import { tagSchema, type Tag } from "../models/tag.js";
import type { Servers } from "../servers.js";

export class ChannelsTags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addChannelTag(
    request: ChannelsTags.AddChannelTagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsTags.AddChannelTagError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsTags.AddChannelTagError,
      },
      options,
    );
  }

  addTagsToChannel(
    request: ChannelsTags.AddTagsToChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Tag[], ChannelsTags.AddTagsToChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/channels/{channel_id}/tags"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => channelsTagsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tagSchema)) },
        errorFactory: ChannelsTags.AddTagsToChannelError,
      },
      options,
    );
  }

  checkIfChannelHasTag(
    request: ChannelsTags.CheckIfChannelHasTagRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsTags.CheckIfChannelHasTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsTags.CheckIfChannelHasTagError,
      },
      options,
    );
  }

  deleteTagFromChannel(
    request: ChannelsTags.DeleteTagFromChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChannelsTags.DeleteTagFromChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/channels/{channel_id}/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "word", value: request.word, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChannelsTags.DeleteTagFromChannelError,
      },
      options,
    );
  }

  getChannelTags(
    request: ChannelsTags.GetChannelTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagConnection, ChannelsTags.GetChannelTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/tags"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.number() }],
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
    channelId: number;
    word: string;
  };

  export class AddChannelTagError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AddChannelTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddTagsToChannelRequest = {
    channelId: number;
    body: ChannelsTagsRequest[];
  };

  export class AddTagsToChannelError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AddTagsToChannelError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CheckIfChannelHasTagRequest = {
    channelId: number;
    word: string;
  };

  export class CheckIfChannelHasTagError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<CheckIfChannelHasTagError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteTagFromChannelRequest = {
    channelId: number;
    word: string;
  };

  export class DeleteTagFromChannelError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteTagFromChannelError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetChannelTagsRequest = {
    channelId: number;
  };

  export class GetChannelTagsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChannelTagsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
