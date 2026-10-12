import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  composerGraphicsConnectionSchema,
  type ComposerGraphicsConnection,
} from "../models/composer-graphics-connection.js";
import { composerGraphicsSchema, type ComposerGraphics } from "../models/composer-graphics.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  liveEventsComposerGraphicsVideosRequestSchema,
  type LiveEventsComposerGraphicsVideosRequest,
} from "../models/live-events-composer-graphics-videos-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with event media.
 */
export class LiveGraphics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a new video graphics item to an event
   *
   * @remarks
   * This method add a new video graphics item to the specified event.
   *
   * @returns The video graphic item was added.
   *
   * @throws {@link LiveGraphics.AddComposerVideoGraphicItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addComposerVideoGraphicItem(
    request: LiveGraphics.AddComposerVideoGraphicItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerGraphics, LiveGraphics.AddComposerVideoGraphicItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/composer/graphics/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: liveEventsComposerGraphicsVideosRequestSchema },
      },
      {
        success: { kind: "json", schema: composerGraphicsSchema },
        errorFactory: LiveGraphics.AddComposerVideoGraphicItemError,
      },
      options,
    );
  }

  /**
   * Delete a video graphics item that belongs to an event
   *
   * @remarks
   * This method deletes a video graphics item belonging to the specified event.
   *
   * @returns The video graphic item was deleted.
   *
   * @throws {@link LiveGraphics.DeleteComposerVideoGraphicItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteComposerVideoGraphicItem(
    request: LiveGraphics.DeleteComposerVideoGraphicItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveGraphics.DeleteComposerVideoGraphicItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/live_events/{live_event_id}/composer/graphics/videos/{video_id}",
        ),
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
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveGraphics.DeleteComposerVideoGraphicItemError,
      },
      options,
    );
  }

  /**
   * Get all the video graphics items that belong to an event
   *
   * @remarks
   * The method returns every video graphics item belonging to the specified event.
   *
   * @returns The video graphic items were returned.
   *
   * @throws {@link LiveGraphics.GetComposerVideoGraphicItemsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getComposerVideoGraphicItems(
    request: LiveGraphics.GetComposerVideoGraphicItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerGraphicsConnection, LiveGraphics.GetComposerVideoGraphicItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/composer/graphics/videos"),
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
        success: { kind: "json", schema: composerGraphicsConnectionSchema },
        errorFactory: LiveGraphics.GetComposerVideoGraphicItemsError,
      },
      options,
    );
  }
}

export namespace LiveGraphics {
  export type AddComposerVideoGraphicItemRequest = {
    /** The ID of the event. */
    liveEventId: number;
    body: LiveEventsComposerGraphicsVideosRequest;
  };

  export class AddComposerVideoGraphicItemError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<AddComposerVideoGraphicItemError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteComposerVideoGraphicItemRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the associated video. */
    videoId: number;
  };

  export class DeleteComposerVideoGraphicItemError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteComposerVideoGraphicItemError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetComposerVideoGraphicItemsRequest = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetComposerVideoGraphicItemsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetComposerVideoGraphicItemsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
