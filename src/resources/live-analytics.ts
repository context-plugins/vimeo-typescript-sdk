import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with analytics for events.
 */
export class LiveAnalytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Export VPaaS viewer analytics
   *
   * @remarks
   * This method queues an export of VPaaS viewer analytics for the specified live event.
   *
   * The authenticated user must be the owner of the event or have edit permissions. The webhook is
   * delivered to the managing vendor app's registered webhook URL.
   *
   * @returns The analytics export has been queued for processing.
   *
   * @throws {@link LiveAnalytics.ExportVpaasViewerAnalyticsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportVpaasViewerAnalytics(
    request: LiveAnalytics.ExportVpaasViewerAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveAnalytics.ExportVpaasViewerAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/export_vpaas_analytics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the live event. */
    liveEventId: number;
  };

  export class ExportVpaasViewerAnalyticsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<ExportVpaasViewerAnalyticsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
