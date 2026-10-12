import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter18Schema, type Filter18 } from "../models/filter18.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  meOndemandPagesRequestSchema,
  type MeOndemandPagesRequest,
} from "../models/me-ondemand-pages-request.js";
import {
  onDemandPageConnectionSchema,
  type OnDemandPageConnection,
} from "../models/on-demand-page-connection.js";
import { onDemandPageSchema, type OnDemandPage } from "../models/on-demand-page.js";
import { ondemandPagesRequestSchema, type OndemandPagesRequest } from "../models/ondemand-pages-request.js";
import { sort32Schema, type Sort32 } from "../models/sort32.js";
import {
  usersOndemandPagesRequestSchema,
  type UsersOndemandPagesRequest,
} from "../models/users-ondemand-pages-request.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with On Demand pages.
 */
export class OnDemandEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an On Demand page
   *
   * @remarks
   * This method creates a new On Demand page for the specified user. To publish the page, use the
   * [edit](https://developer.vimeo.com/api/reference/on-demand#edit_vod) method.
   *
   * @returns The On Demand page was created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVod(
    request: OnDemandEssentials.CreateVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersOndemandPagesRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create an On Demand page
   *
   * @remarks
   * This method creates a new On Demand page for the specified user. To publish the page, use the
   * [edit](https://developer.vimeo.com/api/reference/on-demand#edit_vod) method.
   *
   * @returns The On Demand page was created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVodAlt1(
    request: OnDemandEssentials.CreateVodAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meOndemandPagesRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an On Demand page
   *
   * @remarks
   * This method deletes the specified On Demand page.
   *
   * @returns The On Demand page was deleted.
   *
   * @throws {@link OnDemandEssentials.DeleteVodDraftError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVodDraft(
    request: OnDemandEssentials.DeleteVodDraftRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandEssentials.DeleteVodDraftError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandEssentials.DeleteVodDraftError,
      },
      options,
    );
  }

  /**
   * Edit an On Demand page
   *
   * @remarks
   * This method edits the specified On Demand page. Use this method to enable preorders on the page
   * or to publish the page.
   *
   * @returns The On Demand page was edited.
   *
   * @throws {@link OnDemandEssentials.EditVodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVod(
    request: OnDemandEssentials.EditVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandEssentials.EditVodError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ondemandPagesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: OnDemandEssentials.EditVodError,
      },
      options,
    );
  }

  /**
   * Get all the On Demand pages of the user
   *
   * @remarks
   * This method returns every On Demand page belonging to the authenticated user.
   *
   * @returns The On Demand pages were returned.
   *
   * @throws {@link OnDemandEssentials.GetUserVodsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserVods(
    request: OnDemandEssentials.GetUserVodsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandEssentials.GetUserVodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter18Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort32Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandEssentials.GetUserVodsError,
      },
      options,
    );
  }

  /**
   * Get all the On Demand pages of the user
   *
   * @remarks
   * This method returns every On Demand page belonging to the authenticated user.
   *
   * @returns The On Demand pages were returned.
   *
   * @throws {@link OnDemandEssentials.GetUserVodsAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserVodsAlt1(
    request: OnDemandEssentials.GetUserVodsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandEssentials.GetUserVodsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter18Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort32Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandEssentials.GetUserVodsAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific On Demand page
   *
   * @remarks
   * This method returns the specified On Demand page.
   *
   * @returns The On Demand page was returned.
   *
   * @throws {@link OnDemandEssentials.GetVodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVod(
    request: OnDemandEssentials.GetVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandEssentials.GetVodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: OnDemandEssentials.GetVodError,
      },
      options,
    );
  }
}

export namespace OnDemandEssentials {
  export type CreateVodRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersOndemandPagesRequest;
  };

  export type CreateVodAlt1Request = {
    body: MeOndemandPagesRequest;
  };

  export type DeleteVodDraftRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class DeleteVodDraftError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVodDraftError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVodRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    body?: OndemandPagesRequest;
  };

  export class EditVodError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditVodError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUserVodsRequest = {
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
    /**
     * The type of the page to return.
     *
     * Option descriptions:
     *  * `film` - The page type is a film.
     *  * `series` - The page type is a series.
     */
    filter?: Filter18;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added page.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `modified_time` - Sort the results by time of page modification.
     *  * `name` - Sort the results by page name.
     *  * `publish.time` - Sort the results by time of page publishing.
     *  * `rating` - Sort the results by content rating.
     */
    sort?: Sort32;
  };

  export class GetUserVodsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetUserVodsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUserVodsAlt1Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The type of the page to return.
     *
     * Option descriptions:
     *  * `film` - The page type is a film.
     *  * `series` - The page type is a series.
     */
    filter?: Filter18;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added page.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `modified_time` - Sort the results by time of page modification.
     *  * `name` - Sort the results by page name.
     *  * `publish.time` - Sort the results by time of page publishing.
     *  * `rating` - Sort the results by content rating.
     */
    sort?: Sort32;
  };

  export class GetUserVodsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetUserVodsAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetVodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
