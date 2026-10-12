import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { sort24Schema, type Sort24 } from "../models/sort24.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage user interactions with a category.
 */
export class CategoriesUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if the user follows a category
   *
   * @remarks
   * This method determines whether the authenticated user follows the specified category.
   *
   * @returns The user is following the category.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserSubscribedToCategory(
    request: CategoriesUsers.CheckIfUserSubscribedToCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Check if the user follows a category
   *
   * @remarks
   * This method determines whether the authenticated user follows the specified category.
   *
   * @returns The user is following the category.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserSubscribedToCategoryAlt1(
    request: CategoriesUsers.CheckIfUserSubscribedToCategoryAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/categories/{category}"),
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
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the categories that the user follows
   *
   * @remarks
   * This method returns every category that the authenticated user follows.
   *
   * @returns The categories were returned.
   *
   * @throws {@link CategoriesUsers.GetCategorySubscriptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategorySubscriptions(
    request: CategoriesUsers.GetCategorySubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, CategoriesUsers.GetCategorySubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort24Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: CategoriesUsers.GetCategorySubscriptionsError,
      },
      options,
    );
  }

  /**
   * Get all the categories that the user follows
   *
   * @remarks
   * This method returns every category that the authenticated user follows.
   *
   * @returns The categories were returned.
   *
   * @throws {@link CategoriesUsers.GetCategorySubscriptionsAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategorySubscriptionsAlt1(
    request: CategoriesUsers.GetCategorySubscriptionsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, CategoriesUsers.GetCategorySubscriptionsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/categories"),
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
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort24Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: CategoriesUsers.GetCategorySubscriptionsAlt1Error,
      },
      options,
    );
  }

  /**
   * Cause the user to follow a specific category
   *
   * @remarks
   * This method causes the authenticated user to follow the specified category.
   *
   * @returns The user is following the category.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeToCategory(
    request: CategoriesUsers.SubscribeToCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Cause the user to follow a specific category
   *
   * @remarks
   * This method causes the authenticated user to follow the specified category.
   *
   * @returns The user is following the category.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeToCategoryAlt1(
    request: CategoriesUsers.SubscribeToCategoryAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Cause the user to stop following a category
   *
   * @remarks
   * This method causes the authenticated user to stop following the specified category.
   *
   * @returns The user has stopped following the category.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unsubscribeFromCategory(
    request: CategoriesUsers.UnsubscribeFromCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Cause the user to stop following a category
   *
   * @remarks
   * This method causes the authenticated user to stop following the specified category.
   *
   * @returns The user has stopped following the category.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unsubscribeFromCategoryAlt1(
    request: CategoriesUsers.UnsubscribeFromCategoryAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CategoriesUsers {
  export type CheckIfUserSubscribedToCategoryRequest = {
    /** The name of the category. */
    category: string;
    /** The ID of the user. */
    userId: number;
  };

  export type CheckIfUserSubscribedToCategoryAlt1Request = {
    /** The name of the category. */
    category: string;
  };

  export type GetCategorySubscriptionsRequest = {
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
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `name` - Sort the results by name.
     */
    sort?: Sort24;
  };

  export class GetCategorySubscriptionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetCategorySubscriptionsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCategorySubscriptionsAlt1Request = {
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
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `name` - Sort the results by name.
     */
    sort?: Sort24;
  };

  export class GetCategorySubscriptionsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetCategorySubscriptionsAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeToCategoryRequest = {
    /** The name of the category. */
    category: string;
    /** The ID of the user. */
    userId: number;
  };

  export type SubscribeToCategoryAlt1Request = {
    /** The name of the category. */
    category: string;
  };

  export type UnsubscribeFromCategoryRequest = {
    /** The name of the category. */
    category: string;
    /** The ID of the user. */
    userId: number;
  };

  export type UnsubscribeFromCategoryAlt1Request = {
    /** The name of the category. */
    category: string;
  };
}
