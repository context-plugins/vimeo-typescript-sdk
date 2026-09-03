import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { activity31ConnectionSchema, type Activity31Connection } from "../models/activity31-connection.js";
import { errorSchema, type Error } from "../models/error.js";
import { type33Schema, type Type33 } from "../models/type33.js";
import type { Servers } from "../servers.js";

export class UsersFeeds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getFeed(
    request: UsersFeeds.GetFeedRequest,
    options?: RequestOptions,
  ): ApiPromise<Activity31Connection, UsersFeeds.GetFeedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/feed"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type33Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activity31ConnectionSchema },
        errorFactory: UsersFeeds.GetFeedError,
      },
      options,
    );
  }

  getFeedAlt1(
    request: UsersFeeds.GetFeedAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Activity31Connection, UsersFeeds.GetFeedAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/feed"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type33Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activity31ConnectionSchema },
        errorFactory: UsersFeeds.GetFeedAlt1Error,
      },
      options,
    );
  }
}

export namespace UsersFeeds {
  export type GetFeedRequest = {
    userId: number;
    offset?: string;
    page?: number;
    perPage?: number;
    type?: Type33;
  };

  export class GetFeedError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetFeedError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFeedAlt1Request = {
    offset?: string;
    page?: number;
    perPage?: number;
    type?: Type33;
  };

  export class GetFeedAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetFeedAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
