import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { albumConnectionSchema, type AlbumConnection } from "../models/album-connection.js";
import { albumSchema, type Album } from "../models/album.js";
import { errorSchema, type Error } from "../models/error.js";
import { videosAlbumsRequestSchema, type VideosAlbumsRequest } from "../models/videos-albums-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with showcase videos.
 */
export class VideosShowcases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add or remove a video from a list of showcases
   *
   * @remarks
   * This method adds or removes the specified video to or from multiple showcases.
   *
   * @returns The videos were added or removed.
   *
   * @throws {@link VideosShowcases.AddOrRemoveMultipleAlbumsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addOrRemoveMultipleAlbums(
    request: VideosShowcases.AddOrRemoveMultipleAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Album[], VideosShowcases.AddOrRemoveMultipleAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => albumSchema)) },
        errorFactory: VideosShowcases.AddOrRemoveMultipleAlbumsError,
      },
      options,
    );
  }

  /**
   * Get all the showcases that contain a video
   *
   * @remarks
   * This method returns all the showcases that contain the specified video.
   *
   * @returns The showcases were returned.
   *
   * @throws {@link VideosShowcases.GetVideoAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoAlbums(
    request: VideosShowcases.GetVideoAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, VideosShowcases.GetVideoAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: VideosShowcases.GetVideoAlbumsError,
      },
      options,
    );
  }
}

export namespace VideosShowcases {
  export type AddOrRemoveMultipleAlbumsRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosAlbumsRequest;
  };

  export class AddOrRemoveMultipleAlbumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AddOrRemoveMultipleAlbumsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVideoAlbumsRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVideoAlbumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetVideoAlbumsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
