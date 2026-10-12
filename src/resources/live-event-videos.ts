import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import {
  liveEventsVideosRequestSchema,
  type LiveEventsVideosRequest,
} from "../models/live-events-videos-request.js";
import {
  liveEventsVideosRequest1Schema,
  type LiveEventsVideosRequest1,
} from "../models/live-events-videos-request1.js";
import {
  meLiveEventsVideosRequestSchema,
  type MeLiveEventsVideosRequest,
} from "../models/me-live-events-videos-request.js";
import {
  meLiveEventsVideosRequest1Schema,
  type MeLiveEventsVideosRequest1,
} from "../models/me-live-events-videos-request1.js";
import { sort17Schema, type Sort17 } from "../models/sort17.js";
import {
  usersLiveEventsVideosRequestSchema,
  type UsersLiveEventsVideosRequest,
} from "../models/users-live-events-videos-request.js";
import {
  usersLiveEventsVideosRequest1Schema,
  type UsersLiveEventsVideosRequest1,
} from "../models/users-live-events-videos-request1.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with event videos.
 */
export class LiveEventVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a list of videos to an event
   *
   * @remarks
   * This method adds multiple videos to the specified event.
   *
   * @returns The videos were added.
   *
   * @throws {@link LiveEventVideos.AddVideosToLiveEventError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideosToLiveEvent(
    request: LiveEventVideos.AddVideosToLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersLiveEventsVideosRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventVideos.AddVideosToLiveEventError,
      },
      options,
    );
  }

  /**
   * Add a list of videos to an event
   *
   * @remarks
   * This method adds multiple videos to the specified event.
   *
   * @returns The videos were added.
   *
   * @throws {@link LiveEventVideos.AddVideosToLiveEventAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideosToLiveEventAlt1(
    request: LiveEventVideos.AddVideosToLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/videos"),
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
          schema: s.optional(s.lazy(() => liveEventsVideosRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventVideos.AddVideosToLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Add a list of videos to an event
   *
   * @remarks
   * This method adds multiple videos to the specified event.
   *
   * @returns The videos were added.
   *
   * @throws {@link LiveEventVideos.AddVideosToLiveEventAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideosToLiveEventAlt2(
    request: LiveEventVideos.AddVideosToLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/videos"),
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
          schema: s.optional(s.lazy(() => meLiveEventsVideosRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventVideos.AddVideosToLiveEventAlt2Error,
      },
      options,
    );
  }

  /**
   * Get a specific video in an event
   *
   * @remarks
   * This method returns a single video in the specified event.
   *
   * @returns The video was returned.
   *
   * @throws {@link LiveEventVideos.GetLiveEventVideoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventVideo(
    request: LiveEventVideos.GetLiveEventVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideoError,
      },
      options,
    );
  }

  /**
   * Get a specific video in an event
   *
   * @remarks
   * This method returns a single video in the specified event.
   *
   * @returns The video was returned.
   *
   * @throws {@link LiveEventVideos.GetLiveEventVideoAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventVideoAlt1(
    request: LiveEventVideos.GetLiveEventVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideoAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific video in an event
   *
   * @remarks
   * This method returns a single video in the specified event.
   *
   * @returns The video was returned.
   *
   * @throws {@link LiveEventVideos.GetLiveEventVideoAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventVideoAlt2(
    request: LiveEventVideos.GetLiveEventVideoAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideoAlt2Error,
      },
      options,
    );
  }

  /**
   * Get all the videos in an event
   *
   * @remarks
   * This method returns every video in the specified event.
   *
   * @returns The videos were returned.
   *
   * @throws {@link LiveEventVideos.GetLiveEventVideosError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventVideos(
    request: LiveEventVideos.GetLiveEventVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort17Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideosError,
      },
      options,
    );
  }

  /**
   * Get all the videos in an event
   *
   * @remarks
   * This method returns every video in the specified event.
   *
   * @returns The videos were returned.
   *
   * @throws {@link LiveEventVideos.GetLiveEventVideosAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventVideosAlt1(
    request: LiveEventVideos.GetLiveEventVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort17Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideosAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the videos in an event
   *
   * @remarks
   * This method returns every video in the specified event.
   *
   * @returns The videos were returned.
   *
   * @throws {@link LiveEventVideos.GetLiveEventVideosAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventVideosAlt2(
    request: LiveEventVideos.GetLiveEventVideosAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort17Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideosAlt2Error,
      },
      options,
    );
  }

  /**
   * Remove a list of videos from an event
   *
   * @remarks
   * This method removes multiple videos from the specified event.
   *
   * @returns The videos were removed.
   *
   * @throws {@link LiveEventVideos.RemoveVideosFromLiveEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideosFromLiveEvent(
    request: LiveEventVideos.RemoveVideosFromLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersLiveEventsVideosRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventVideos.RemoveVideosFromLiveEventError,
      },
      options,
    );
  }

  /**
   * Remove a list of videos from an event
   *
   * @remarks
   * This method removes multiple videos from the specified event.
   *
   * @returns The videos were removed.
   *
   * @throws {@link LiveEventVideos.RemoveVideosFromLiveEventAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideosFromLiveEventAlt1(
    request: LiveEventVideos.RemoveVideosFromLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/videos"),
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
          schema: s.optional(s.lazy(() => liveEventsVideosRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventVideos.RemoveVideosFromLiveEventAlt1Error,
      },
      options,
    );
  }

  /**
   * Remove a list of videos from an event
   *
   * @remarks
   * This method removes multiple videos from the specified event.
   *
   * @returns The videos were removed.
   *
   * @throws {@link LiveEventVideos.RemoveVideosFromLiveEventAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideosFromLiveEventAlt2(
    request: LiveEventVideos.RemoveVideosFromLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/videos"),
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
          schema: s.optional(s.lazy(() => meLiveEventsVideosRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventVideos.RemoveVideosFromLiveEventAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEventVideos {
  export type AddVideosToLiveEventRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsVideosRequest1;
  };

  export class AddVideosToLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AddVideosToLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsVideosRequest1;
  };

  export class AddVideosToLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AddVideosToLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsVideosRequest1;
  };

  export class AddVideosToLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AddVideosToLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideoRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetLiveEventVideoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventVideoError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideoAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetLiveEventVideoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventVideoAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideoAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetLiveEventVideoAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventVideoAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideosRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    /** The page that contains the video URI. */
    containingUri?: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `embeddable` - Return embeddable events.
     */
    filter?: Filter3;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added videos.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `arranged` - Sort the results in the order that the user has arranged the videos.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort17;
  };

  export class GetLiveEventVideosError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideosAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The page that contains the video URI. */
    containingUri?: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `embeddable` - Return embeddable events.
     */
    filter?: Filter3;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added videos.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `arranged` - Sort the results in the order that the user has arranged the videos.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort17;
  };

  export class GetLiveEventVideosAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventVideosAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideosAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The page that contains the video URI. */
    containingUri?: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `embeddable` - Return embeddable events.
     */
    filter?: Filter3;
    /**
     * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos
     * (`false`). This parameter is required only when **filter** is `embeddable`.
     */
    filterEmbeddable?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `added` - Sort the results by most recently added videos.
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `arranged` - Sort the results in the order that the user has arranged the videos.
     *  * `comments` - Sort the results by number of comments.
     *  * `date` - Sort the results by creation date.
     *  * `duration` - Sort the results by duration.
     *  * `likes` - Sort the results by number of likes.
     *  * `plays` - Sort the results by number of plays.
     */
    sort?: Sort17;
  };

  export class GetLiveEventVideosAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetLiveEventVideosAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromLiveEventRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsVideosRequest;
  };

  export class RemoveVideosFromLiveEventError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideosFromLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromLiveEventAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsVideosRequest;
  };

  export class RemoveVideosFromLiveEventAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideosFromLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromLiveEventAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsVideosRequest;
  };

  export class RemoveVideosFromLiveEventAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideosFromLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
