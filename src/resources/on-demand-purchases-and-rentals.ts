import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter19Schema, type Filter19 } from "../models/filter19.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandPageConnectionSchema,
  type OnDemandPageConnection,
} from "../models/on-demand-page-connection.js";
import { onDemandPageSchema, type OnDemandPage } from "../models/on-demand-page.js";
import { sort33Schema, type Sort33 } from "../models/sort33.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with purchases and rentals on On Demand pages.
 */
export class OnDemandPurchasesAndRentals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if a user has made a purchase or rental from an On Demand page
   *
   * @remarks
   * This method determines whether the authenticated user has made a purchase or rental from the
   * specified On Demand page.
   *
   * @returns The authenticated user has made this purchase.
   *
   * @throws {@link OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfVodWasPurchasedAlt1(
    request: OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/ondemand/purchases/{ondemand_id}"),
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
        errorFactory: OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all of the user's On Demand purchases and rentals
   *
   * @remarks
   * This method returns every purchase and rental that the authenticated user has made across all
   * On Demand pages.
   *
   * @returns The purchases and rentals were returned.
   *
   * @throws {@link OnDemandPurchasesAndRentals.GetVodPurchasesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPurchases(
    request: OnDemandPurchasesAndRentals.GetVodPurchasesRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/ondemand/purchases"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter19Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort33Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandPurchasesAndRentals.GetVodPurchasesError,
      },
      options,
    );
  }

  /**
   * Get all of the user's On Demand purchases and rentals
   *
   * @remarks
   * This method returns every purchase and rental that the authenticated user has made across all
   * On Demand pages.
   *
   * @returns The purchases and rentals were returned.
   *
   * @throws {@link OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPurchasesAlt1(
    request: OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/ondemand/purchases"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter19Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort33Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error,
      },
      options,
    );
  }
}

export namespace OnDemandPurchasesAndRentals {
  export type CheckIfVodWasPurchasedAlt1Request = {
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class CheckIfVodWasPurchasedAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CheckIfVodWasPurchasedAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPurchasesRequest = {
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
     * The type of the On Demand video to filter on.
     *
     * Option descriptions:
     *  * `all` - Filter by all video types.
     *  * `expiring_soon` - Filter by videos that expire soon.
     *  * `film` - Filter by film.
     *  * `important` - Filter by pages that are about to expire.
     *  * `purchased` - Filter by purchased videos.
     *  * `rented` - Filter by rented videos.
     *  * `series` - Filter by series.
     *  * `subscription` - Filter by video subscription.
     *  * `unwatched` - Filter by unwatched videos.
     *  * `watched` - Filter by watched videos.
     */
    filter?: Filter19;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added video.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `name` - Sort the results by video name.
     *  * `purchase_time` - Sort the results by time of video purchase.
     *  * `rating` - Sort the results by content rating.
     *  * `release_date` - Sort the results by video release date.
     */
    sort?: Sort33;
  };

  export class GetVodPurchasesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodPurchasesError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPurchasesAlt1Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The type of the On Demand video to filter on.
     *
     * Option descriptions:
     *  * `all` - Filter by all video types.
     *  * `expiring_soon` - Filter by videos that expire soon.
     *  * `film` - Filter by film.
     *  * `important` - Filter by pages that are about to expire.
     *  * `purchased` - Filter by purchased videos.
     *  * `rented` - Filter by rented videos.
     *  * `series` - Filter by series.
     *  * `subscription` - Filter by video subscription.
     *  * `unwatched` - Filter by unwatched videos.
     *  * `watched` - Filter by watched videos.
     */
    filter?: Filter19;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added video.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `name` - Sort the results by video name.
     *  * `purchase_time` - Sort the results by time of video purchase.
     *  * `rating` - Sort the results by content rating.
     *  * `release_date` - Sort the results by video release date.
     */
    sort?: Sort33;
  };

  export class GetVodPurchasesAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodPurchasesAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
