import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { eventSessionStatusSchema, type EventSessionStatus } from "../models/event-session-status.js";
import type { Servers } from "../servers.js";

export class LiveEventSessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getLiveClipIngestStatus(
    request: LiveEventSessions.GetLiveClipIngestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<EventSessionStatus, ResponseError> {
    return this.#rawClient.execute<EventSessionStatus, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/session_status"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.string() }],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventSessionStatusSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getLiveIngestStatus(
    request: LiveEventSessions.GetLiveIngestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<EventSessionStatus, ResponseError> {
    return this.#rawClient.execute<EventSessionStatus, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/sessions/status"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventSessionStatusSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace LiveEventSessions {
  export type GetLiveClipIngestStatusRequest = {
    liveEventId: string;
    clipId?: number;
  };

  export type GetLiveIngestStatusRequest = {
    videoId: number;
  };
}
