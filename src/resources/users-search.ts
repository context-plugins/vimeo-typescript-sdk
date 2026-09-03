import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort13Schema, type Sort13 } from "../models/sort13.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import type { Servers } from "../servers.js";

export class UsersSearch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  searchUsers(
    request: UsersSearch.SearchUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, UsersSearch.SearchUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort13Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: UsersSearch.SearchUsersError,
      },
      options,
    );
  }
}

export namespace UsersSearch {
  export type SearchUsersRequest = {
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort13;
  };

  export class SearchUsersError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<SearchUsersError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
