import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { domainConnectionSchema, type DomainConnection } from "../models/domain-connection.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  liveEventsPrivacyDomainsRequestSchema,
  type LiveEventsPrivacyDomainsRequest,
} from "../models/live-events-privacy-domains-request.js";
import {
  meLiveEventsPrivacyDomainsRequestSchema,
  type MeLiveEventsPrivacyDomainsRequest,
} from "../models/me-live-events-privacy-domains-request.js";
import {
  usersLiveEventsPrivacyDomainsRequestSchema,
  type UsersLiveEventsPrivacyDomainsRequest,
} from "../models/users-live-events-privacy-domains-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with embed privacy for events.
 */
export class LiveEmbedPrivacy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all the domains on which an event can be embedded
   *
   * @remarks
   * This method returns every permitted domain for an event. The embed privacy setting must be
   * `whitelist`.
   *
   * @returns The permitted domains for the event were returned.
   *
   * @throws {@link LiveEmbedPrivacy.GetLiveEventWhitelistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventWhitelist(
    request: LiveEmbedPrivacy.GetLiveEventWhitelistRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/privacy/domains"),
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
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: LiveEmbedPrivacy.GetLiveEventWhitelistError,
      },
      options,
    );
  }

  /**
   * Get all the domains on which an event can be embedded
   *
   * @remarks
   * This method returns every permitted domain for an event. The embed privacy setting must be
   * `whitelist`.
   *
   * @returns The permitted domains for the event were returned.
   *
   * @throws {@link LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventWhitelistAlt1(
    request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/privacy/domains"),
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
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the domains on which an event can be embedded
   *
   * @remarks
   * This method returns every permitted domain for an event. The embed privacy setting must be
   * `whitelist`.
   *
   * @returns The permitted domains for the event were returned.
   *
   * @throws {@link LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventWhitelistAlt2(
    request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/privacy/domains"),
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
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error,
      },
      options,
    );
  }

  /**
   * Embed an event on one or more domains
   *
   * @remarks
   * This method embeds an event on the specified domains. The embed privacy setting must be
   * `whitelist`.
   *
   * @returns The event was embedded on the specified domains.
   *
   * @throws {@link LiveEmbedPrivacy.SetLiveEventWhitelistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setLiveEventWhitelist(
    request: LiveEmbedPrivacy.SetLiveEventWhitelistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/privacy/domains"),
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
          schema: s.optional(s.lazy(() => usersLiveEventsPrivacyDomainsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEmbedPrivacy.SetLiveEventWhitelistError,
      },
      options,
    );
  }

  /**
   * Embed an event on one or more domains
   *
   * @remarks
   * This method embeds an event on the specified domains. The embed privacy setting must be
   * `whitelist`.
   *
   * @returns The event was embedded on the specified domains.
   *
   * @throws {@link LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setLiveEventWhitelistAlt1(
    request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/privacy/domains"),
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
          schema: s.optional(s.lazy(() => liveEventsPrivacyDomainsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error,
      },
      options,
    );
  }

  /**
   * Embed an event on one or more domains
   *
   * @remarks
   * This method embeds an event on the specified domains. The embed privacy setting must be
   * `whitelist`.
   *
   * @returns The event was embedded on the specified domains.
   *
   * @throws {@link LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setLiveEventWhitelistAlt2(
    request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/privacy/domains"),
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
          schema: s.optional(s.lazy(() => meLiveEventsPrivacyDomainsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEmbedPrivacy {
  export type GetLiveEventWhitelistRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetLiveEventWhitelistError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventWhitelistError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventWhitelistAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetLiveEventWhitelistAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventWhitelistAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventWhitelistAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetLiveEventWhitelistAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventWhitelistAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLiveEventWhitelistRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsPrivacyDomainsRequest;
  };

  export class SetLiveEventWhitelistError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<SetLiveEventWhitelistError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLiveEventWhitelistAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsPrivacyDomainsRequest;
  };

  export class SetLiveEventWhitelistAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<SetLiveEventWhitelistAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLiveEventWhitelistAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsPrivacyDomainsRequest;
  };

  export class SetLiveEventWhitelistAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<SetLiveEventWhitelistAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
