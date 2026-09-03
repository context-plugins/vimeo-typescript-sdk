import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class LiveEventEnd {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  endLiveEvent(
    request: LiveEventEnd.EndLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventEnd.EndLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/end"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventEnd.EndLiveEventError,
      },
      options,
    );
  }

  endLiveEventAlt1(
    request: LiveEventEnd.EndLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventEnd.EndLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/end"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventEnd.EndLiveEventAlt1Error,
      },
      options,
    );
  }

  endLiveEventAlt2(
    request: LiveEventEnd.EndLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventEnd.EndLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/live_events/{live_event_id}/end"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventEnd.EndLiveEventAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEventEnd {
  export type EndLiveEventRequest = {
    liveEventId: number;
    userId: string;
    clipId?: number;
  };

  export class EndLiveEventError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<EndLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EndLiveEventAlt1Request = {
    liveEventId: number;
    clipId?: number;
  };

  export class EndLiveEventAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<EndLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EndLiveEventAlt2Request = {
    liveEventId: number;
    clipId?: number;
  };

  export class EndLiveEventAlt2Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<EndLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
