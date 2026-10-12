import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { filter26Schema, type Filter26 } from "../models/filter26.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandPromotionCodeSchema,
  type OnDemandPromotionCode,
} from "../models/on-demand-promotion-code.js";
import { onDemandPromotionSchema, type OnDemandPromotion } from "../models/on-demand-promotion.js";
import {
  ondemandPagesPromotionsRequestSchema,
  type OndemandPagesPromotionsRequest,
} from "../models/ondemand-pages-promotions-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with promotions on On Demand pages.
 */
export class OnDemandPromotions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a promotion to an On Demand page
   *
   * @remarks
   * This method adds a promotion to the specified On Demand page. The authenticated user must be
   * the owner of the page.
   *
   * @returns The promotion was added.
   *
   * @throws {@link OnDemandPromotions.CreateVodPromotionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVodPromotion(
    request: OnDemandPromotions.CreateVodPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotion, OnDemandPromotions.CreateVodPromotionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ondemandPagesPromotionsRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandPromotionSchema },
        errorFactory: OnDemandPromotions.CreateVodPromotionError,
      },
      options,
    );
  }

  /**
   * Delete a promotion on an On Demand page
   *
   * @remarks
   * This method deletes a promotion on the specified On Demand page. The authenticated user must be
   * the owner of the page.
   *
   * @returns The promotion was deleted.
   *
   * @throws {@link OnDemandPromotions.DeleteVodPromotionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVodPromotion(
    request: OnDemandPromotions.DeleteVodPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandPromotions.DeleteVodPromotionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions/{promotion_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "promotion_id", value: request.promotionId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandPromotions.DeleteVodPromotionError,
      },
      options,
    );
  }

  /**
   * Get a specific promotion on an On Demand page
   *
   * @remarks
   * This method returns a single promotion on the specified On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The promotion was returned.
   *
   * @throws {@link OnDemandPromotions.GetVodPromotionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPromotion(
    request: OnDemandPromotions.GetVodPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotion, OnDemandPromotions.GetVodPromotionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions/{promotion_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "promotion_id", value: request.promotionId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPromotionSchema },
        errorFactory: OnDemandPromotions.GetVodPromotionError,
      },
      options,
    );
  }

  /**
   * Get all the codes of a promotion on an On Demand page
   *
   * @remarks
   * This method returns every code of the specified promotion on an On Demand page. The
   * authenticated user must be the owner of the page.
   *
   * @returns The codes were returned.
   *
   * @throws {@link OnDemandPromotions.GetVodPromotionCodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPromotionCodes(
    request: OnDemandPromotions.GetVodPromotionCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotionCode, OnDemandPromotions.GetVodPromotionCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "promotion_id", value: request.promotionId, schema: s.float64() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPromotionCodeSchema },
        errorFactory: OnDemandPromotions.GetVodPromotionCodesError,
      },
      options,
    );
  }

  /**
   * Get all the promotions on an On Demand page
   *
   * @remarks
   * This method returns every promotion on the specified On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The promotions were returned.
   *
   * @throws {@link OnDemandPromotions.GetVodPromotionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPromotions(
    request: OnDemandPromotions.GetVodPromotionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotion, OnDemandPromotions.GetVodPromotionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [
          { name: "filter", value: request.filter, schema: filter26Schema },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPromotionSchema },
        errorFactory: OnDemandPromotions.GetVodPromotionsError,
      },
      options,
    );
  }
}

export namespace OnDemandPromotions {
  export type CreateVodPromotionRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    body: OndemandPagesPromotionsRequest;
  };

  export class CreateVodPromotionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateVodPromotionError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodPromotionRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the promotion. */
    promotionId: number;
  };

  export class DeleteVodPromotionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVodPromotionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPromotionRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the promotion. */
    promotionId: number;
  };

  export class GetVodPromotionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetVodPromotionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPromotionCodesRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the promotion. */
    promotionId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVodPromotionCodesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetVodPromotionCodesError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPromotionsRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /**
     * The type of filter to apply to the results.
     *
     * Option descriptions:
     *  * `batch` - Filter the results by the `batch` promotion.
     *  * `default` - Filter the results by the default promotion.
     *  * `single` - Filter the results by the `single` promotion.
     *  * `vip` - Filter the results by the `vip` promotion.
     */
    filter: Filter26;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVodPromotionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetVodPromotionsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
