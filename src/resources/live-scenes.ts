import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Use these methods to work with event scenes.
 */
export class LiveScenes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Attach a graphic item to a scene
   *
   * @remarks
   * This method attaches a graphic item to the specified scene.
   *
   * @returns The scene was returned.
   *
   * @throws {@link LiveScenes.AttachGraphicItemToSceneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  attachGraphicItemToScene(
    request: LiveScenes.AttachGraphicItemToSceneRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes, LiveScenes.AttachGraphicItemToSceneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/live_events/{live_event_id}/composer/scenes/{scene_id}/graphics",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "scene_id", value: request.sceneId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: liveEventsComposerScenesGraphicsRequestSchema },
      },
      {
        success: { kind: "json", schema: composerScenesSchema },
        errorFactory: LiveScenes.AttachGraphicItemToSceneError,
      },
      options,
    );
  }

  /**
   * Create a scene for an event
   *
   * @remarks
   * The method creates a new scene for the specified event.
   *
   * @returns The scene was created.
   *
   * @throws {@link LiveScenes.CreateComposerSceneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComposerScene(
    request: LiveScenes.CreateComposerSceneRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes, LiveScenes.CreateComposerSceneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/composer/scenes"),
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

  /**
   * Get all the scenes that belong to an event
   *
   * @remarks
   * The method returns every scene belonging to the specified event.
   *
   * @returns The scenes were returned.
   *
   * @throws {@link LiveScenes.GetComposerScenesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getComposerScenes(
    request: LiveScenes.GetComposerScenesRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenesConnection, LiveScenes.GetComposerScenesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/composer/scenes"),
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
        success: { kind: "json", schema: composerScenesConnectionSchema },
        errorFactory: LiveScenes.GetComposerScenesError,
      },
      options,
    );
  }

  /**
   * Reset the scenes that belong to an event
   *
   * @remarks
   * The method resets the scenes that belong to the specified event by deleting every existing
   * scene and then recreating the default scene.
   *
   * @returns The scenes were reset.
   *
   * @throws {@link LiveScenes.ResetComposerScenesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resetComposerScenes(
    request: LiveScenes.ResetComposerScenesRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes[], LiveScenes.ResetComposerScenesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/composer/scenes"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => composerScenesSchema)) },
        errorFactory: LiveScenes.ResetComposerScenesError,
      },
      options,
    );
  }

  /**
   * Update the scene that belong to an event
   *
   * @remarks
   * The method updates a scene belonging to the specified event.
   *
   * @returns The scene was returned.
   *
   * @throws {@link LiveScenes.UpdateComposerSceneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateComposerScene(
    request: LiveScenes.UpdateComposerSceneRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerScenes, LiveScenes.UpdateComposerSceneError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/composer/scenes/{scene_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "scene_id", value: request.sceneId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the scene. */
    sceneId: string;
    body: LiveEventsComposerScenesGraphicsRequest;
  };

  export class AttachGraphicItemToSceneError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AttachGraphicItemToSceneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateComposerSceneRequest = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsComposerScenesRequest;
  };

  export class CreateComposerSceneError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateComposerSceneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetComposerScenesRequest = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetComposerScenesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetComposerScenesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ResetComposerScenesRequest = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class ResetComposerScenesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<ResetComposerScenesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateComposerSceneRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the scene. */
    sceneId: string;
  };

  export class UpdateComposerSceneError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<UpdateComposerSceneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
