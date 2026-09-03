import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { analyticsConnectionSchema, type AnalyticsConnection } from "../models/analytics-connection.js";
import { dimensionSchema, type Dimension } from "../models/dimension.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { sort22Schema, type Sort22 } from "../models/sort22.js";
import { timeIntervalSchema, type TimeInterval } from "../models/time-interval.js";
import type { Servers } from "../servers.js";

export class UsersAnalytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getUserAnalytics(
    request: UsersAnalytics.GetUserAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsConnection, ResponseError> {
    return this.#rawClient.execute<AnalyticsConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/analytics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
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
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort22Schema)) },
          {
            name: "time_interval",
            value: request.timeInterval,
            schema: s.optional(s.lazy(() => timeIntervalSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserAnalyticsAlt1(
    request: UsersAnalytics.GetUserAnalyticsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsConnection, ResponseError> {
    return this.#rawClient.execute<AnalyticsConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/analytics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
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
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort22Schema)) },
          {
            name: "time_interval",
            value: request.timeInterval,
            schema: s.optional(s.lazy(() => timeIntervalSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace UsersAnalytics {
  export type GetUserAnalyticsRequest = {
    userId: number;
    dimension: Dimension;
    from: string;
    to: string;
    direction?: Direction;
    filterContent?: string;
    filterCountries?: string[];
    filterCustomMetadata?: string;
    filterDeviceTypes?: string[];
    filterEmbedDomains?: string[];
    filterRegions?: string[];
    filterStreamingTypes?: string[];
    filterWorkspaces?: string;
    page?: number;
    perPage?: number;
    sort?: Sort22;
    timeInterval?: TimeInterval;
  };

  export type GetUserAnalyticsAlt1Request = {
    dimension: Dimension;
    from: string;
    to: string;
    direction?: Direction;
    filterContent?: string;
    filterCountries?: string[];
    filterCustomMetadata?: string;
    filterDeviceTypes?: string[];
    filterEmbedDomains?: string[];
    filterRegions?: string[];
    filterStreamingTypes?: string[];
    filterWorkspaces?: string;
    page?: number;
    perPage?: number;
    sort?: Sort22;
    timeInterval?: TimeInterval;
  };
}
