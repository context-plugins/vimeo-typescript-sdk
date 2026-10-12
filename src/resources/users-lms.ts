import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { scoringAlgorithmSchema, type ScoringAlgorithm } from "../models/scoring-algorithm.js";
import { standardSchema, type Standard } from "../models/standard.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with learning management systems.
 */
export class UsersLms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create and download a proxy package for upload to a learning management system
   *
   * @remarks
   * This method creates and returns a zipped proxy package of the course associated with the
   * specified video. This package is suitable for direct upload to a learning management system.
   *
   * @returns The zipped proxy package was created and returned.
   *
   * @throws {@link UsersLms.DownloadLmsPackageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadLmsPackage(
    request: UsersLms.DownloadLmsPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersLms.DownloadLmsPackageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/lms/download/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [
          {
            name: "completion_threshold",
            value: request.completionThreshold,
            schema: s.optional(s.float64()),
          },
          { name: "course_title", value: request.courseTitle, schema: s.optional(s.string()) },
          { name: "passing_score", value: request.passingScore, schema: s.optional(s.float64()) },
          {
            name: "scoring_algorithm",
            value: request.scoringAlgorithm,
            schema: s.optional(s.lazy(() => scoringAlgorithmSchema)),
          },
          { name: "standard", value: request.standard, schema: s.optional(s.lazy(() => standardSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersLms.DownloadLmsPackageError,
      },
      options,
    );
  }
}

export namespace UsersLms {
  export type DownloadLmsPackageRequest = {
    /** The ID of the team owner. */
    userId: number;
    /** The ID of the course video. */
    videoId: number;
    /** The completion threshold for the course. */
    completionThreshold?: number;
    /** The title of the course. */
    courseTitle?: string;
    /** The passing score for the course. */
    passingScore?: number;
    /**
     * The scoring algorithm for the course.
     *
     * Option descriptions:
     *  * `passfail` - The score is based on a pass or fail.
     *  * `percentage` - The score is based on a percentage.
     *  * `quiz` - The score is based on the course quiz.
     */
    scoringAlgorithm?: ScoringAlgorithm;
    /**
     * The learning management system standard used to create the proxy package.
     *
     * Option descriptions:
     *  * `aicc` - The standard is AICC.
     *  * `cmi5` - The standard is cmi5.
     *  * `scorm12` - The standard is SCORM 1.2.
     *  * `scorm2004_3rd` - The standard is SCORM 2004 3rd Edition.
     *  * `tincan` - The standard is Tin Can or xAPI.
     */
    standard?: Standard;
  };

  export class DownloadLmsPackageError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error400", undefined> | Declared<"error404", undefined> | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<DownloadLmsPackageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
