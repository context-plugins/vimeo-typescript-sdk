import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with M3U8 playback URLs for event streams.
 */
export class VideosLiveM3U8Playback {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get an M3U8 playback URL for a one-time event
   *
   * @remarks
   * This method returns an M3U8 playback URL for the specified event stream. You should use this
   * endpoint only in conjunction with our recommended procedure for playing events via HLS. For
   * more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).
   *
   * @returns The M3U8 playback URL was returned.
   *
   * @throws {@link VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOneTimeEventM3U8Playback(
    request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/videos/{video_id}/m3u8_playback"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackError,
      },
      options,
    );
  }

  /**
   * Get an M3U8 playback URL for a one-time event
   *
   * @remarks
   * This method returns an M3U8 playback URL for the specified event stream. You should use this
   * endpoint only in conjunction with our recommended procedure for playing events via HLS. For
   * more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).
   *
   * @returns The M3U8 playback URL was returned.
   *
   * @throws {@link VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOneTimeEventM3U8PlaybackAlt1(
    request: VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosLiveM3U8Playback.GetOneTimeEventM3U8PlaybackAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/videos/{video_id}/m3u8_playback"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [],
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
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetOneTimeEventM3U8PlaybackError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetOneTimeEventM3U8PlaybackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOneTimeEventM3U8PlaybackAlt1Request = {
    /** The ID of the video. */
    videoId: number;
  };

  export class GetOneTimeEventM3U8PlaybackAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetOneTimeEventM3U8PlaybackAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
