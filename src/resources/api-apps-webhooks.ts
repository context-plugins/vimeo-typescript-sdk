import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class ApiAppsWebhooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addWebhook(
    request: ApiAppsWebhooks.AddWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.AddWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/apps/{app_id}/webhooks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "app_id", value: request.appId, schema: s.number() }],
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

  deleteWebhook(
    request: ApiAppsWebhooks.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiAppsWebhooks.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/apps/{app_id}/webhooks/{webhook_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "app_id", value: request.appId, schema: s.number() },
          { name: "webhook_id", value: request.webhookId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiAppsWebhooks.DeleteWebhookError,
      },
      options,
    );
  }

  getWebhook(
    request: ApiAppsWebhooks.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps/{app_id}/webhooks/{webhook_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "app_id", value: request.appId, schema: s.number() },
          { name: "webhook_id", value: request.webhookId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAppWebhookSchema },
        errorFactory: ApiAppsWebhooks.GetWebhookError,
      },
      options,
    );
  }

  getWebhooks(
    request: ApiAppsWebhooks.GetWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhookConnection, ResponseError> {
    return this.#rawClient.execute<ApiAppWebhookConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/apps/{app_id}/webhooks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "app_id", value: request.appId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiAppWebhookConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWebhook(
    request: ApiAppsWebhooks.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiAppWebhook, ApiAppsWebhooks.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/apps/{app_id}/webhooks/{webhook_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "app_id", value: request.appId, schema: s.number() },
          { name: "webhook_id", value: request.webhookId, schema: s.number() },
        ],
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
    appId: number;
    body?: AppsWebhooksRequest;
  };

  export class AddWebhookError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<AddWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteWebhookRequest = {
    appId: number;
    webhookId: number;
  };

  export class DeleteWebhookError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetWebhookRequest = {
    appId: number;
    webhookId: number;
  };

  export class GetWebhookError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetWebhooksRequest = {
    appId: number;
    page?: number;
    perPage?: number;
  };

  export type UpdateWebhookRequest = {
    appId: number;
    webhookId: number;
    body?: AppsWebhooksRequest1;
  };

  export class UpdateWebhookError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
