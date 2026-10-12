import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paymentMethodConnectionSchema,
  type PaymentMethodConnection,
} from "../models/payment-method-connection.js";
import { paymentMethodSchema, type PaymentMethod } from "../models/payment-method.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for making product purchases.
 */
export class PaymentsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a payments service payment method
   *
   * @remarks
   * This method deletes the specified Vimeo payments service payment method.
   *
   * @returns The payments service payment method was deleted.
   *
   * @throws {@link PaymentsEssentials.DeletePaymentMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePaymentMethod(
    request: PaymentsEssentials.DeletePaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsEssentials.DeletePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/payment_methods/{payment_method_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "payment_method_id", value: request.paymentMethodId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsEssentials.DeletePaymentMethodError,
      },
      options,
    );
  }

  /**
   * Get information about a payments service payment method
   *
   * @remarks
   * This method returns information about the specified Vimeo payments service payment method.
   *
   * @returns The payments service payment method information was returned.
   *
   * @throws {@link PaymentsEssentials.GetPaymentMethodInfoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentMethodInfo(
    request: PaymentsEssentials.GetPaymentMethodInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethod, PaymentsEssentials.GetPaymentMethodInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/payment_methods/{payment_method_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "payment_method_id", value: request.paymentMethodId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodSchema },
        errorFactory: PaymentsEssentials.GetPaymentMethodInfoError,
      },
      options,
    );
  }

  /**
   * Get information about a payments service subscription
   *
   * @remarks
   * This method returns information about the specified Vimeo payments service subscription.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionInfo(
    request: PaymentsEssentials.GetSubscriptionInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/subscriptions/{subscription_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of all payments service payment methods
   *
   * @remarks
   * This method returns a list of all Vimeo payments service payment methods that are available to
   * the authenticated user.
   *
   * @returns The list of payments service payment methods was returned.
   *
   * @throws {@link PaymentsEssentials.ListPaymentMethodsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentMethods(
    request: PaymentsEssentials.ListPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethodConnection, PaymentsEssentials.ListPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/payment_methods"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "cardmember_name", value: request.cardmemberName, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "show_disabled", value: request.showDisabled, schema: s.optional(s.boolean()) },
        ],
        headers: [],
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
    /** The ID of the payment method. */
    paymentMethodId: string;
  };

  export class DeletePaymentMethodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeletePaymentMethodError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPaymentMethodInfoRequest = {
    /** The ID of the payment method. */
    paymentMethodId: string;
  };

  export class GetPaymentMethodInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetPaymentMethodInfoError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSubscriptionInfoRequest = {
    /** The ID of the subscription. */
    subscriptionId: string;
    userId: string;
  };

  export type ListPaymentMethodsRequest = {
    /** The name of the card member. */
    cardmemberName?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** Whether to return disabled payment methods. */
    showDisabled?: boolean;
  };

  export class ListPaymentMethodsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ListPaymentMethodsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
