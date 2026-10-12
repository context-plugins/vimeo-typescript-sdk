import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import { categorySchema, type Category } from "../models/category.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort3Schema, type Sort3 } from "../models/sort3.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with categories.
 */
export class CategoriesEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all categories
   *
   * @remarks
   * This method returns every available category.
   *
   * @returns The categories were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategories(
    request: CategoriesEssentials.GetCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort3Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific category
   *
   * @remarks
   * This method returns the specified category.
   *
   * @returns The category was returned.
   *
   * @throws {@link CategoriesEssentials.GetCategoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategory(
    request: CategoriesEssentials.GetCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, CategoriesEssentials.GetCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        query: [],
        headers: [],
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
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `last_video_featured_time` - Sort the results by most recently featured.
     *  * `name` - Sort the results by name.
     */
    sort?: Sort3;
  };

  export type GetCategoryRequest = {
    /** The name of the category. */
    category: string;
  };

  export class GetCategoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCategoryError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
