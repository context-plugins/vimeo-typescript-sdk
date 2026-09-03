import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class LiveEventDestinations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createLiveEventDestination(
    request: LiveEventDestinations.CreateLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.CreateLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/live_events/{live_event_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: meLiveEventsDestinationsRequestSchema },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.CreateLiveEventDestinationError,
      },
      options,
    );
  }

  createLiveEventDestinationAlt1(
    request: LiveEventDestinations.CreateLiveEventDestinationAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.CreateLiveEventDestinationAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: usersLiveEventsDestinationsRequestSchema },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.CreateLiveEventDestinationAlt1Error,
      },
      options,
    );
  }

  createOttDestination(
    request: LiveEventDestinations.CreateOttDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<OttDestination, LiveEventDestinations.CreateOttDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/ott_destinations"),
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
        success: { kind: "json", schema: ottDestinationSchema },
        errorFactory: LiveEventDestinations.CreateOttDestinationError,
      },
      options,
    );
  }

  deleteLiveEventDestination(
    request: LiveEventDestinations.DeleteLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.DeleteLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/destination/{destination_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "destination_id", value: request.destinationId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.DeleteLiveEventDestinationError,
      },
      options,
    );
  }

  deleteOttDestination(
    request: LiveEventDestinations.DeleteOttDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.DeleteOttDestinationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/users/{user_id}/live_events/{live_event_id}/ott_destination/{destination_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "destination_id", value: request.destinationId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.DeleteOttDestinationError,
      },
      options,
    );
  }

  getAvailableDestinations(
    request: LiveEventDestinations.GetAvailableDestinationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.GetAvailableDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.GetAvailableDestinationsError,
      },
      options,
    );
  }

  getAvailableDestinationsAlt1(
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventDestinations.GetAvailableDestinationsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventDestinations.GetAvailableDestinationsAlt1Error,
      },
      options,
    );
  }

  getLiveEventDestination(
    request: LiveEventDestinations.GetLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.GetLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/destination/{destination_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "destination_id", value: request.destinationId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDestinationSchema },
        errorFactory: LiveEventDestinations.GetLiveEventDestinationError,
      },
      options,
    );
  }

  getLiveEventDestinations(
    request: LiveEventDestinations.GetLiveEventDestinationsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/destinations"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDestinationConnectionSchema },
        errorFactory: LiveEventDestinations.GetLiveEventDestinationsError,
      },
      options,
    );
  }

  getLiveEventDestinationsAlt1(
    request: LiveEventDestinations.GetLiveEventDestinationsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<EventDestinationConnection, LiveEventDestinations.GetLiveEventDestinationsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/destinations"),
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
        success: { kind: "json", schema: eventDestinationConnectionSchema },
        errorFactory: LiveEventDestinations.GetLiveEventDestinationsAlt1Error,
      },
      options,
    );
  }

  getOttDestinations(
    request: LiveEventDestinations.GetOttDestinationsRequest,
    options?: RequestOptions,
  ): ApiPromise<OttDestinationConnection, LiveEventDestinations.GetOttDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/ott_destinations"),
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
        success: { kind: "json", schema: ottDestinationConnectionSchema },
        errorFactory: LiveEventDestinations.GetOttDestinationsError,
      },
      options,
    );
  }

  updateLiveEventDestination(
    request: LiveEventDestinations.UpdateLiveEventDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDestination, LiveEventDestinations.UpdateLiveEventDestinationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/destination/{destination_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "destination_id", value: request.destinationId, schema: s.number() }],
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
    liveEventId: number;
    body: MeLiveEventsDestinationsRequest;
  };

  export class CreateLiveEventDestinationError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventDestinationAlt1Request = {
    liveEventId: number;
    userId: number;
    body: UsersLiveEventsDestinationsRequest;
  };

  export class CreateLiveEventDestinationAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventDestinationAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateOttDestinationRequest = {
    liveEventId: number;
    userId: number;
  };

  export class CreateOttDestinationError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<CreateOttDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventDestinationRequest = {
    destinationId: number;
  };

  export class DeleteLiveEventDestinationError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventDestinationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteOttDestinationRequest = {
    liveEventId: number;
    userId: number;
    destinationId: string;
  };

  export class DeleteOttDestinationError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteOttDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAvailableDestinationsRequest = {
    userId: number;
  };

  export class GetAvailableDestinationsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAvailableDestinationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetAvailableDestinationsAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAvailableDestinationsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventDestinationRequest = {
    destinationId: number;
  };

  export class GetLiveEventDestinationError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventDestinationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventDestinationsRequest = {
    liveEventId: number;
  };

  export class GetLiveEventDestinationsError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventDestinationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventDestinationsAlt1Request = {
    liveEventId: number;
    userId: number;
  };

  export class GetLiveEventDestinationsAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventDestinationsAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOttDestinationsRequest = {
    liveEventId: number;
    userId: number;
  };

  export class GetOttDestinationsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetOttDestinationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLiveEventDestinationRequest = {
    destinationId: number;
    body?: DestinationRequest;
  };

  export class UpdateLiveEventDestinationError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateLiveEventDestinationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
