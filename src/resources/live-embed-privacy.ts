import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class LiveEmbedPrivacy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getLiveEventWhitelist(
    request: LiveEmbedPrivacy.GetLiveEventWhitelistRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/privacy/domains"),
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
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: LiveEmbedPrivacy.GetLiveEventWhitelistError,
      },
      options,
    );
  }

  getLiveEventWhitelistAlt1(
    request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/privacy/domains"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: LiveEmbedPrivacy.GetLiveEventWhitelistAlt1Error,
      },
      options,
    );
  }

  getLiveEventWhitelistAlt2(
    request: LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/privacy/domains"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: LiveEmbedPrivacy.GetLiveEventWhitelistAlt2Error,
      },
      options,
    );
  }

  setLiveEventWhitelist(
    request: LiveEmbedPrivacy.SetLiveEventWhitelistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/privacy/domains"),
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

  setLiveEventWhitelistAlt1(
    request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/live_events/{live_event_id}/privacy/domains"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  setLiveEventWhitelistAlt2(
    request: LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEmbedPrivacy.SetLiveEventWhitelistAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/live_events/{live_event_id}/privacy/domains"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    liveEventId: number;
    userId: number;
  };

  export class GetLiveEventWhitelistError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventWhitelistError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventWhitelistAlt1Request = {
    liveEventId: number;
  };

  export class GetLiveEventWhitelistAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventWhitelistAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventWhitelistAlt2Request = {
    liveEventId: number;
  };

  export class GetLiveEventWhitelistAlt2Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventWhitelistAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLiveEventWhitelistRequest = {
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsPrivacyDomainsRequest;
  };

  export class SetLiveEventWhitelistError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<SetLiveEventWhitelistError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLiveEventWhitelistAlt1Request = {
    liveEventId: number;
    body?: LiveEventsPrivacyDomainsRequest;
  };

  export class SetLiveEventWhitelistAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<SetLiveEventWhitelistAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetLiveEventWhitelistAlt2Request = {
    liveEventId: number;
    body?: MeLiveEventsPrivacyDomainsRequest;
  };

  export class SetLiveEventWhitelistAlt2Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<SetLiveEventWhitelistAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
