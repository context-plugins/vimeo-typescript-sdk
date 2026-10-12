import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter46Schema, type Filter46 } from "../models/filter46.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with recommended videos.
 */
export class VideosRecommendations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all the related videos of a video
   *
   * @remarks
   * This method returns every related video of the specified video.
   *
   * @returns The related videos were returned.
   *
   * @throws {@link VideosRecommendations.GetRelatedVideosError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRelatedVideos(
    request: VideosRecommendations.GetRelatedVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosRecommendations.GetRelatedVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter46Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
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
    /** The ID of the video. */
    videoId: number;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `related` - Return related videos.
     */
    filter?: Filter46;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetRelatedVideosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetRelatedVideosError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
