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

/**
 * Use these methods to work with the automated closed captions preferences of events.
 */
export class LiveEventAutomatedClosedCaptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Edit the automated closed captions preference of an event
   *
   * @remarks
   * This method edits the automated closed captions preference for the specified event.
   *
   * @returns The automated closed captions preference was edited.
   *
   * @throws {@link LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editLiveEventAutoCc(
    request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcRequest,
    options?: RequestOptions,
  ): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/auto_cc"),
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
        body: { kind: "json", value: request.body, schema: usersLiveEventsAutoCcRequestSchema },
      },
      {
        success: { kind: "json", schema: eventAutomatedClosedCaptionsSchema },
        errorFactory: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcError,
      },
      options,
    );
  }

  /**
   * Edit the automated closed captions preference of an event
   *
   * @remarks
   * This method edits the automated closed captions preference for the specified event.
   *
   * @returns The automated closed captions preference was edited.
   *
   * @throws {@link LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editLiveEventAutoCcAlt1(
    request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/auto_cc"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: liveEventsAutoCcRequestSchema },
      },
      {
        success: { kind: "json", schema: eventAutomatedClosedCaptionsSchema },
        errorFactory: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt1Error,
      },
      options,
    );
  }

  /**
   * Edit the automated closed captions preference of an event
   *
   * @remarks
   * This method edits the automated closed captions preference for the specified event.
   *
   * @returns The automated closed captions preference was edited.
   *
   * @throws {@link LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editLiveEventAutoCcAlt2(
    request: LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<EventAutomatedClosedCaptions, LiveEventAutomatedClosedCaptions.EditLiveEventAutoCcAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/auto_cc"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body: UsersLiveEventsAutoCcRequest;
  };

  export class EditLiveEventAutoCcError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<EditLiveEventAutoCcError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventAutoCcAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body: LiveEventsAutoCcRequest;
  };

  export class EditLiveEventAutoCcAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<EditLiveEventAutoCcAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventAutoCcAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body: MeLiveEventsAutoCcRequest;
  };

  export class EditLiveEventAutoCcAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<EditLiveEventAutoCcAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
