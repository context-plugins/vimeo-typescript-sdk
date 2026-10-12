import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  liveEventsActivateRequestSchema,
  type LiveEventsActivateRequest,
} from "../models/live-events-activate-request.js";
import {
  meLiveEventsActivateRequestSchema,
  type MeLiveEventsActivateRequest,
} from "../models/me-live-events-activate-request.js";
import {
  usersLiveEventsActivateRequestSchema,
  type UsersLiveEventsActivateRequest,
} from "../models/users-live-events-activate-request.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with the activation of events.
 */
export class LiveEventActivation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate an event
   *
   * @remarks
   * This method creates the necessary RTMP links for the specified event. Begin streaming to these
   * links to trigger the event on Vimeo. The authenticated user must be the owner of the event.
   *
   * @returns The event was activated.
   *
   * @throws {@link LiveEventActivation.ActivateLiveEventError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateLiveEvent(
    request: LiveEventActivation.ActivateLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventActivation.ActivateLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/activate"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersLiveEventsActivateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventActivation.ActivateLiveEventError,
      },
      options,
    );
  }

  /**
   * Activate an event
   *
   * @remarks
   * This method creates the necessary RTMP links for the specified event. Begin streaming to these
   * links to trigger the event on Vimeo. The authenticated user must be the owner of the event.
   *
   * @returns The event was activated.
   *
   * @throws {@link LiveEventActivation.ActivateLiveEventAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateLiveEventAlt1(
    request: LiveEventActivation.ActivateLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventActivation.ActivateLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/activate"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => liveEventsActivateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventActivation.ActivateLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Activate an event
   *
   * @remarks
   * This method creates the necessary RTMP links for the specified event. Begin streaming to these
   * links to trigger the event on Vimeo. The authenticated user must be the owner of the event.
   *
   * @returns The event was activated.
   *
   * @throws {@link LiveEventActivation.ActivateLiveEventAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateLiveEventAlt2(
    request: LiveEventActivation.ActivateLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventActivation.ActivateLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/activate"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meLiveEventsActivateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventActivation.ActivateLiveEventAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEventActivation {
  export type ActivateLiveEventRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsActivateRequest;
  };

  export class ActivateLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
    >;

    static readonly errors: ErrorDecoders<ActivateLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ActivateLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsActivateRequest;
  };

  export class ActivateLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
    >;

    static readonly errors: ErrorDecoders<ActivateLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ActivateLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsActivateRequest;
  };

  export class ActivateLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
    >;

    static readonly errors: ErrorDecoders<ActivateLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
