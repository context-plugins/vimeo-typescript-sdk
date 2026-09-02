import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class LiveEventVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideosToLiveEvent(
    request: LiveEventVideos.AddVideosToLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
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

  addVideosToLiveEventAlt1(
    request: LiveEventVideos.AddVideosToLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  addVideosToLiveEventAlt2(
    request: LiveEventVideos.AddVideosToLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.AddVideosToLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  getLiveEventVideo(
    request: LiveEventVideos.GetLiveEventVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideoError,
      },
      options,
    );
  }

  getLiveEventVideoAlt1(
    request: LiveEventVideos.GetLiveEventVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideoAlt1Error,
      },
      options,
    );
  }

  getLiveEventVideoAlt2(
    request: LiveEventVideos.GetLiveEventVideoAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, LiveEventVideos.GetLiveEventVideoAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideoAlt2Error,
      },
      options,
    );
  }

  getLiveEventVideos(
    request: LiveEventVideos.GetLiveEventVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort17Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideosError,
      },
      options,
    );
  }

  getLiveEventVideosAlt1(
    request: LiveEventVideos.GetLiveEventVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort17Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideosAlt1Error,
      },
      options,
    );
  }

  getLiveEventVideosAlt2(
    request: LiveEventVideos.GetLiveEventVideosAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, LiveEventVideos.GetLiveEventVideosAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort17Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: LiveEventVideos.GetLiveEventVideosAlt2Error,
      },
      options,
    );
  }

  removeVideosFromLiveEvent(
    request: LiveEventVideos.RemoveVideosFromLiveEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
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

  removeVideosFromLiveEventAlt1(
    request: LiveEventVideos.RemoveVideosFromLiveEventAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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

  removeVideosFromLiveEventAlt2(
    request: LiveEventVideos.RemoveVideosFromLiveEventAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventVideos.RemoveVideosFromLiveEventAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/live_events/{live_event_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsVideosRequest1;
  };

  export class AddVideosToLiveEventError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AddVideosToLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToLiveEventAlt1Request = {
    liveEventId: number;
    body?: LiveEventsVideosRequest1;
  };

  export class AddVideosToLiveEventAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AddVideosToLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToLiveEventAlt2Request = {
    liveEventId: number;
    body?: MeLiveEventsVideosRequest1;
  };

  export class AddVideosToLiveEventAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AddVideosToLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideoRequest = {
    liveEventId: number;
    userId: number;
    videoId: number;
  };

  export class GetLiveEventVideoError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventVideoError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideoAlt1Request = {
    liveEventId: number;
    videoId: number;
  };

  export class GetLiveEventVideoAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventVideoAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideoAlt2Request = {
    liveEventId: number;
    videoId: number;
  };

  export class GetLiveEventVideoAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventVideoAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideosRequest = {
    liveEventId: number;
    userId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort17;
  };

  export class GetLiveEventVideosError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideosAlt1Request = {
    liveEventId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort17;
  };

  export class GetLiveEventVideosAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventVideosAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventVideosAlt2Request = {
    liveEventId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort17;
  };

  export class GetLiveEventVideosAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventVideosAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromLiveEventRequest = {
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsVideosRequest;
  };

  export class RemoveVideosFromLiveEventError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideosFromLiveEventError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromLiveEventAlt1Request = {
    liveEventId: number;
    body?: LiveEventsVideosRequest;
  };

  export class RemoveVideosFromLiveEventAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideosFromLiveEventAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromLiveEventAlt2Request = {
    liveEventId: number;
    body?: MeLiveEventsVideosRequest;
  };

  export class RemoveVideosFromLiveEventAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideosFromLiveEventAlt2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
