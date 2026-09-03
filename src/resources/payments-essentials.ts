import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paymentMethodConnectionSchema,
  type PaymentMethodConnection,
} from "../models/payment-method-connection.js";
import { paymentMethodSchema, type PaymentMethod } from "../models/payment-method.js";
import type { Servers } from "../servers.js";

export class PaymentsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deletePaymentMethod(
    request: PaymentsEssentials.DeletePaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsEssentials.DeletePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/payment_methods/{payment_method_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "payment_method_id", value: request.paymentMethodId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsEssentials.DeletePaymentMethodError,
      },
      options,
    );
  }

  getPaymentMethodInfo(
    request: PaymentsEssentials.GetPaymentMethodInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethod, PaymentsEssentials.GetPaymentMethodInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/payment_methods/{payment_method_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "payment_method_id", value: request.paymentMethodId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodSchema },
        errorFactory: PaymentsEssentials.GetPaymentMethodInfoError,
      },
      options,
    );
  }

  getSubscriptionInfo(
    request: PaymentsEssentials.GetSubscriptionInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/subscriptions/{subscription_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPaymentMethods(
    request: PaymentsEssentials.ListPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethodConnection, PaymentsEssentials.ListPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/payment_methods"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "cardmember_name", value: request.cardmemberName, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "show_disabled", value: request.showDisabled, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodConnectionSchema },
        errorFactory: PaymentsEssentials.ListPaymentMethodsError,
      },
      options,
    );
  }
}

export namespace PaymentsEssentials {
  export type DeletePaymentMethodRequest = {
    paymentMethodId: string;
  };

  export class DeletePaymentMethodError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<DeletePaymentMethodError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPaymentMethodInfoRequest = {
    paymentMethodId: string;
  };

  export class GetPaymentMethodInfoError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetPaymentMethodInfoError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSubscriptionInfoRequest = {
    subscriptionId: string;
    userId: string;
  };

  export type ListPaymentMethodsRequest = {
    cardmemberName?: string;
    page?: number;
    perPage?: number;
    showDisabled?: boolean;
  };

  export class ListPaymentMethodsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ListPaymentMethodsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
