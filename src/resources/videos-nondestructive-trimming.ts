import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { trimmedVideoSchema, type TrimmedVideo } from "../models/trimmed-video.js";
import { videosTrimRequestSchema, type VideosTrimRequest } from "../models/videos-trim-request.js";
import type { Servers } from "../servers.js";

export class VideosNondestructiveTrimming {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  clipTrim(
    request: VideosNondestructiveTrimming.ClipTrimRequest,
    options?: RequestOptions,
  ): ApiPromise<TrimmedVideo, VideosNondestructiveTrimming.ClipTrimError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/trim"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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
    videoId: number;
    body?: VideosTrimRequest;
  };

  export class ClipTrimError extends ResponseError<Declared<"error", Error> | Declared<"error2", Error>> {
    static readonly errors: ErrorDecoders<ClipTrimError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
