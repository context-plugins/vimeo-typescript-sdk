import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter27Schema, type Filter27 } from "../models/filter27.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandSeasonConnectionSchema,
  type OnDemandSeasonConnection,
} from "../models/on-demand-season-connection.js";
import { onDemandSeasonSchema, type OnDemandSeason } from "../models/on-demand-season.js";
import { sort43Schema, type Sort43 } from "../models/sort43.js";
import { sort44Schema, type Sort44 } from "../models/sort44.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with On Demand seasons.
 */
export class OnDemandSeasons {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a specific season on an On Demand page
   *
   * @remarks
   * This method returns a single season on the specified On Demand page.
   *
   * @returns The season was returned.
   *
   * @throws {@link OnDemandSeasons.GetVodSeasonError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodSeason(
    request: OnDemandSeasons.GetVodSeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandSeason, OnDemandSeasons.GetVodSeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/seasons/{season_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "season_id", value: request.seasonId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandSeasonSchema },
        errorFactory: OnDemandSeasons.GetVodSeasonError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a season on an On Demand page
   *
   * @remarks
   * This method returns every video in the specified season on an On Demand page.
   *
   * @returns The videos were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodSeasonVideos(
    request: OnDemandSeasons.GetVodSeasonVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/seasons/{season_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "season_id", value: request.seasonId, schema: s.float64() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter27Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort44Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the seasons on an On Demand page
   *
   * @remarks
   * This method returns every season on the specified On Demand page.
   *
   * @returns The seasons were returned.
   *
   * @throws {@link OnDemandSeasons.GetVodSeasonsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodSeasons(
    request: OnDemandSeasons.GetVodSeasonsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandSeasonConnection, OnDemandSeasons.GetVodSeasonsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/seasons"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter27Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort43Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandSeasonConnectionSchema },
        errorFactory: OnDemandSeasons.GetVodSeasonsError,
      },
      options,
    );
  }
}

export namespace OnDemandSeasons {
  export type GetVodSeasonRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the season. */
    seasonId: number;
  };

  export class GetVodSeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodSeasonError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodSeasonVideosRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the season. */
    seasonId: number;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `viewable` - Filter by viewable videos.
     */
    filter?: Filter27;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sorting method.
     *  * `manual` - Sort the results manually.
     *  * `name` - Sort the results by name.
     *  * `purchase_time` - Sort the results by time of purchase.
     *  * `release_date` - Sort the results by release date.
     */
    sort?: Sort44;
  };

  export type GetVodSeasonsRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
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
     *  * `viewable` - Filter by viewable seasons.
     */
    filter?: Filter27;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `date` - Sort the results by date.
     *  * `manual` - Sort the results manually.
     */
    sort?: Sort43;
  };

  export class GetVodSeasonsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodSeasonsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
