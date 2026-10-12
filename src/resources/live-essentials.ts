import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { eventConnectionSchema, type EventConnection } from "../models/event-connection.js";
import { filter8Schema, type Filter8 } from "../models/filter8.js";
import {
  liveEventOccurrenceConnectionSchema,
  type LiveEventOccurrenceConnection,
} from "../models/live-event-occurrence-connection.js";
import { liveEventsRequestSchema, type LiveEventsRequest } from "../models/live-events-request.js";
import { liveEventsRequest1Schema, type LiveEventsRequest1 } from "../models/live-events-request1.js";
import { liveEventsRequest2Schema, type LiveEventsRequest2 } from "../models/live-events-request2.js";
import { meLiveEventsRequestSchema, type MeLiveEventsRequest } from "../models/me-live-events-request.js";
import { meLiveEventsRequest1Schema, type MeLiveEventsRequest1 } from "../models/me-live-events-request1.js";
import { meLiveEventsRequest2Schema, type MeLiveEventsRequest2 } from "../models/me-live-events-request2.js";
import { recurringEventSchema, type RecurringEvent } from "../models/recurring-event.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { type31Schema, type Type31 } from "../models/type31.js";
import {
  usersLiveEventsRequestSchema,
  type UsersLiveEventsRequest,
} from "../models/users-live-events-request.js";
import {
  usersLiveEventsRequest1Schema,
  type UsersLiveEventsRequest1,
} from "../models/users-live-events-request1.js";
import {
  usersLiveEventsRequest2Schema,
  type UsersLiveEventsRequest2,
} from "../models/users-live-events-request2.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with events.
 */
