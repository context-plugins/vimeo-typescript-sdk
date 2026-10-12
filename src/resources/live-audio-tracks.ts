import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { eventAudioTracksSchema, type EventAudioTracks } from "../models/event-audio-tracks.js";
import {
  liveEventsAudioTracksRequestSchema,
  type LiveEventsAudioTracksRequest,
} from "../models/live-events-audio-tracks-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with event audio tracks.
 */
export class LiveAudioTracks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get event audio track settings
   *
   * @remarks
   * This method returns audio tracks settings for the specified event.
   *
   * @returns The event audio track settings were returned.
   *
   * @throws {@link LiveAudioTracks.GetEventAudioTracksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventAudioTracks(
    request: LiveAudioTracks.GetEventAudioTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<EventAudioTracks, LiveAudioTracks.GetEventAudioTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/audio_tracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventAudioTracksSchema },
        errorFactory: LiveAudioTracks.GetEventAudioTracksError,
      },
      options,
    );
  }

  /**
   * Update event audio tracks
   *
   * @remarks
   * This method updates audio tracks settings on the specified event.
   *
   * @returns The event audio tracks settings were updated.
   *
   * @throws {@link LiveAudioTracks.UpdateEventAudioTracksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEventAudioTracks(
    request: LiveAudioTracks.UpdateEventAudioTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<EventAudioTracks, LiveAudioTracks.UpdateEventAudioTracksError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/audio_tracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => liveEventsAudioTracksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: eventAudioTracksSchema },
        errorFactory: LiveAudioTracks.UpdateEventAudioTracksError,
      },
      options,
    );
  }
}

export namespace LiveAudioTracks {
  export type GetEventAudioTracksRequest = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetEventAudioTracksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetEventAudioTracksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateEventAudioTracksRequest = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsAudioTracksRequest;
  };

  export class UpdateEventAudioTracksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UpdateEventAudioTracksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
