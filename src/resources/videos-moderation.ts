import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { videoReportReasonSchema, type VideoReportReason } from "../models/video-report-reason.js";
import type { Servers } from "../servers.js";

export class VideosModeration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getVideoReportingReasons(
    options?: RequestOptions,
  ): ApiPromise<VideoReportReason, VideosModeration.GetVideoReportingReasonsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/report/video_report_reasons"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
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
  export class GetVideoReportingReasonsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetVideoReportingReasonsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
