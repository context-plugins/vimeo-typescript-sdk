import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandRegionConnectionSchema,
  type OnDemandRegionConnection,
} from "../models/on-demand-region-connection.js";
import { onDemandRegionSchema, type OnDemandRegion } from "../models/on-demand-region.js";
import {
  ondemandPagesRegionsRequestSchema,
  type OndemandPagesRegionsRequest,
} from "../models/ondemand-pages-regions-request.js";
import {
  ondemandPagesRegionsRequest1Schema,
  type OndemandPagesRegionsRequest1,
} from "../models/ondemand-pages-regions-request1.js";
import type { Servers } from "../servers.js";

export class OnDemandRegions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVodRegion(
    request: OnDemandRegions.AddVodRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.AddVodRegionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.AddVodRegionError,
      },
      options,
    );
  }

  deleteVodRegion(
    request: OnDemandRegions.DeleteVodRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandRegions.DeleteVodRegionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandRegions.DeleteVodRegionError,
      },
      options,
    );
  }

  deleteVodRegions(
    request: OnDemandRegions.DeleteVodRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion[], OnDemandRegions.DeleteVodRegionsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ondemandPagesRegionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => onDemandRegionSchema)) },
        errorFactory: OnDemandRegions.DeleteVodRegionsError,
      },
      options,
    );
  }

  getRegion(
    request: OnDemandRegions.GetRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.GetRegionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "country", value: request.country, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.GetRegionError,
      },
      options,
    );
  }

  getRegions(options?: RequestOptions): ApiPromise<OnDemandRegionConnection, ResponseError> {
    return this.#rawClient.execute<OnDemandRegionConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVodRegion(
    request: OnDemandRegions.GetVodRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.GetVodRegionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.GetVodRegionError,
      },
      options,
    );
  }

  getVodRegions(
    request: OnDemandRegions.GetVodRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegionConnection, OnDemandRegions.GetVodRegionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionConnectionSchema },
        errorFactory: OnDemandRegions.GetVodRegionsError,
      },
      options,
    );
  }

  setVodRegions(
    request: OnDemandRegions.SetVodRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.SetVodRegionsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: ondemandPagesRegionsRequest1Schema },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.SetVodRegionsError,
      },
      options,
    );
  }
}

export namespace OnDemandRegions {
  export type AddVodRegionRequest = {
    country: string;
    ondemandId: number;
  };

  export class AddVodRegionError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVodRegionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodRegionRequest = {
    country: string;
    ondemandId: number;
  };

  export class DeleteVodRegionError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVodRegionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodRegionsRequest = {
    ondemandId: number;
    body?: OndemandPagesRegionsRequest;
  };

  export class DeleteVodRegionsError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVodRegionsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetRegionRequest = {
    country: string;
  };

  export class GetRegionError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetRegionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodRegionRequest = {
    country: string;
    ondemandId: number;
  };

  export class GetVodRegionError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodRegionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodRegionsRequest = {
    ondemandId: number;
  };

  export class GetVodRegionsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodRegionsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SetVodRegionsRequest = {
    ondemandId: number;
    body: OndemandPagesRegionsRequest1;
  };

  export class SetVodRegionsError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<SetVodRegionsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
