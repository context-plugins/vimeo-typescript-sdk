import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class LiveGraphics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addComposerVideoGraphicItem(
    request: LiveGraphics.AddComposerVideoGraphicItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerGraphics, LiveGraphics.AddComposerVideoGraphicItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/composer/graphics/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: liveEventsComposerGraphicsVideosRequestSchema },
      },
      {
        success: { kind: "json", schema: composerGraphicsSchema },
        errorFactory: LiveGraphics.AddComposerVideoGraphicItemError,
      },
      options,
    );
  }

  deleteComposerVideoGraphicItem(
    request: LiveGraphics.DeleteComposerVideoGraphicItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveGraphics.DeleteComposerVideoGraphicItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/live_events/{live_event_id}/composer/graphics/videos/{video_id}"),
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
        success: { kind: "empty" },
        errorFactory: LiveGraphics.DeleteComposerVideoGraphicItemError,
      },
      options,
    );
  }

  getComposerVideoGraphicItems(
    request: LiveGraphics.GetComposerVideoGraphicItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerGraphicsConnection, LiveGraphics.GetComposerVideoGraphicItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/composer/graphics/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
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
    liveEventId: number;
    body: LiveEventsComposerGraphicsVideosRequest;
  };

  export class AddComposerVideoGraphicItemError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<AddComposerVideoGraphicItemError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteComposerVideoGraphicItemRequest = {
    liveEventId: number;
    videoId: number;
  };

  export class DeleteComposerVideoGraphicItemError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteComposerVideoGraphicItemError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetComposerVideoGraphicItemsRequest = {
    liveEventId: number;
  };

  export class GetComposerVideoGraphicItemsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetComposerVideoGraphicItemsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
