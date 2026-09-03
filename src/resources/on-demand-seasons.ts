import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class OnDemandSeasons {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getVodSeason(
    request: OnDemandSeasons.GetVodSeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandSeason, OnDemandSeasons.GetVodSeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/seasons/{season_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "season_id", value: request.seasonId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandSeasonSchema },
        errorFactory: OnDemandSeasons.GetVodSeasonError,
      },
      options,
    );
  }

  getVodSeasonVideos(
    request: OnDemandSeasons.GetVodSeasonVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ResponseError> {
    return this.#rawClient.execute<VideoConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/seasons/{season_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "season_id", value: request.seasonId, schema: s.number() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter27Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort44Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVodSeasons(
    request: OnDemandSeasons.GetVodSeasonsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandSeasonConnection, OnDemandSeasons.GetVodSeasonsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/seasons"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter27Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort43Schema)) },
        ],
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
    ondemandId: number;
    seasonId: number;
  };

  export class GetVodSeasonError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodSeasonError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodSeasonVideosRequest = {
    ondemandId: number;
    seasonId: number;
    filter?: Filter27;
    page?: number;
    perPage?: number;
    sort?: Sort44;
  };

  export type GetVodSeasonsRequest = {
    ondemandId: number;
    direction?: Direction;
    filter?: Filter27;
    page?: number;
    perPage?: number;
    sort?: Sort43;
  };

  export class GetVodSeasonsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodSeasonsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
