import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter24Schema, type Filter24 } from "../models/filter24.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandGenreConnectionSchema,
  type OnDemandGenreConnection,
} from "../models/on-demand-genre-connection.js";
import { onDemandGenreSchema, type OnDemandGenre } from "../models/on-demand-genre.js";
import {
  onDemandPageConnectionSchema,
  type OnDemandPageConnection,
} from "../models/on-demand-page-connection.js";
import { onDemandPageSchema, type OnDemandPage } from "../models/on-demand-page.js";
import { sort41Schema, type Sort41 } from "../models/sort41.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with On Demand genres.
 */
export class OnDemandGenres {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a genre to an On Demand page
   *
   * @remarks
   * This method adds the specified genre designation to an On Demand page. A page can be associated
   * with a maximum of two genres. The authenticated user must be the owner of the page.
   *
   * @returns The genre was added.
   *
   * @throws {@link OnDemandGenres.AddVodGenreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVodGenre(
    request: OnDemandGenres.AddVodGenreRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenre, OnDemandGenres.AddVodGenreError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreSchema },
        errorFactory: OnDemandGenres.AddVodGenreError,
      },
      options,
    );
  }

  /**
   * Remove a genre from an On Demand page
   *
   * @remarks
   * This method removes a genre association from the specified On Demand page. The authenticated
   * user must be the owner of the page.
   *
   * @returns The genre was removed.
   *
   * @throws {@link OnDemandGenres.DeleteVodGenreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVodGenre(
    request: OnDemandGenres.DeleteVodGenreRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandGenres.DeleteVodGenreError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandGenres.DeleteVodGenreError,
      },
      options,
    );
  }

  /**
   * Get a specific On Demand page in a genre
   *
   * @remarks
   * This method returns a single On Demand page that belongs to the specified genre.
   *
   * @returns The On Demand page in the genre was returned.
   *
   * @throws {@link OnDemandGenres.GetGenreVodError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGenreVod(
    request: OnDemandGenres.GetGenreVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandGenres.GetGenreVodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/genres/{genre_id}/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: OnDemandGenres.GetGenreVodError,
      },
      options,
    );
  }

  /**
   * Get all the On Demand pages in a genre
   *
   * @remarks
   * This method returns every On Demand page that belongs to the specified genre.
   *
   * @returns The On Demand pages in the genre were returned.
   *
   * @throws {@link OnDemandGenres.GetGenreVodsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGenreVods(
    request: OnDemandGenres.GetGenreVodsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandGenres.GetGenreVodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/genres/{genre_id}/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "genre_id", value: request.genreId, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter24Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort41Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandGenres.GetGenreVodsError,
      },
      options,
    );
  }

  /**
   * Get a specific On Demand genre
   *
   * @remarks
   * This method returns a single On Demand genre.
   *
   * @returns The genre was returned.
   *
   * @throws {@link OnDemandGenres.GetVodGenreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodGenre(
    request: OnDemandGenres.GetVodGenreRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenre, OnDemandGenres.GetVodGenreError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "genre_id", value: request.genreId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreSchema },
        errorFactory: OnDemandGenres.GetVodGenreError,
      },
      options,
    );
  }

  /**
   * Check whether an On Demand page belongs to a specific genre
   *
   * @remarks
   * This method determines whether an On Demand page is associated with the specified genre.
   *
   * @returns The On Demand page is in this genre.
   *
   * @throws {@link OnDemandGenres.GetVodGenreByOndemandIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodGenreByOndemandId(
    request: OnDemandGenres.GetVodGenreByOndemandIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenre, OnDemandGenres.GetVodGenreByOndemandIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreSchema },
        errorFactory: OnDemandGenres.GetVodGenreByOndemandIdError,
      },
      options,
    );
  }

  /**
   * Get all On Demand genres
   *
   * @remarks
   * This method returns every existing On Demand genre.
   *
   * @returns The genres were returned.
   *
   * @throws {@link OnDemandGenres.GetVodGenresError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodGenres(
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenreConnection, OnDemandGenres.GetVodGenresError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/genres"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreConnectionSchema },
        errorFactory: OnDemandGenres.GetVodGenresError,
      },
      options,
    );
  }

  /**
   * Get all the genres of an On Demand page
   *
   * @remarks
   * This method returns every genre associated with the specified On Demand page.
   *
   * @returns The genres were returned.
   *
   * @throws {@link OnDemandGenres.GetVodGenresByOndemandIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodGenresByOndemandId(
    request: OnDemandGenres.GetVodGenresByOndemandIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenreConnection, OnDemandGenres.GetVodGenresByOndemandIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/genres"),
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
        success: { kind: "json", schema: onDemandGenreConnectionSchema },
        errorFactory: OnDemandGenres.GetVodGenresByOndemandIdError,
      },
      options,
    );
  }
}

export namespace OnDemandGenres {
  export type AddVodGenreRequest = {
    /** The ID of the genre. */
    genreId: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class AddVodGenreError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVodGenreError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodGenreRequest = {
    /** The ID of the genre. */
    genreId: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class DeleteVodGenreError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVodGenreError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGenreVodRequest = {
    /** The ID of the genre. */
    genreId: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetGenreVodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetGenreVodError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGenreVodsRequest = {
    /** The ID of the genre. */
    genreId: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `country` - Sort the results by country.
     *  * `my_region` - Sort the results by user's region.
     */
    filter?: Filter24;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `name` - Sort the results by name.
     *  * `publish.time` - Sort the results by time of publishing.
     *  * `videos` - Sort the results by video.
     */
    sort?: Sort41;
  };

  export class GetGenreVodsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetGenreVodsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVodGenreRequest = {
    /** The ID of the genre. */
    genreId: string;
  };

  export class GetVodGenreError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodGenreError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodGenreByOndemandIdRequest = {
    /** The ID of the genre. */
    genreId: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetVodGenreByOndemandIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodGenreByOndemandIdError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export class GetVodGenresError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetVodGenresError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVodGenresByOndemandIdRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetVodGenresByOndemandIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodGenresByOndemandIdError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
