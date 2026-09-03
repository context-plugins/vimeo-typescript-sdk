import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { eventAudioTracksSchema, type EventAudioTracks } from "../models/event-audio-tracks.js";
import {
  liveEventsAudioTracksRequestSchema,
  type LiveEventsAudioTracksRequest,
} from "../models/live-events-audio-tracks-request.js";
import type { Servers } from "../servers.js";

export class LiveAudioTracks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getEventAudioTracks(
    request: LiveAudioTracks.GetEventAudioTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<EventAudioTracks, LiveAudioTracks.GetEventAudioTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/audio_tracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventAudioTracksSchema },
        errorFactory: LiveAudioTracks.GetEventAudioTracksError,
      },
      options,
    );
  }

  updateEventAudioTracks(
    request: LiveAudioTracks.UpdateEventAudioTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<EventAudioTracks, LiveAudioTracks.UpdateEventAudioTracksError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/live_events/{live_event_id}/audio_tracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    liveEventId: number;
  };

  export class GetEventAudioTracksError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetEventAudioTracksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateEventAudioTracksRequest = {
    liveEventId: number;
    body?: LiveEventsAudioTracksRequest;
  };

  export class UpdateEventAudioTracksError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateEventAudioTracksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
