import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class LiveEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createLiveEvent(
    request: LiveEssentials.CreateLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersLiveEventsRequest1Schema },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.CreateLiveEventError,
      },
      options,
    );
  }

  createLiveEventAlt1(
    request: LiveEssentials.CreateLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: liveEventsRequest1Schema },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.CreateLiveEventAlt1Error,
      },
      options,
    );
  }

  createLiveEventAlt2(
    request: LiveEssentials.CreateLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.CreateLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meLiveEventsRequest1Schema },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.CreateLiveEventAlt2Error,
      },
      options,
    );
  }

  deleteLiveEvent(
    request: LiveEssentials.DeleteLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventError,
      },
      options,
    );
  }

  deleteLiveEventAlt1(
    request: LiveEssentials.DeleteLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventAlt1Error,
      },
      options,
    );
  }

  deleteLiveEventAlt2(
    request: LiveEssentials.DeleteLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventAlt2Error,
      },
      options,
    );
  }

  deleteLiveEvents(
    request: LiveEssentials.DeleteLiveEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersLiveEventsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventsError,
      },
      options,
    );
  }

  deleteLiveEventsAlt1(
    request: LiveEssentials.DeleteLiveEventsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: liveEventsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventsAlt1Error,
      },
      options,
    );
  }

  deleteLiveEventsAlt2(
    request: LiveEssentials.DeleteLiveEventsAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEssentials.DeleteLiveEventsAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meLiveEventsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEssentials.DeleteLiveEventsAlt2Error,
      },
      options,
    );
  }

  getLiveEvent(
    request: LiveEssentials.GetLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.GetLiveEventError,
      },
      options,
    );
  }

  getLiveEventAlt1(
    request: LiveEssentials.GetLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.GetLiveEventAlt1Error,
      },
      options,
    );
  }

  getLiveEventAlt2(
    request: LiveEssentials.GetLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.GetLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringEventSchema },
        errorFactory: LiveEssentials.GetLiveEventAlt2Error,
      },
      options,
    );
  }

  getLiveEventOccurrences(
    request: LiveEssentials.GetLiveEventOccurrencesRequest,
    options?: RequestOptions,
  ): ApiPromise<LiveEventOccurrenceConnection, ResponseError> {
    return this.#rawClient.execute<LiveEventOccurrenceConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events_occurrences"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "start_date", value: request.startDate, schema: s.string() },
          { name: "end_date", value: request.endDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: liveEventOccurrenceConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getLiveEvents(
    request: LiveEssentials.GetLiveEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventConnection, ResponseError> {
    return this.#rawClient.execute<EventConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter8Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type31Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getLiveEventsAlt1(
    request: LiveEssentials.GetLiveEventsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventConnection, ResponseError> {
    return this.#rawClient.execute<EventConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter8Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type31Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getLiveEventsAlt2(
    request: LiveEssentials.GetLiveEventsAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<EventConnection, ResponseError> {
    return this.#rawClient.execute<EventConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter8Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type31Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateLiveEvent(
    request: LiveEssentials.UpdateLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}"),
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

  updateLiveEventAlt1(
    request: LiveEssentials.UpdateLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  updateLiveEventAlt2(
    request: LiveEssentials.UpdateLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<RecurringEvent, LiveEssentials.UpdateLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/live_events/{live_event_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    userId: number;
    body: UsersLiveEventsRequest1;
  };

  export class CreateLiveEventError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventAlt1Request = {
    body: LiveEventsRequest1;
  };

  export class CreateLiveEventAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventAlt2Request = {
    body: MeLiveEventsRequest1;
  };

  export class CreateLiveEventAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventRequest = {
    liveEventId: number;
    userId: number;
  };

  export class DeleteLiveEventError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventAlt1Request = {
    liveEventId: number;
  };

  export class DeleteLiveEventAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventAlt2Request = {
    liveEventId: number;
  };

  export class DeleteLiveEventAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventsRequest = {
    userId: number;
    body: UsersLiveEventsRequest;
  };

  export class DeleteLiveEventsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<DeleteLiveEventsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventsAlt1Request = {
    body: LiveEventsRequest;
  };

  export class DeleteLiveEventsAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<DeleteLiveEventsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventsAlt2Request = {
    body: MeLiveEventsRequest;
  };

  export class DeleteLiveEventsAlt2Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<DeleteLiveEventsAlt2Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventRequest = {
    liveEventId: number;
    userId: number;
    password?: string;
  };

  export class GetLiveEventError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventAlt1Request = {
    liveEventId: number;
    password?: string;
  };

  export class GetLiveEventAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventAlt2Request = {
    liveEventId: number;
    password?: string;
  };

  export class GetLiveEventAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventOccurrencesRequest = {
    userId: number;
    startDate: string;
    endDate?: string;
    page?: number;
    perPage?: number;
  };

  export type GetLiveEventsRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter8;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
    type?: Type31;
  };

  export type GetLiveEventsAlt1Request = {
    direction?: Direction;
    filter?: Filter8;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
    type?: Type31;
  };

  export type GetLiveEventsAlt2Request = {
    direction?: Direction;
    filter?: Filter8;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
    type?: Type31;
  };

  export type UpdateLiveEventRequest = {
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsRequest2;
  };

  export class UpdateLiveEventError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLiveEventAlt1Request = {
    liveEventId: number;
    body?: LiveEventsRequest2;
  };

  export class UpdateLiveEventAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLiveEventAlt2Request = {
    liveEventId: number;
    body?: MeLiveEventsRequest2;
  };

  export class UpdateLiveEventAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
