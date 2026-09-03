import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  channelsVideosCreditsRequestSchema,
  type ChannelsVideosCreditsRequest,
} from "../models/channels-videos-credits-request.js";
import { creditConnectionSchema, type CreditConnection } from "../models/credit-connection.js";
import { creditSchema, type Credit } from "../models/credit.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import { videosCreditsRequestSchema, type VideosCreditsRequest } from "../models/videos-credits-request.js";
import {
  videosCreditsRequest1Schema,
  type VideosCreditsRequest1,
} from "../models/videos-credits-request1.js";
import type { Servers } from "../servers.js";

export class VideosCredits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoCredit(
    request: VideosCredits.AddVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.AddVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/credits"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: videosCreditsRequestSchema },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.AddVideoCreditError,
      },
      options,
    );
  }

  addVideoCreditAlt1(
    request: VideosCredits.AddVideoCreditAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.AddVideoCreditAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/credits"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: channelsVideosCreditsRequestSchema },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.AddVideoCreditAlt1Error,
      },
      options,
    );
  }

  availableUsers(
    request: VideosCredits.AvailableUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, ResponseError> {
    return this.#rawClient.execute<UserConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/credits/available_users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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

  deleteVideoCredit(
    request: VideosCredits.DeleteVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosCredits.DeleteVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/credits/{credit_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "credit_id", value: request.creditId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosCredits.DeleteVideoCreditError,
      },
      options,
    );
  }

  editVideoCredit(
    request: VideosCredits.EditVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.EditVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/credits/{credit_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "credit_id", value: request.creditId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosCreditsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.EditVideoCreditError,
      },
      options,
    );
  }

  getVideoCredit(
    request: VideosCredits.GetVideoCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<Credit, VideosCredits.GetVideoCreditError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/credits/{credit_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "credit_id", value: request.creditId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditSchema },
        errorFactory: VideosCredits.GetVideoCreditError,
      },
      options,
    );
  }

  getVideoCredits(
    request: VideosCredits.GetVideoCreditsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditConnection, ResponseError> {
    return this.#rawClient.execute<CreditConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/credits"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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
        success: { kind: "json", schema: creditConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoCreditsAlt1(
    request: VideosCredits.GetVideoCreditsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<CreditConnection, ResponseError> {
    return this.#rawClient.execute<CreditConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/credits"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
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
        success: { kind: "json", schema: creditConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideosCredits {
  export type AddVideoCreditRequest = {
    videoId: number;
    body: VideosCreditsRequest;
  };

  export class AddVideoCreditError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoCreditError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoCreditAlt1Request = {
    channelId: number;
    videoId: number;
    body: ChannelsVideosCreditsRequest;
  };

  export class AddVideoCreditAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoCreditAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AvailableUsersRequest = {
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type DeleteVideoCreditRequest = {
    creditId: number;
    videoId: number;
  };

  export class DeleteVideoCreditError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoCreditError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVideoCreditRequest = {
    creditId: number;
    videoId: number;
    body?: VideosCreditsRequest1;
  };

  export class EditVideoCreditError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditVideoCreditError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCreditRequest = {
    creditId: number;
    videoId: number;
  };

  export class GetVideoCreditError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoCreditError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCreditsRequest = {
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type GetVideoCreditsAlt1Request = {
    channelId: number;
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };
}
