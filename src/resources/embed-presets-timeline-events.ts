import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with timeline events.
 */
export class EmbedPresetsTimelineEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a timeline event thumbnail to a video
   *
   * @remarks
   * This method adds a timeline event thumbnail to the specified video. The authenticated user must
   * be the owner of the video.
   *
   * @returns The timeline event thumbnail was added.
   *
   * @throws {@link EmbedPresetsTimelineEvents.CreateVideoCustomLogoError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVideoCustomLogo(
    request: EmbedPresetsTimelineEvents.CreateVideoCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsTimelineEvents.CreateVideoCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/timelinethumbnails"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsTimelineEvents.CreateVideoCustomLogoError,
      },
      options,
    );
  }

  /**
   * Get a timeline event thumbnail
   *
   * @remarks
   * This method returns a single timeline event thumbnail that belongs to the specified video.
   *
   * @returns The timeline event thumbnail was returned.
   *
   * @throws {@link EmbedPresetsTimelineEvents.GetVideoCustomLogoError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoCustomLogo(
    request: EmbedPresetsTimelineEvents.GetVideoCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsTimelineEvents.GetVideoCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/timelinethumbnails/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsTimelineEvents.GetVideoCustomLogoError,
      },
      options,
    );
  }
}

export namespace EmbedPresetsTimelineEvents {
  export type CreateVideoCustomLogoRequest = {
    /** The ID of the video. */
    videoId: number;
  };

  export class CreateVideoCustomLogoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateVideoCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCustomLogoRequest = {
    /** The ID of the timeline event thumbnail. */
    thumbnailId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetVideoCustomLogoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
