import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Use these methods to work with regions on On Demand pages.
 */
export class OnDemandRegions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a specific region to an On Demand page
   *
   * @remarks
   * This method adds a single region to the specified On Demand page. The authenticated user must
   * be the owner of the page.
   *
   * @returns The region was added.
   *
   * @throws {@link OnDemandRegions.AddVodRegionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVodRegion(
    request: OnDemandRegions.AddVodRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.AddVodRegionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.AddVodRegionError,
      },
      options,
    );
  }

  /**
   * Remove a specific region from an On Demand page
   *
   * @remarks
   * This method removes a single region from the specified On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The region was removed.
   *
   * @throws {@link OnDemandRegions.DeleteVodRegionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVodRegion(
    request: OnDemandRegions.DeleteVodRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandRegions.DeleteVodRegionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandRegions.DeleteVodRegionError,
      },
      options,
    );
  }

  /**
   * Remove a list of regions from an On Demand page
   *
   * @remarks
   * This method removes multiple regions from the specified On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The regions were removed.
   *
   * @throws {@link OnDemandRegions.DeleteVodRegionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVodRegions(
    request: OnDemandRegions.DeleteVodRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion[], OnDemandRegions.DeleteVodRegionsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get a specific On Demand region
   *
   * @remarks
   * This method returns a single On Demand region.
   *
   * @returns The region was returned.
   *
   * @throws {@link OnDemandRegions.GetRegionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRegion(
    request: OnDemandRegions.GetRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.GetRegionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "country", value: request.country, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.GetRegionError,
      },
      options,
    );
  }

  /**
   * Get all the On Demand regions
   *
   * @remarks
   * This method returns every existing On Demand region.
   *
   * @returns The regions were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRegions(options?: RequestOptions): ApiPromise<OnDemandRegionConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/regions"),
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
        success: { kind: "json", schema: onDemandRegionConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific region on an On Demand page
   *
   * @remarks
   * This method returns a single region on the specified On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The region was returned.
   *
   * @throws {@link OnDemandRegions.GetVodRegionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodRegion(
    request: OnDemandRegions.GetVodRegionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.GetVodRegionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/regions/{country}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionSchema },
        errorFactory: OnDemandRegions.GetVodRegionError,
      },
      options,
    );
  }

  /**
   * Get all the regions on an On Demand page
   *
   * @remarks
   * This method returns every region on the specified On Demand page. The authenticated user must
   * be the owner of the page.
   *
   * @returns The regions were returned.
   *
   * @throws {@link OnDemandRegions.GetVodRegionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodRegions(
    request: OnDemandRegions.GetVodRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegionConnection, OnDemandRegions.GetVodRegionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandRegionConnectionSchema },
        errorFactory: OnDemandRegions.GetVodRegionsError,
      },
      options,
    );
  }

  /**
   * Add a list of regions to an On Demand page
   *
   * @remarks
   * This method adds multiple regions to the specified On Demand page. The authenticated user must
   * be the owner of the page.
   *
   * @returns The list of regions was added.
   *
   * @throws {@link OnDemandRegions.SetVodRegionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setVodRegions(
    request: OnDemandRegions.SetVodRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandRegion, OnDemandRegions.SetVodRegionsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/regions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The country code of the region to add. */
    country: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class AddVodRegionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<AddVodRegionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodRegionRequest = {
    /** The country code of the region to remove. */
    country: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class DeleteVodRegionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVodRegionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodRegionsRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    body?: OndemandPagesRegionsRequest;
  };

  export class DeleteVodRegionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVodRegionsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetRegionRequest = {
    /** The country code of the region to return. */
    country: string;
  };

  export class GetRegionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetRegionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodRegionRequest = {
    /** The country code of the region to return. */
    country: string;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetVodRegionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodRegionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodRegionsRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetVodRegionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodRegionsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SetVodRegionsRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    body: OndemandPagesRegionsRequest1;
  };

  export class SetVodRegionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<SetVodRegionsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
