import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  eventAutomatedClosedCaptionsSchema,
  type EventAutomatedClosedCaptions,
} from "../models/event-automated-closed-captions.js";
import {
  liveEventsAutoCcRequestSchema,
  type LiveEventsAutoCcRequest,
} from "../models/live-events-auto-cc-request.js";
import {
  meLiveEventsAutoCcRequestSchema,
  type MeLiveEventsAutoCcRequest,
} from "../models/me-live-events-auto-cc-request.js";
import {
  usersLiveEventsAutoCcRequestSchema,
  type UsersLiveEventsAutoCcRequest,
} from "../models/users-live-events-auto-cc-request.js";
import type { Servers } from "../servers.js";

export class LiveEventAutomatedClosedCaptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  editLiveEventAutoCc(
    request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcRequest,
    options?: RequestOptions,
  ): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/auto_cc"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: usersLiveEventsAutoCcRequestSchema },
      },
      {
        success: { kind: "json", schema: eventAutomatedClosedCaptionsSchema },
        errorFactory: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError,
      },
      options,
    );
  }

  editLiveEventAutoCcAlt1(
    request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/live_events/{live_event_id}/auto_cc"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: liveEventsAutoCcRequestSchema },
      },
      {
        success: { kind: "json", schema: eventAutomatedClosedCaptionsSchema },
        errorFactory: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error,
      },
      options,
    );
  }

  editLiveEventAutoCcAlt2(
    request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/live_events/{live_event_id}/auto_cc"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: meLiveEventsAutoCcRequestSchema },
      },
      {
        success: { kind: "json", schema: eventAutomatedClosedCaptionsSchema },
        errorFactory: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEventAutomatedClosedCaptions {
  export type EditLiveEventAutoCcRequest = {
    liveEventId: number;
    userId: number;
    body: UsersLiveEventsAutoCcRequest;
  };

  export class EditLiveEventAutoCcError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<EditLiveEventAutoCcError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventAutoCcAlt1Request = {
    liveEventId: number;
    body: LiveEventsAutoCcRequest;
  };

  export class EditLiveEventAutoCcAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<EditLiveEventAutoCcAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventAutoCcAlt2Request = {
    liveEventId: number;
    body: MeLiveEventsAutoCcRequest;
  };

  export class EditLiveEventAutoCcAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<EditLiveEventAutoCcAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
