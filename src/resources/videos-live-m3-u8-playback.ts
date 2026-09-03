import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class VideosLiveM3U8Playback {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getOneTimeEventM3U8Playback(
    request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/videos/{video_id}/m3u8_playback"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError,
      },
      options,
    );
  }

  getOneTimeEventM3U8PlaybackAlt1(
    request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/videos/{video_id}/m3u8_playback"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error,
      },
      options,
    );
  }
}

export namespace VideosLiveM3U8Playback {
  export type GetOneTimeEventM3U8PlaybackRequest = {
    userId: number;
    videoId: number;
  };

  export class GetOneTimeEventM3U8PlaybackError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetOneTimeEventM3U8PlaybackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOneTimeEventM3U8PlaybackAlt1Request = {
    videoId: number;
  };

  export class GetOneTimeEventM3U8PlaybackAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetOneTimeEventM3U8PlaybackAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
