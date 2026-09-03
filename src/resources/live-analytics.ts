import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class LiveAnalytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  exportVpaasViewerAnalytics(
    request: LiveAnalytics.ExportVpaasViewerAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveAnalytics.ExportVpaasViewerAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/export_vpaas_analytics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveAnalytics.ExportVpaasViewerAnalyticsError,
      },
      options,
    );
  }
}

export namespace LiveAnalytics {
  export type ExportVpaasViewerAnalyticsRequest = {
    liveEventId: number;
  };

  export class ExportVpaasViewerAnalyticsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<ExportVpaasViewerAnalyticsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
