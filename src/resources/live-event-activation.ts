import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class LiveEventActivation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateLiveEvent(
    request: LiveEventActivation.ActivateLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventActivation.ActivateLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/activate"),
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

  activateLiveEventAlt1(
    request: LiveEventActivation.ActivateLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventActivation.ActivateLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/activate"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  activateLiveEventAlt2(
    request: LiveEventActivation.ActivateLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventActivation.ActivateLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/live_events/{live_event_id}/activate"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsActivateRequest;
  };

  export class ActivateLiveEventError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
    | Declared<"error6", Error>
  > {
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
    liveEventId: number;
    body?: LiveEventsActivateRequest;
  };

  export class ActivateLiveEventAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
    | Declared<"error6", Error>
  > {
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
    liveEventId: number;
    body?: MeLiveEventsActivateRequest;
  };

  export class ActivateLiveEventAlt2Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
    | Declared<"error5", Error>
    | Declared<"error6", Error>
  > {
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
