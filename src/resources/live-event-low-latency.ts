import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class LiveEventLowLatency {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  toggleRleLowLatency(
    request: LiveEventLowLatency.ToggleRleLowLatencyRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/low_latency"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
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

  toggleRleLowLatencyAlt1(
    request: LiveEventLowLatency.ToggleRleLowLatencyAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/live_events/{live_event_id}/low_latency"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  toggleRleLowLatencyAlt2(
    request: LiveEventLowLatency.ToggleRleLowLatencyAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEventLowLatency, LiveEventLowLatency.ToggleRleLowLatencyAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/live_events/{live_event_id}/low_latency"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsLowLatencyRequest;
  };

  export class ToggleRleLowLatencyError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ToggleRleLowLatencyError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ToggleRleLowLatencyAlt1Request = {
    liveEventId: number;
    body?: LiveEventsLowLatencyRequest;
  };

  export class ToggleRleLowLatencyAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ToggleRleLowLatencyAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ToggleRleLowLatencyAlt2Request = {
    liveEventId: number;
    body?: MeLiveEventsLowLatencyRequest;
  };

  export class ToggleRleLowLatencyAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ToggleRleLowLatencyAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
