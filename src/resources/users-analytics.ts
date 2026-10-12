import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { analyticsConnectionSchema, type AnalyticsConnection } from "../models/analytics-connection.js";
import { dimensionSchema, type Dimension } from "../models/dimension.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { sort22Schema, type Sort22 } from "../models/sort22.js";
import { timeIntervalSchema, type TimeInterval } from "../models/time-interval.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with the authenticated user's video analytics.
 */
export class UsersAnalytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get video analytics for the authenticated user
   *
   * @remarks
   * This method returns video analytics for the authenticated user's Vimeo account.
   *
   * @returns The analytics were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserAnalytics(
    request: UsersAnalytics.GetUserAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/analytics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "dimension", value: request.dimension, schema: dimensionSchema },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_content", value: request.filterContent, schema: s.optional(s.string()) },
          {
            name: "filter_countries",
            value: request.filterCountries,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "filter_custom_metadata",
            value: request.filterCustomMetadata,
            schema: s.optional(s.string()),
          },
          {
            name: "filter_device_types",
            value: request.filterDeviceTypes,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "filter_embed_domains",
            value: request.filterEmbedDomains,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter_regions", value: request.filterRegions, schema: s.optional(s.array(s.string())) },
          {
            name: "filter_streaming_types",
            value: request.filterStreamingTypes,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter_workspaces", value: request.filterWorkspaces, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort22Schema)) },
          {
            name: "time_interval",
            value: request.timeInterval,
            schema: s.optional(s.lazy(() => timeIntervalSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get video analytics for the authenticated user
   *
   * @remarks
   * This method returns video analytics for the authenticated user's Vimeo account.
   *
   * @returns The analytics were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserAnalyticsAlt1(
    request: UsersAnalytics.GetUserAnalyticsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/analytics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "dimension", value: request.dimension, schema: dimensionSchema },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_content", value: request.filterContent, schema: s.optional(s.string()) },
          {
            name: "filter_countries",
            value: request.filterCountries,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "filter_custom_metadata",
            value: request.filterCustomMetadata,
            schema: s.optional(s.string()),
          },
          {
            name: "filter_device_types",
            value: request.filterDeviceTypes,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "filter_embed_domains",
            value: request.filterEmbedDomains,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter_regions", value: request.filterRegions, schema: s.optional(s.array(s.string())) },
          {
            name: "filter_streaming_types",
            value: request.filterStreamingTypes,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter_workspaces", value: request.filterWorkspaces, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort22Schema)) },
          {
            name: "time_interval",
            value: request.timeInterval,
            schema: s.optional(s.lazy(() => timeIntervalSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace UsersAnalytics {
  export type GetUserAnalyticsRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The data dimension by which to group the results.
     *
     * Option descriptions:
     *  * `browser` - Group the results by browser.
     *  * `city` - Group the results by city.
     *  * `country` - Group the results by country.
     *  * `device_type` - Group the results by device type.
     *  * `embed_domain` - Group the results by embed domain.
     *  * `embed_domain_path` - Group the results by embed domain path.
     *  * `os` - Group the results by operating system.
     *  * `region` - Group the results by region.
     *  * `streaming_type` - Group the results by streaming type.
     *  * `total` - Group the results by the time range provided.
     *  * `video` - Group the results by video.
     */
    dimension: Dimension;
    /** The start date of the range of results in ISO 8601 format. */
    from: string;
    /** The end date of the range of results in ISO 8601 format. */
    to: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /** A comma-separated list of video, folder, or event URIs to filter. */
    filterContent?: string;
    /** A comma-separated list of country codes in ISO-3166 format to filter on. */
    filterCountries?: string[];
    /**
     * A JSON-encoded custom-metadata filter. Accepts either a bare list of clauses (combined with
     * `and`) or an envelope `{"logic":"and"|"or","clauses":[...]}`. Each clause is an object with
     * `field_id` (integer; matches one of the owning team's `CustomMetadataSettings` fields),
     * `operator` (one of `eq`, `ne`, `gt`, `lt`, `contains`, `not_contains`, `empty`, `not_empty`;
     * the allowed operators depend on the field type), and optional `value` (string; required for
     * every operator except `empty`/`not_empty`). The matching videos are resolved via the search
     * index and intersected with `filter_content` before being passed to the analytics service.
     */
    filterCustomMetadata?: string;
    /** A comma-separated list of device types to filter on. */
    filterDeviceTypes?: string[];
    /** A comma-separated list of domain names to filter on. */
    filterEmbedDomains?: string[];
    /**
     * A comma-separated list of combined country and region codes in ISO-3166 format to filter on.
     */
    filterRegions?: string[];
    /** A comma-separated list of streaming types to filter on. */
    filterStreamingTypes?: string[];
    /** A comma-separated list of workspace IDs to filter for. */
    filterWorkspaces?: string;
    /** The page number of the results to show. */
    page?: number;
    /**
     * The maximum number of items returned from the request, up to a limit of 1000 items. The
     * default value is `50`.
     */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `comments` - Sort the results by the number of comments.
     *  * `completions` - Sort the results by number of completions.
     *  * `country` - Sort the results by country.
     *  * `default` - Sort the results by the values of both the **dimension** and **time_interval**
     *    fields.
     *  * `device_type` - Sort the results by device type.
     *  * `downloads` - Sort the results by the number of downloads.
     *  * `drm_licenses_used` - Sort the results by the number of DRM licenses used. _This option is
     *    available only to users with the DRM feature._
     *  * `embed_domain` - Sort the results by embed domain.
     *  * `finishes` - Sort the results by the number of complete plays.
     *  * `five_star_clicks` - Sort the results by the number of five-star ranking clicks.
     *  * `four_star_clicks` - Sort the results by the number of four-star ranking clicks.
     *  * `impressions` - Sort the results by the number of impressions.
     *  * `like` - Sort the results by the number of likes.
     *  * `mean_percent_watched` - Sort the results by mean percentage played.
     *  * `mean_seconds_watched` - Sort the results by mean seconds played.
     *  * `one_star_clicks` - Sort the results by the number of one-star ranking clicks.
     *  * `ranking_widget_average_rating` - Sort the results by the average ranking widget rating.
     *  * `ranking_widget_clicks` - Sort the results by the number of ranking widget clicks.
     *  * `third_party_impressions` - Sort the results by the number of impressions from all
     *    non-Vimeo players.
     *  * `three_star_clicks` - Sort the results by the number of three-star ranking clicks.
     *  * `thumbs_down_clicks` - Sort the results by the number of thumbs-down clicks.
     *  * `thumbs_up_clicks` - Sort the results by the number of thumbs-up clicks.
     *  * `thumbs_widget_average_rating` - Sort the results by the average thumbs widget rating.
     *  * `thumbs_widget_clicks` - Sort the results by the number of thumbs widget clicks.
     *  * `time` - Sort the results by the value of the **start_date** field. This option is
     *    available only when the value of **time_interval** isn't `none`.
     *  * `total_seconds_watched` - Sort the results by total seconds played.
     *  * `two_star_clicks` - Sort the results by the number of two-star ranking clicks.
     *  * `unique_impressions` - Sort the results by unique impressions.
     *  * `unique_viewers` - Sort the results by unique viewers.
     *  * `video` - Sort the results by video ID.
     *  * `views` - Sort the results by the number of views.
     */
    sort?: Sort22;
    /**
     * The interval by which to aggregate the data according to the specified data dimension. The
     * default value is `none`. This parameter works only when the value of **dimension** is
     * `video`, `country`, `embed_domain`, `device_type`, or `streaming_type`.
     *
     * Option descriptions:
     *  * `day` - Aggregate the results by day according to the specified data dimension.
     *  * `month` - Aggregate the results by month according to the specified data dimension.
     *  * `none` - The results are not aggregated by time interval.
     *  * `week` - Aggregate the results by week according to the specified data dimension.
     *  * `year` - Aggregate the results by year according to the specified data dimension.
     */
    timeInterval?: TimeInterval;
  };

  export type GetUserAnalyticsAlt1Request = {
    /**
     * The data dimension by which to group the results.
     *
     * Option descriptions:
     *  * `browser` - Group the results by browser.
     *  * `city` - Group the results by city.
     *  * `country` - Group the results by country.
     *  * `device_type` - Group the results by device type.
     *  * `embed_domain` - Group the results by embed domain.
     *  * `embed_domain_path` - Group the results by embed domain path.
     *  * `os` - Group the results by operating system.
     *  * `region` - Group the results by region.
     *  * `streaming_type` - Group the results by streaming type.
     *  * `total` - Group the results by the time range provided.
     *  * `video` - Group the results by video.
     */
    dimension: Dimension;
    /** The start date of the range of results in ISO 8601 format. */
    from: string;
    /** The end date of the range of results in ISO 8601 format. */
    to: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /** A comma-separated list of video, folder, or event URIs to filter. */
    filterContent?: string;
    /** A comma-separated list of country codes in ISO-3166 format to filter on. */
    filterCountries?: string[];
    /**
     * A JSON-encoded custom-metadata filter. Accepts either a bare list of clauses (combined with
     * `and`) or an envelope `{"logic":"and"|"or","clauses":[...]}`. Each clause is an object with
     * `field_id` (integer; matches one of the owning team's `CustomMetadataSettings` fields),
     * `operator` (one of `eq`, `ne`, `gt`, `lt`, `contains`, `not_contains`, `empty`, `not_empty`;
     * the allowed operators depend on the field type), and optional `value` (string; required for
     * every operator except `empty`/`not_empty`). The matching videos are resolved via the search
     * index and intersected with `filter_content` before being passed to the analytics service.
     */
    filterCustomMetadata?: string;
    /** A comma-separated list of device types to filter on. */
    filterDeviceTypes?: string[];
    /** A comma-separated list of domain names to filter on. */
    filterEmbedDomains?: string[];
    /**
     * A comma-separated list of combined country and region codes in ISO-3166 format to filter on.
     */
    filterRegions?: string[];
    /** A comma-separated list of streaming types to filter on. */
    filterStreamingTypes?: string[];
    /** A comma-separated list of workspace IDs to filter for. */
    filterWorkspaces?: string;
    /** The page number of the results to show. */
    page?: number;
    /**
     * The maximum number of items returned from the request, up to a limit of 1000 items. The
     * default value is `50`.
     */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `comments` - Sort the results by the number of comments.
     *  * `completions` - Sort the results by number of completions.
     *  * `country` - Sort the results by country.
     *  * `default` - Sort the results by the values of both the **dimension** and **time_interval**
     *    fields.
     *  * `device_type` - Sort the results by device type.
     *  * `downloads` - Sort the results by the number of downloads.
     *  * `drm_licenses_used` - Sort the results by the number of DRM licenses used. _This option is
     *    available only to users with the DRM feature._
     *  * `embed_domain` - Sort the results by embed domain.
     *  * `finishes` - Sort the results by the number of complete plays.
     *  * `five_star_clicks` - Sort the results by the number of five-star ranking clicks.
     *  * `four_star_clicks` - Sort the results by the number of four-star ranking clicks.
     *  * `impressions` - Sort the results by the number of impressions.
     *  * `like` - Sort the results by the number of likes.
     *  * `mean_percent_watched` - Sort the results by mean percentage played.
     *  * `mean_seconds_watched` - Sort the results by mean seconds played.
     *  * `one_star_clicks` - Sort the results by the number of one-star ranking clicks.
     *  * `ranking_widget_average_rating` - Sort the results by the average ranking widget rating.
     *  * `ranking_widget_clicks` - Sort the results by the number of ranking widget clicks.
     *  * `third_party_impressions` - Sort the results by the number of impressions from all
     *    non-Vimeo players.
     *  * `three_star_clicks` - Sort the results by the number of three-star ranking clicks.
     *  * `thumbs_down_clicks` - Sort the results by the number of thumbs-down clicks.
     *  * `thumbs_up_clicks` - Sort the results by the number of thumbs-up clicks.
     *  * `thumbs_widget_average_rating` - Sort the results by the average thumbs widget rating.
     *  * `thumbs_widget_clicks` - Sort the results by the number of thumbs widget clicks.
     *  * `time` - Sort the results by the value of the **start_date** field. This option is
     *    available only when the value of **time_interval** isn't `none`.
     *  * `total_seconds_watched` - Sort the results by total seconds played.
     *  * `two_star_clicks` - Sort the results by the number of two-star ranking clicks.
     *  * `unique_impressions` - Sort the results by unique impressions.
     *  * `unique_viewers` - Sort the results by unique viewers.
     *  * `video` - Sort the results by video ID.
     *  * `views` - Sort the results by the number of views.
     */
    sort?: Sort22;
    /**
     * The interval by which to aggregate the data according to the specified data dimension. The
     * default value is `none`. This parameter works only when the value of **dimension** is
     * `video`, `country`, `embed_domain`, `device_type`, or `streaming_type`.
     *
     * Option descriptions:
     *  * `day` - Aggregate the results by day according to the specified data dimension.
     *  * `month` - Aggregate the results by month according to the specified data dimension.
     *  * `none` - The results are not aggregated by time interval.
     *  * `week` - Aggregate the results by week according to the specified data dimension.
     *  * `year` - Aggregate the results by year according to the specified data dimension.
     */
    timeInterval?: TimeInterval;
  };
}
