import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiAppWebhookConnectionSchema,
  type ApiAppWebhookConnection,
} from "../models/api-app-webhook-connection.js";
import { apiAppWebhookSchema, type ApiAppWebhook } from "../models/api-app-webhook.js";
import { appsWebhooksRequestSchema, type AppsWebhooksRequest } from "../models/apps-webhooks-request.js";
import { appsWebhooksRequest1Schema, type AppsWebhooksRequest1 } from "../models/apps-webhooks-request1.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with webhooks for API apps.
 */
export class ApiAppsWebhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a webhook for an app
   *
   * @remarks
   * This method adds a webhook for the specified app.
   *
   * @returns The webhook was added.
   *
   * @throws {@link ApiAppsWebhooks.AddWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addWebhook(
    request: ApiAppsWebhooks.AddWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.AddWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/apps/{app_id}/webhooks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "app_id", value: request.appId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => appsWebhooksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiAppWebhookSchema },
        errorFactory: ApiAppsWebhooks.AddWebhookError,
      },
      options,
    );
  }

  /**
   * Delete a webhook
   *
   * @remarks
   * This method deletes the specified webhook.
   *
   * @returns The webhook was deleted.
   *
   * @throws {@link ApiAppsWebhooks.DeleteWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: ApiAppsWebhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiAppsWebhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/apps/{app_id}/webhooks/{webhook_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "app_id", value: request.appId, schema: s.float64() },
          { name: "webhook_id", value: request.webhookId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiAppsWebhooks.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Get a webhook
   *
   * @remarks
   * This method returns the specified webhook.
   *
   * @returns The webhook was returned.
   *
   * @throws {@link ApiAppsWebhooks.GetWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: ApiAppsWebhooks.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps/{app_id}/webhooks/{webhook_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "app_id", value: request.appId, schema: s.float64() },
          { name: "webhook_id", value: request.webhookId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAppWebhookSchema },
        errorFactory: ApiAppsWebhooks.GetWebhookError,
      },
      options,
    );
  }

  /**
   * Get all webhooks for an app
   *
   * @remarks
   * This method returns every webhook for the specified app.
   *
   * @returns The list of webhooks was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhooks(
    request: ApiAppsWebhooks.GetWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhookConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps/{app_id}/webhooks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "app_id", value: request.appId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAppWebhookConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * This method updates the specified webhook.
   *
   * @returns The webhook was updated.
   *
   * @throws {@link ApiAppsWebhooks.UpdateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: ApiAppsWebhooks.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/apps/{app_id}/webhooks/{webhook_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "app_id", value: request.appId, schema: s.float64() },
          { name: "webhook_id", value: request.webhookId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => appsWebhooksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiAppWebhookSchema },
        errorFactory: ApiAppsWebhooks.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace ApiAppsWebhooks {
  export type AddWebhookRequest = {
    /** The ID of the app for which the webhook is created. */
    appId: number;
    body?: AppsWebhooksRequest;
  };

  export class AddWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AddWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    /** The ID of the app that the webhook is associated with. */
    appId: number;
    /** The ID of the webhook. */
    webhookId: number;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetWebhookRequest = {
    /** The ID of the app that the webhook is associated with. */
    appId: number;
    /** The ID of the webhook. */
    webhookId: number;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhooksRequest = {
    /** The ID of the app that the webhook is associated with. */
    appId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type UpdateWebhookRequest = {
    /** The ID of the app that the webhook is associated with. */
    appId: number;
    /** The ID of the webhook. */
    webhookId: number;
    body?: AppsWebhooksRequest1;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
