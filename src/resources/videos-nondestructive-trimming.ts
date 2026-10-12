import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { trimmedVideoSchema, type TrimmedVideo } from "../models/trimmed-video.js";
import { videosTrimRequestSchema, type VideosTrimRequest } from "../models/videos-trim-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with nondestructive trimming.
 */
export class VideosNondestructiveTrimming {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Start a trim operation for a video
   *
   * @remarks
   * This method starts a trim operation for the specified video.
   *
   * @returns The trim operation was started.
   *
   * @throws {@link VideosNondestructiveTrimming.ClipTrimError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clipTrim(
    request: VideosNondestructiveTrimming.ClipTrimRequest,
    options?: RequestOptions,
  ): ApiPromise<TrimmedVideo, VideosNondestructiveTrimming.ClipTrimError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/trim"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosTrimRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: trimmedVideoSchema },
        errorFactory: VideosNondestructiveTrimming.ClipTrimError,
      },
      options,
    );
  }
}

export namespace VideosNondestructiveTrimming {
  export type ClipTrimRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosTrimRequest;
  };

  export class ClipTrimError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ClipTrimError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
