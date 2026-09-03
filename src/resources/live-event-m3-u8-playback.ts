import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class LiveEventM3U8Playback {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getLiveEventM3U8Playback(
    request: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/m3u8_playback"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "dvr", value: request.dvr, schema: s.optional(s.number()) },
          { name: "max_fps_fhd", value: request.maxFpsFhd, schema: s.optional(s.number()) },
          { name: "ttl", value: request.ttl, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackError,
      },
      options,
    );
  }

  getLiveEventM3U8PlaybackAlt1(
    request: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/m3u8_playback"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [
          { name: "dvr", value: request.dvr, schema: s.optional(s.number()) },
          { name: "max_fps_fhd", value: request.maxFpsFhd, schema: s.optional(s.number()) },
          { name: "ttl", value: request.ttl, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventM3U8Playback.GetLiveEventM3U8PlaybackAlt1Error,
      },
      options,
    );
  }
}

export namespace LiveEventM3U8Playback {
  export type GetLiveEventM3U8PlaybackRequest = {
    liveEventId: number;
    userId: number;
    dvr?: number;
    maxFpsFhd?: number;
    ttl?: number;
  };

  export class GetLiveEventM3U8PlaybackError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
    | Declared<"error6", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventM3U8PlaybackError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventM3U8PlaybackAlt1Request = {
    liveEventId: number;
    dvr?: number;
    maxFpsFhd?: number;
    ttl?: number;
  };

  export class GetLiveEventM3U8PlaybackAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
    | Declared<"error6", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventM3U8PlaybackAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
