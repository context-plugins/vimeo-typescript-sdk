import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { eventSessionStatusSchema, type EventSessionStatus } from "../models/event-session-status.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with event sessions.
 */
export class LiveEventSessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the ingest status of an event
   *
   * @remarks
   * This method returns the ingest status of the specified event and associated video.
   *
   * @returns The ingest status was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveClipIngestStatus(
    request: LiveEventSessions.GetLiveClipIngestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<EventSessionStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/session_status"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.string() }],
        query: [{ name: "clip_id", value: request.clipId, schema: s.optional(s.float64()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventSessionStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the ingest status of a one-time event
   *
   * @remarks
   * This method returns the ingest status of the specified event.
   *
   * @returns The ingest status was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveIngestStatus(
    request: LiveEventSessions.GetLiveIngestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<EventSessionStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/sessions/status"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventSessionStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace LiveEventSessions {
  export type GetLiveClipIngestStatusRequest = {
    liveEventId: string;
    /** The ID of the video. */
    clipId?: number;
  };

  export type GetLiveIngestStatusRequest = {
    /** The ID of the event. */
    videoId: number;
  };
}
