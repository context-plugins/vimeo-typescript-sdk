import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import { categorySchema, type Category } from "../models/category.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort3Schema, type Sort3 } from "../models/sort3.js";
import type { Servers } from "../servers.js";

export class CategoriesEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCategories(
    request: CategoriesEssentials.GetCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, ResponseError> {
    return this.#rawClient.execute<CategoryConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort3Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getCategory(
    request: CategoriesEssentials.GetCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, CategoriesEssentials.GetCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categorySchema },
        errorFactory: CategoriesEssentials.GetCategoryError,
      },
      options,
    );
  }
}

export namespace CategoriesEssentials {
  export type GetCategoriesRequest = {
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort3;
  };

  export type GetCategoryRequest = {
    category: string;
  };

  export class GetCategoryError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCategoryError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