export class LiveEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an event
   *
   * @remarks
   * This method creates a new event for the authenticated user.
   *
   * @returns The event was created.
   *
   * @throws {@link LiveEssentials.CreateLiveEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEvent(
    request: LiveEssentials.CreateLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersLiveEventsRequest1Schema },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.CreateLiveEventError,
      },
      options,
    );
  }

  /**
   * Create an event
   *
   * @remarks
   * This method creates a new event for the authenticated user.
   *
   * @returns The event was created.
   *
   * @throws {@link LiveEssentials.CreateLiveEventAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventAlt1(
    request: LiveEssentials.CreateLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: liveEventsRequest1Schema },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.CreateLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Create an event
   *
   * @remarks
   * This method creates a new event for the authenticated user.
   *
   * @returns The event was created.
   *
   * @throws {@link LiveEssentials.CreateLiveEventAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventAlt2(
    request: LiveEssentials.CreateLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meLiveEventsRequest1Schema },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.CreateLiveEventAlt2Error,
      },
      options,
    );
  }

  /**
   * Delete a specific event
   *
   * @remarks
   * This method deletes a single event belonging to the authenticated user.
   *
   * @returns The event was deleted.
   *
   * @throws {@link LiveEssentials.DeleteLiveEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEvent(
    request: LiveEssentials.DeleteLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventError,
      },
      options,
    );
  }

  /**
   * Delete a specific event
   *
   * @remarks
   * This method deletes a single event belonging to the authenticated user.
   *
   * @returns The event was deleted.
   *
   * @throws {@link LiveEssentials.DeleteLiveEventAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventAlt1(
    request: LiveEssentials.DeleteLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete a specific event
   *
   * @remarks
   * This method deletes a single event belonging to the authenticated user.
   *
   * @returns The event was deleted.
   *
   * @throws {@link LiveEssentials.DeleteLiveEventAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventAlt2(
    request: LiveEssentials.DeleteLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventAlt2Error,
      },
      options,
    );
  }

  /**
   * Delete a list of events
   *
   * @remarks
   * This method deletes multiple events belonging to the authenticated user.
   *
   * @returns The events were deleted.
   *
   * @throws {@link LiveEssentials.DeleteLiveEventsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEvents(
    request: LiveEssentials.DeleteLiveEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersLiveEventsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventsError,
      },
      options,
    );
  }

  /**
   * Delete a list of events
   *
   * @remarks
   * This method deletes multiple events belonging to the authenticated user.
   *
   * @returns The events were deleted.
   *
   * @throws {@link LiveEssentials.DeleteLiveEventsAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventsAlt1(
    request: LiveEssentials.DeleteLiveEventsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: liveEventsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventsAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete a list of events
   *
   * @remarks
   * This method deletes multiple events belonging to the authenticated user.
   *
   * @returns The events were deleted.
   *
   * @throws {@link LiveEssentials.DeleteLiveEventsAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventsAlt2(
    request: LiveEssentials.DeleteLiveEventsAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meLiveEventsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventsAlt2Error,
      },
      options,
    );
  }

  /**
   * Get a specific event
   *
   * @remarks
   * This method returns a single event belonging to the authenticated user.
   *
   * @returns The event was returned.
   *
   * @throws {@link LiveEssentials.GetLiveEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEvent(
    request: LiveEssentials.GetLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.GetLiveEventError,
      },
      options,
    );
  }

  /**
   * Get a specific event
   *
   * @remarks
   * This method returns a single event belonging to the authenticated user.
   *
   * @returns The event was returned.
   *
   * @throws {@link LiveEssentials.GetLiveEventAlt1Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventAlt1(
    request: LiveEssentials.GetLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.GetLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific event
   *
   * @remarks
   * This method returns a single event belonging to the authenticated user.
   *
   * @returns The event was returned.
   *
   * @throws {@link LiveEssentials.GetLiveEventAlt2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventAlt2(
    request: LiveEssentials.GetLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.GetLiveEventAlt2Error,
      },
      options,
    );
  }

  /**
   * Get live event occurrences in a date range
   *
   * @remarks
   * Returns all live event occurrences for the user within the given date range.
   *
   * For recurring events (with rrule), each occurrence within the range is returned as a separate
   * entry. For one-time events (no rrule), the event is included if its start_time falls within the
   * range.
   *
   * @returns The occurrences were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventOccurrences(
    request: LiveEssentials.GetLiveEventOccurrencesRequest,
    options?: RequestOptions,
  ): ApiPromise<LiveEventOccurrenceConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events_occurrences"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "start_date", value: request.startDate, schema: s.string() },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: liveEventOccurrenceConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the events that belong to the user
   *
   * @remarks
   * The method returns every event belonging to the authenticated user.
   *
   * @returns The events were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEvents(
    request: LiveEssentials.GetLiveEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter8Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type31Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the events that belong to the user
   *
   * @remarks
   * The method returns every event belonging to the authenticated user.
   *
   * @returns The events were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventsAlt1(
    request: LiveEssentials.GetLiveEventsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter8Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type31Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the events that belong to the user
   *
   * @remarks
   * The method returns every event belonging to the authenticated user.
   *
   * @returns The events were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventsAlt2(
    request: LiveEssentials.GetLiveEventsAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<EventConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter8Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type31Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an event
   *
   * @remarks
   * This method updates an event belonging to the authenticated user.
   *
   * @returns The event was updated.
   *
   * @throws {@link LiveEssentials.UpdateLiveEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLiveEvent(
    request: LiveEssentials.UpdateLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}"),
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
          schema: s.optional(s.lazy(() => usersLiveEventsRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.UpdateLiveEventError,
      },
      options,
    );
  }

  /**
   * Update an event
   *
   * @remarks
   * This method updates an event belonging to the authenticated user.
   *
   * @returns The event was updated.
   *
   * @throws {@link LiveEssentials.UpdateLiveEventAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLiveEventAlt1(
    request: LiveEssentials.UpdateLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}"),
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
          schema: s.optional(s.lazy(() => liveEventsRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.UpdateLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Update an event
   *
   * @remarks
   * This method updates an event belonging to the authenticated user.
   *
   * @returns The event was updated.
   *
   * @throws {@link LiveEssentials.UpdateLiveEventAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLiveEventAlt2(
    request: LiveEssentials.UpdateLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}"),
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
          schema: s.optional(s.lazy(() => meLiveEventsRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.UpdateLiveEventAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEssentials {
  export type CreateLiveEventRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersLiveEventsRequest1;
  };

  export class CreateLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventAlt1Request = {
    body: LiveEventsRequest1;
  };

  export class CreateLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventAlt2Request = {
    body: MeLiveEventsRequest1;
  };

  export class CreateLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class DeleteLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class DeleteLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventsRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersLiveEventsRequest;
  };

  export class DeleteLiveEventsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventsAlt1Request = {
    body: LiveEventsRequest;
  };

  export class DeleteLiveEventsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventsAlt2Request = {
    body: MeLiveEventsRequest;
  };

  export class DeleteLiveEventsAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventsAlt2Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    /** The password of the event when the privacy is set to `password`. */
    password?: string;
  };

  export class GetLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The password of the event when the privacy is set to `password`. */
    password?: string;
  };

  export class GetLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The password of the event when the privacy is set to `password`. */
    password?: string;
  };

  export class GetLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventOccurrencesRequest = {
    /** The ID of the user. */
    userId: number;
    /** The start of the date range in ISO 8601 format. */
    startDate: string;
    /** The end of the date range in ISO 8601 format. Defaults to 7 days after start. */
    endDate?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetLiveEventsRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `not_in_folder` - Show only events that aren't in a folder.
     *  * `not_in_showcase` - Show only events that aren't in a showcase.
     */
    filter?: Filter8;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     */
    sort?: Sort8;
    /**
     * The type of event to return.
     *
     * Option descriptions:
     *  * `all` - Return all events.
     *  * `one_time` - Return one-time events only.
     *  * `recurring` - Return recurring events only.
     */
    type?: Type31;
  };

  export type GetLiveEventsAlt1Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `not_in_folder` - Show only events that aren't in a folder.
     *  * `not_in_showcase` - Show only events that aren't in a showcase.
     */
    filter?: Filter8;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     */
    sort?: Sort8;
    /**
     * The type of event to return.
     *
     * Option descriptions:
     *  * `all` - Return all events.
     *  * `one_time` - Return one-time events only.
     *  * `recurring` - Return recurring events only.
     */
    type?: Type31;
  };

  export type GetLiveEventsAlt2Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `not_in_folder` - Show only events that aren't in a folder.
     *  * `not_in_showcase` - Show only events that aren't in a showcase.
     */
    filter?: Filter8;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     */
    sort?: Sort8;
    /**
     * The type of event to return.
     *
     * Option descriptions:
     *  * `all` - Return all events.
     *  * `one_time` - Return one-time events only.
     *  * `recurring` - Return recurring events only.
     */
    type?: Type31;
  };

  export type UpdateLiveEventRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsRequest2;
  };

  export class UpdateLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<UpdateLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsRequest2;
  };

  export class UpdateLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<UpdateLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsRequest2;
  };

  export class UpdateLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<UpdateLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
