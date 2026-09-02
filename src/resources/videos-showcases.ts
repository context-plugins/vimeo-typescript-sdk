import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { albumConnectionSchema, type AlbumConnection } from "../models/album-connection.js";
import { albumSchema, type Album } from "../models/album.js";
import { errorSchema, type Error } from "../models/error.js";
import { videosAlbumsRequestSchema, type VideosAlbumsRequest } from "../models/videos-albums-request.js";
import type { Servers } from "../servers.js";

export class VideosShowcases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addOrRemoveMultipleAlbums(
    request: VideosShowcases.AddOrRemoveMultipleAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Album[], VideosShowcases.AddOrRemoveMultipleAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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

  getVideoAlbums(
    request: VideosShowcases.GetVideoAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, VideosShowcases.GetVideoAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
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
    videoId: number;
    body?: VideosAlbumsRequest;
  };

  export class AddOrRemoveMultipleAlbumsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<AddOrRemoveMultipleAlbumsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVideoAlbumsRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVideoAlbumsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetVideoAlbumsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
