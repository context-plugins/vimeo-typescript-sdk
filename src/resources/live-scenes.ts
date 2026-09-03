import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  composerScenesConnectionSchema,
  type ComposerScenesConnection,
} from "../models/composer-scenes-connection.js";
import { composerScenesSchema, type ComposerScenes } from "../models/composer-scenes.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  liveEventsComposerScenesGraphicsRequestSchema,
  type LiveEventsComposerScenesGraphicsRequest,
} from "../models/live-events-composer-scenes-graphics-request.js";
import {
  liveEventsComposerScenesRequestSchema,
  type LiveEventsComposerScenesRequest,
} from "../models/live-events-composer-scenes-request.js";
import type { Servers } from "../servers.js";

export class LiveScenes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  attachGraphicItemToScene(
    request: LiveScenes.AttachGraphicItemToSceneRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes, LiveScenes.AttachGraphicItemToSceneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/composer/scenes/{scene_id}/graphics"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "scene_id", value: request.sceneId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: liveEventsComposerScenesGraphicsRequestSchema },
      },
      {
        success: { kind: "json", schema: composerScenesSchema },
        errorFactory: LiveScenes.AttachGraphicItemToSceneError,
      },
      options,
    );
  }

  createComposerScene(
    request: LiveScenes.CreateComposerSceneRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes, LiveScenes.CreateComposerSceneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/composer/scenes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => liveEventsComposerScenesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: composerScenesSchema },
        errorFactory: LiveScenes.CreateComposerSceneError,
      },
      options,
    );
  }

  getComposerScenes(
    request: LiveScenes.GetComposerScenesRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenesConnection, LiveScenes.GetComposerScenesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/composer/scenes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: composerScenesConnectionSchema },
        errorFactory: LiveScenes.GetComposerScenesError,
      },
      options,
    );
  }

  resetComposerScenes(
    request: LiveScenes.ResetComposerScenesRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes[], LiveScenes.ResetComposerScenesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/live_events/{live_event_id}/composer/scenes"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => composerScenesSchema)) },
        errorFactory: LiveScenes.ResetComposerScenesError,
      },
      options,
    );
  }

  updateComposerScene(
    request: LiveScenes.UpdateComposerSceneRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes, LiveScenes.UpdateComposerSceneError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/live_events/{live_event_id}/composer/scenes/{scene_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "scene_id", value: request.sceneId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: composerScenesSchema },
        errorFactory: LiveScenes.UpdateComposerSceneError,
      },
      options,
    );
  }
}

export namespace LiveScenes {
  export type AttachGraphicItemToSceneRequest = {
    liveEventId: number;
    sceneId: string;
    body: LiveEventsComposerScenesGraphicsRequest;
  };

  export class AttachGraphicItemToSceneError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AttachGraphicItemToSceneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateComposerSceneRequest = {
    liveEventId: number;
    body?: LiveEventsComposerScenesRequest;
  };

  export class CreateComposerSceneError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateComposerSceneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetComposerScenesRequest = {
    liveEventId: number;
  };

  export class GetComposerScenesError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetComposerScenesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ResetComposerScenesRequest = {
    liveEventId: number;
  };

  export class ResetComposerScenesError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<ResetComposerScenesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateComposerSceneRequest = {
    liveEventId: number;
    sceneId: string;
  };

  export class UpdateComposerSceneError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<UpdateComposerSceneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
