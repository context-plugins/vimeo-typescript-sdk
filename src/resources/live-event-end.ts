import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with the ending of events.
 */
export class LiveEventEnd {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * End an event
   *
   * @remarks
   * This method ends the specified event. The authenticated user must be the owner of the event.
   *
   * @returns The event was ended.
   *
   * @throws {@link LiveEventEnd.EndLiveEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  endLiveEvent(
    request: LiveEventEnd.EndLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventEnd.EndLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/end"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.float64()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventEnd.EndLiveEventError,
      },
      options,
    );
  }

  /**
   * End an event
   *
   * @remarks
   * This method ends the specified event. The authenticated user must be the owner of the event.
   *
   * @returns The event was ended.
   *
   * @throws {@link LiveEventEnd.EndLiveEventAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  endLiveEventAlt1(
    request: LiveEventEnd.EndLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventEnd.EndLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/end"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.float64()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventEnd.EndLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * End an event
   *
   * @remarks
   * This method ends the specified event. The authenticated user must be the owner of the event.
   *
   * @returns The event was ended.
   *
   * @throws {@link LiveEventEnd.EndLiveEventAlt2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  endLiveEventAlt2(
    request: LiveEventEnd.EndLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventEnd.EndLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/end"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.float64()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the event. */
    liveEventId: number;
    userId: string;
    /** The ID of the streamable video. */
    clipId?: number;
  };

  export class EndLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<EndLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EndLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the streamable video. */
    clipId?: number;
  };

  export class EndLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<EndLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EndLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the streamable video. */
    clipId?: number;
  };

  export class EndLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<EndLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
