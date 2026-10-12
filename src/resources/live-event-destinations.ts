import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { destinationRequestSchema, type DestinationRequest } from "../models/destination-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  eventDestinationConnectionSchema,
  type EventDestinationConnection,
} from "../models/event-destination-connection.js";
import { eventDestinationSchema, type EventDestination } from "../models/event-destination.js";
import {
  meLiveEventsDestinationsRequestSchema,
  type MeLiveEventsDestinationsRequest,
} from "../models/me-live-events-destinations-request.js";
import {
  ottDestinationConnectionSchema,
  type OttDestinationConnection,
} from "../models/ott-destination-connection.js";
import { ottDestinationSchema, type OttDestination } from "../models/ott-destination.js";
import {
  usersLiveEventsDestinationsRequestSchema,
  type UsersLiveEventsDestinationsRequest,
} from "../models/users-live-events-destinations-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with event destinations.
 */
export class LiveEventDestinations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an event destination
   *
   * @remarks
   * This method creates a destination for the specified event. The authenticated user must be the
   * owner of the event.
   *
   * @returns The event destination was created.
   *
   * @throws {@link LiveEventDestinations.CreateLiveEventDestinationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventDestination(
    request: LiveEventDestinations.CreateLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.CreateLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meLiveEventsDestinationsRequestSchema },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.CreateLiveEventDestinationError,
      },
      options,
    );
  }

  /**
   * Create an event destination
   *
   * @remarks
   * This method creates a destination for the specified event. The authenticated user must be the
   * owner of the event.
   *
   * @returns The event destination was created.
   *
   * @throws {@link LiveEventDestinations.CreateLiveEventDestinationAlt1Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventDestinationAlt1(
    request: LiveEventDestinations.CreateLiveEventDestinationAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.CreateLiveEventDestinationAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/destinations"),
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
        body: { kind: "json", value: request.body, schema: usersLiveEventsDestinationsRequestSchema },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.CreateLiveEventDestinationAlt1Error,
      },
      options,
    );
  }

  /**
   * Create an event OTT destination
   *
   * @remarks
   * This method creates an OTT channel as the destination of the specified event. The authenticated
   * user must be the owner of the event.
   *
   * @returns The new OTT destination was created.
   *
   * @throws {@link LiveEventDestinations.CreateOttDestinationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOttDestination(
    request: LiveEventDestinations.CreateOttDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<OttDestination, LiveEventDestinations.CreateOttDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/ott_destinations"),
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
        success: { kind: "json", schema: ottDestinationSchema },
        errorFactory: LiveEventDestinations.CreateOttDestinationError,
      },
      options,
    );
  }

  /**
   * Delete an event destination
   *
   * @remarks
   * This method deletes the specified event destination belonging to the authenticated user.
   *
   * @returns The event destination was deleted.
   *
   * @throws {@link LiveEventDestinations.DeleteLiveEventDestinationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventDestination(
    request: LiveEventDestinations.DeleteLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.DeleteLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/destination/{destination_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "destination_id", value: request.destinationId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.DeleteLiveEventDestinationError,
      },
      options,
    );
  }

  /**
   * Delete an event OTT destination
   *
   * @remarks
   * This method deletes an OTT channel as the destination of the specified event. The authenticated
   * user must be the owner of the event.
   *
   * @returns The OTT destination was deleted.
   *
   * @throws {@link LiveEventDestinations.DeleteOttDestinationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOttDestination(
    request: LiveEventDestinations.DeleteOttDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.DeleteOttDestinationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/live_events/{live_event_id}/ott_destination/{destination_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "destination_id", value: request.destinationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.DeleteOttDestinationError,
      },
      options,
    );
  }

  /**
   * Get all available event destinations for the user to stream to
   *
   * @remarks
   * This method returns every available event destination for the authenticated user to stream to.
   *
   * @returns The event destinations were returned.
   *
   * @throws {@link LiveEventDestinations.GetAvailableDestinationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableDestinations(
    request: LiveEventDestinations.GetAvailableDestinationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.GetAvailableDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.GetAvailableDestinationsError,
      },
      options,
    );
  }

  /**
   * Get all available event destinations for the user to stream to
   *
   * @remarks
   * This method returns every available event destination for the authenticated user to stream to.
   *
   * @returns The event destinations were returned.
   *
   * @throws {@link LiveEventDestinations.GetAvailableDestinationsAlt1Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableDestinationsAlt1(
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.GetAvailableDestinationsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.GetAvailableDestinationsAlt1Error,
      },
      options,
    );
  }

  /**
   * Get an event destination
   *
   * @remarks
   * This method returns the specified event destination belonging to the authenticated user.
   *
   * @returns The event destination was returned.
   *
   * @throws {@link LiveEventDestinations.GetLiveEventDestinationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventDestination(
    request: LiveEventDestinations.GetLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.GetLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/destination/{destination_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "destination_id", value: request.destinationId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.GetLiveEventDestinationError,
      },
      options,
    );
  }

  /**
   * Get all the destinations of a recurring event
   *
   * @remarks
   * This method returns every destination of the specified event. The authenticated user must be
   * the owner of the event.
   *
   * @returns The event destinations were returned.
   *
   * @throws {@link LiveEventDestinations.GetLiveEventDestinationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventDestinations(
    request: LiveEventDestinations.GetLiveEventDestinationsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDestinationConnectionSchema },
        errorFactory: LiveEventDestinations.GetLiveEventDestinationsError,
      },
      options,
    );
  }

  /**
   * Get all the destinations of a recurring event
   *
   * @remarks
   * This method returns every destination of the specified event. The authenticated user must be
   * the owner of the event.
   *
   * @returns The event destinations were returned.
   *
   * @throws {@link LiveEventDestinations.GetLiveEventDestinationsAlt1Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventDestinationsAlt1(
    request: LiveEventDestinations.GetLiveEventDestinationsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/destinations"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDestinationConnectionSchema },
        errorFactory: LiveEventDestinations.GetLiveEventDestinationsAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the OTT destinations of a recurring event
   *
   * @remarks
   * This method returns every OTT destination of the specified event. The authenticated user must
   * be the owner of the event.
   *
   * @returns The OTT destinations were returned.
   *
   * @throws {@link LiveEventDestinations.GetOttDestinationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOttDestinations(
    request: LiveEventDestinations.GetOttDestinationsRequest,
    options?: RequestOptions,
  ): ApiPromise<OttDestinationConnection, LiveEventDestinations.GetOttDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/ott_destinations"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ottDestinationConnectionSchema },
        errorFactory: LiveEventDestinations.GetOttDestinationsError,
      },
      options,
    );
  }

  /**
   * Update an event destination
   *
   * @remarks
   * This method updates the specified event destination belonging to the authenticated user.
   *
   * @returns The event destination was updated.
   *
   * @throws {@link LiveEventDestinations.UpdateLiveEventDestinationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLiveEventDestination(
    request: LiveEventDestinations.UpdateLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.UpdateLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/destination/{destination_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "destination_id", value: request.destinationId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => destinationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.UpdateLiveEventDestinationError,
      },
      options,
    );
  }
}

export namespace LiveEventDestinations {
  export type CreateLiveEventDestinationRequest = {
    /** The ID of the event. */
    liveEventId: number;
    body: MeLiveEventsDestinationsRequest;
  };

  export class CreateLiveEventDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<CreateLiveEventDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventDestinationAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body: UsersLiveEventsDestinationsRequest;
  };

  export class CreateLiveEventDestinationAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<CreateLiveEventDestinationAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateOttDestinationRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class CreateOttDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<CreateOttDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventDestinationRequest = {
    /** The ID of the event destination. */
    destinationId: number;
  };

  export class DeleteLiveEventDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteLiveEventDestinationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteOttDestinationRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    destinationId: string;
  };

  export class DeleteOttDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteOttDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAvailableDestinationsRequest = {
    /** The user ID of the team owner. */
    userId: number;
  };

  export class GetAvailableDestinationsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAvailableDestinationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetAvailableDestinationsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetAvailableDestinationsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventDestinationRequest = {
    /** The ID of the event destination. */
    destinationId: number;
  };

  export class GetLiveEventDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventDestinationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventDestinationsRequest = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetLiveEventDestinationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventDestinationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventDestinationsAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetLiveEventDestinationsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventDestinationsAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOttDestinationsRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetOttDestinationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetOttDestinationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLiveEventDestinationRequest = {
    /** The ID of the event destination. */
    destinationId: number;
    body?: DestinationRequest;
  };

  export class UpdateLiveEventDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<UpdateLiveEventDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
