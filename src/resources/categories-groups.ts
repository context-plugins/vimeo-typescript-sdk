import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { groupConnectionSchema, type GroupConnection } from "../models/group-connection.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort5Schema, type Sort5 } from "../models/sort5.js";
import type { Servers } from "../servers.js";

export class CategoriesGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCategoryGroups(
    request: CategoriesGroups.GetCategoryGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, CategoriesGroups.GetCategoryGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/categories/{category}/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort5Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: CategoriesGroups.GetCategoryGroupsError,
      },
      options,
    );
  }
}

export namespace CategoriesGroups {
  export type GetCategoryGroupsRequest = {
    category: string;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort5;
  };

  export class GetCategoryGroupsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCategoryGroupsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
