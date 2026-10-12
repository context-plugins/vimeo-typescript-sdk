import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { errorSchema, type Error } from "../models/error.js";
import { videoReportReasonSchema, type VideoReportReason } from "../models/video-report-reason.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to moderate videos.
 */
export class VideosModeration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the reasons that videos can be reported
   *
   * @remarks
   * This method returns a list of valid reasons for reporting inappropriate videos on Vimeo.
   *
   * @returns The list of reasons was returned.
   *
   * @throws {@link VideosModeration.GetVideoReportingReasonsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoReportingReasons(
    options?: RequestOptions,
  ): ApiPromise<VideoReportReason, VideosModeration.GetVideoReportingReasonsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/report/video_report_reasons"),
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
        success: { kind: "json", schema: videoReportReasonSchema },
        errorFactory: VideosModeration.GetVideoReportingReasonsError,
      },
      options,
    );
  }
}

export namespace VideosModeration {
  export class GetVideoReportingReasonsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetVideoReportingReasonsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
