import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter46Schema, type Filter46 } from "../models/filter46.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

export class VideosRecommendations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getRelatedVideos(
    request: VideosRecommendations.GetRelatedVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosRecommendations.GetRelatedVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter46Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosRecommendations.GetRelatedVideosError,
      },
      options,
    );
  }
}

export namespace VideosRecommendations {
  export type GetRelatedVideosRequest = {
    videoId: number;
    filter?: Filter46;
    page?: number;
    perPage?: number;
  };

  export class GetRelatedVideosError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<GetRelatedVideosError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
