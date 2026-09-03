import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { categoryConnectionSchema, type CategoryConnection } from "../models/category-connection.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { sort24Schema, type Sort24 } from "../models/sort24.js";
import type { Servers } from "../servers.js";

export class CategoriesUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfUserSubscribedToCategory(
    request: CategoriesUsers.CheckIfUserSubscribedToCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  checkIfUserSubscribedToCategoryAlt1(
    request: CategoriesUsers.CheckIfUserSubscribedToCategoryAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getCategorySubscriptions(
    request: CategoriesUsers.GetCategorySubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, CategoriesUsers.GetCategorySubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort24Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: CategoriesUsers.GetCategorySubscriptionsError,
      },
      options,
    );
  }

  getCategorySubscriptionsAlt1(
    request: CategoriesUsers.GetCategorySubscriptionsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<CategoryConnection, CategoriesUsers.GetCategorySubscriptionsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/categories"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort24Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryConnectionSchema },
        errorFactory: CategoriesUsers.GetCategorySubscriptionsAlt1Error,
      },
      options,
    );
  }

  subscribeToCategory(
    request: CategoriesUsers.SubscribeToCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  subscribeToCategoryAlt1(
    request: CategoriesUsers.SubscribeToCategoryAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/me/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unsubscribeFromCategory(
    request: CategoriesUsers.UnsubscribeFromCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unsubscribeFromCategoryAlt1(
    request: CategoriesUsers.UnsubscribeFromCategoryAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/me/categories/{category}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "category", value: request.category, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CategoriesUsers {
  export type CheckIfUserSubscribedToCategoryRequest = {
    category: string;
    userId: number;
  };

  export type CheckIfUserSubscribedToCategoryAlt1Request = {
    category: string;
  };

  export type GetCategorySubscriptionsRequest = {
    userId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort24;
  };

  export class GetCategorySubscriptionsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetCategorySubscriptionsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCategorySubscriptionsAlt1Request = {
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort24;
  };

  export class GetCategorySubscriptionsAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetCategorySubscriptionsAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribeToCategoryRequest = {
    category: string;
    userId: number;
  };

  export type SubscribeToCategoryAlt1Request = {
    category: string;
  };

  export type UnsubscribeFromCategoryRequest = {
    category: string;
    userId: number;
  };

  export type UnsubscribeFromCategoryAlt1Request = {
    category: string;
  };
}
