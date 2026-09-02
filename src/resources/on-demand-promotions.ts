import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class OnDemandPromotions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createVodPromotion(
    request: OnDemandPromotions.CreateVodPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotion, OnDemandPromotions.CreateVodPromotionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: ondemandPagesPromotionsRequestSchema },
      },
      {
        success: { kind: "json", schema: onDemandPromotionSchema },
        errorFactory: OnDemandPromotions.CreateVodPromotionError,
      },
      options,
    );
  }

  deleteVodPromotion(
    request: OnDemandPromotions.DeleteVodPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandPromotions.DeleteVodPromotionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions/{promotion_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "promotion_id", value: request.promotionId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandPromotions.DeleteVodPromotionError,
      },
      options,
    );
  }

  getVodPromotion(
    request: OnDemandPromotions.GetVodPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotion, OnDemandPromotions.GetVodPromotionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions/{promotion_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "promotion_id", value: request.promotionId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPromotionSchema },
        errorFactory: OnDemandPromotions.GetVodPromotionError,
      },
      options,
    );
  }

  getVodPromotionCodes(
    request: OnDemandPromotions.GetVodPromotionCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotionCode, OnDemandPromotions.GetVodPromotionCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "promotion_id", value: request.promotionId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPromotionCodeSchema },
        errorFactory: OnDemandPromotions.GetVodPromotionCodesError,
      },
      options,
    );
  }

  getVodPromotions(
    request: OnDemandPromotions.GetVodPromotionsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPromotion, OnDemandPromotions.GetVodPromotionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/promotions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        query: [
          { name: "filter", value: request.filter, schema: filter26Schema },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
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
    ondemandId: number;
    body: OndemandPagesPromotionsRequest;
  };

  export class CreateVodPromotionError extends ResponseError<
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateVodPromotionError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodPromotionRequest = {
    ondemandId: number;
    promotionId: number;
  };

  export class DeleteVodPromotionError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVodPromotionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPromotionRequest = {
    ondemandId: number;
    promotionId: number;
  };

  export class GetVodPromotionError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetVodPromotionError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPromotionCodesRequest = {
    ondemandId: number;
    promotionId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVodPromotionCodesError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetVodPromotionCodesError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodPromotionsRequest = {
    ondemandId: number;
    filter: Filter26;
    page?: number;
    perPage?: number;
  };

  export class GetVodPromotionsError extends ResponseError<
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetVodPromotionsError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
