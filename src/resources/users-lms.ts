import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { scoringAlgorithmSchema, type ScoringAlgorithm } from "../models/scoring-algorithm.js";
import { standardSchema, type Standard } from "../models/standard.js";
import type { Servers } from "../servers.js";

export class UsersLms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  downloadLmsPackage(
    request: UsersLms.DownloadLmsPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersLms.DownloadLmsPackageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/lms/download/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [
          {
            name: "completion_threshold",
            value: request.completionThreshold,
            schema: s.optional(s.number()),
          },
          { name: "course_title", value: request.courseTitle, schema: s.optional(s.string()) },
          { name: "passing_score", value: request.passingScore, schema: s.optional(s.number()) },
          {
            name: "scoring_algorithm",
            value: request.scoringAlgorithm,
            schema: s.optional(s.lazy(() => scoringAlgorithmSchema)),
          },
          { name: "standard", value: request.standard, schema: s.optional(s.lazy(() => standardSchema)) },
        ],
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
    userId: number;
    videoId: number;
    completionThreshold?: number;
    courseTitle?: string;
    passingScore?: number;
    scoringAlgorithm?: ScoringAlgorithm;
    standard?: Standard;
  };

  export class DownloadLmsPackageError extends ResponseError<
    Declared<"error400", undefined> | Declared<"error404", undefined> | Declared<"error500", undefined>
  > {
    static readonly errors: ErrorDecoders<DownloadLmsPackageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
