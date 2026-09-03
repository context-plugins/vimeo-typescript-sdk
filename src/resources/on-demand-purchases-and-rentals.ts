import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { filter19Schema, type Filter19 } from "../models/filter19.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandPageConnectionSchema,
  type OnDemandPageConnection,
} from "../models/on-demand-page-connection.js";
import { onDemandPageSchema, type OnDemandPage } from "../models/on-demand-page.js";
import { sort33Schema, type Sort33 } from "../models/sort33.js";
import type { Servers } from "../servers.js";

export class OnDemandPurchasesAndRentals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfVodWasPurchasedAlt1(
    request: OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/ondemand/purchases/{ondemand_id}"),
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
        errorFactory: OnDemandPurchasesAndRentals.CheckIfVodWasPurchasedAlt1Error,
      },
      options,
    );
  }

  getVodPurchases(
    request: OnDemandPurchasesAndRentals.GetVodPurchasesRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/ondemand/purchases"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter19Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort33Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandPurchasesAndRentals.GetVodPurchasesError,
      },
      options,
    );
  }

  getVodPurchasesAlt1(
    request: OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/ondemand/purchases"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter19Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort33Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandPurchasesAndRentals.GetVodPurchasesAlt1Error,
      },
      options,
    );
  }
}

export namespace OnDemandPurchasesAndRentals {
  export type CheckIfVodWasPurchasedAlt1Request = {
    ondemandId: number;
  };

  export class CheckIfVodWasPurchasedAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CheckIfVodWasPurchasedAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPurchasesRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter19;
    page?: number;
    perPage?: number;
    sort?: Sort33;
  };

  export class GetVodPurchasesError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodPurchasesError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPurchasesAlt1Request = {
    direction?: Direction;
    filter?: Filter19;
    page?: number;
    perPage?: number;
    sort?: Sort33;
  };

  export class GetVodPurchasesAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodPurchasesAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
