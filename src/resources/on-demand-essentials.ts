import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter18Schema, type Filter18 } from "../models/filter18.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  meOndemandPagesRequestSchema,
  type MeOndemandPagesRequest,
} from "../models/me-ondemand-pages-request.js";
import {
  onDemandPageConnectionSchema,
  type OnDemandPageConnection,
} from "../models/on-demand-page-connection.js";
import { onDemandPageSchema, type OnDemandPage } from "../models/on-demand-page.js";
import { ondemandPagesRequestSchema, type OndemandPagesRequest } from "../models/ondemand-pages-request.js";
import { sort32Schema, type Sort32 } from "../models/sort32.js";
import {
  usersOndemandPagesRequestSchema,
  type UsersOndemandPagesRequest,
} from "../models/users-ondemand-pages-request.js";
import type { Servers } from "../servers.js";

export class OnDemandEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createVod(
    request: OnDemandEssentials.CreateVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, ResponseError> {
    return this.#rawClient.execute<OnDemandPage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersOndemandPagesRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createVodAlt1(
    request: OnDemandEssentials.CreateVodAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, ResponseError> {
    return this.#rawClient.execute<OnDemandPage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/me/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meOndemandPagesRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteVodDraft(
    request: OnDemandEssentials.DeleteVodDraftRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandEssentials.DeleteVodDraftError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandEssentials.DeleteVodDraftError,
      },
      options,
    );
  }

  editVod(
    request: OnDemandEssentials.EditVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandEssentials.EditVodError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ondemandPagesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: OnDemandEssentials.EditVodError,
      },
      options,
    );
  }

  getUserVods(
    request: OnDemandEssentials.GetUserVodsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandEssentials.GetUserVodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter18Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort32Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandEssentials.GetUserVodsError,
      },
      options,
    );
  }

  getUserVodsAlt1(
    request: OnDemandEssentials.GetUserVodsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandEssentials.GetUserVodsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/ondemand/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter18Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort32Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandEssentials.GetUserVodsAlt1Error,
      },
      options,
    );
  }

  getVod(
    request: OnDemandEssentials.GetVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandEssentials.GetVodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: OnDemandEssentials.GetVodError,
      },
      options,
    );
  }
}

export namespace OnDemandEssentials {
  export type CreateVodRequest = {
    userId: number;
    body: UsersOndemandPagesRequest;
  };

  export type CreateVodAlt1Request = {
    body: MeOndemandPagesRequest;
  };

  export type DeleteVodDraftRequest = {
    ondemandId: number;
  };

  export class DeleteVodDraftError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVodDraftError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVodRequest = {
    ondemandId: number;
    body?: OndemandPagesRequest;
  };

  export class EditVodError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditVodError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUserVodsRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter18;
    page?: number;
    perPage?: number;
    sort?: Sort32;
  };

  export class GetUserVodsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetUserVodsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUserVodsAlt1Request = {
    direction?: Direction;
    filter?: Filter18;
    page?: number;
    perPage?: number;
    sort?: Sort32;
  };

  export class GetUserVodsAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetUserVodsAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodRequest = {
    ondemandId: number;
  };

  export class GetVodError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
