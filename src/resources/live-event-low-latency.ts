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
  liveEventsLowLatencyRequestSchema,
  type LiveEventsLowLatencyRequest,
} from "../models/live-events-low-latency-request.js";
import {
  meLiveEventsLowLatencyRequestSchema,
  type MeLiveEventsLowLatencyRequest,
} from "../models/me-live-events-low-latency-request.js";
import {
  recurringEventLowLatencySchema,
  type RecurringEventLowLatency,
} from "../models/recurring-event-low-latency.js";
import {
  usersLiveEventsLowLatencyRequestSchema,
  type UsersLiveEventsLowLatencyRequest,
} from "../models/users-live-events-low-latency-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage an event's low-latency option.
 */
export class LiveEventLowLatency {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Toggle the low-latency option of an event
   *
   * @remarks
   * This method toggles the low-latency option of the specified event.
   *
   * @returns The low-latency status of the event was returned.
   *
   * @throws {@link LiveEventLowLatency.ToggleRleLowLatencyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toggleRleLowLatency(
    request: LiveEventLowLatency.ToggleRleLowLatencyRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/low_latency"),
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
          schema: s.optional(s.lazy(() => usersLiveEventsLowLatencyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recurringEventLowLatencySchema },
        errorFactory: LiveEventLowLatency.ToggleRleLowLatencyError,
      },
      options,
    );
  }

  /**
   * Toggle the low-latency option of an event
   *
   * @remarks
   * This method toggles the low-latency option of the specified event.
   *
   * @returns The low-latency status of the event was returned.
   *
   * @throws {@link LiveEventLowLatency.ToggleRleLowLatencyAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toggleRleLowLatencyAlt1(
    request: LiveEventLowLatency.ToggleRleLowLatencyAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/low_latency"),
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
          schema: s.optional(s.lazy(() => liveEventsLowLatencyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recurringEventLowLatencySchema },
        errorFactory: LiveEventLowLatency.ToggleRleLowLatencyAlt1Error,
      },
      options,
    );
  }

  /**
   * Toggle the low-latency option of an event
   *
   * @remarks
   * This method toggles the low-latency option of the specified event.
   *
   * @returns The low-latency status of the event was returned.
   *
   * @throws {@link LiveEventLowLatency.ToggleRleLowLatencyAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toggleRleLowLatencyAlt2(
    request: LiveEventLowLatency.ToggleRleLowLatencyAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/low_latency"),
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
          schema: s.optional(s.lazy(() => meLiveEventsLowLatencyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: recurringEventLowLatencySchema },
        errorFactory: LiveEventLowLatency.ToggleRleLowLatencyAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEventLowLatency {
  export type ToggleRleLowLatencyRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsLowLatencyRequest;
  };

  export class ToggleRleLowLatencyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ToggleRleLowLatencyError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ToggleRleLowLatencyAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsLowLatencyRequest;
  };

  export class ToggleRleLowLatencyAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ToggleRleLowLatencyAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ToggleRleLowLatencyAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsLowLatencyRequest;
  };

  export class ToggleRleLowLatencyAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ToggleRleLowLatencyAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
