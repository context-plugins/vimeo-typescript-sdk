import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { albumConnectionSchema, type AlbumConnection } from "../models/album-connection.js";
import { albumSchema, type Album } from "../models/album.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter10Schema, type Filter10 } from "../models/filter10.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  meAlbumsVideosRequestSchema,
  type MeAlbumsVideosRequest,
} from "../models/me-albums-videos-request.js";
import {
  meAlbumsVideosSetAlbumThumbnailRequestSchema,
  type MeAlbumsVideosSetAlbumThumbnailRequest,
} from "../models/me-albums-videos-set-album-thumbnail-request.js";
import { sort2Schema, type Sort2 } from "../models/sort2.js";
import { sort21Schema, type Sort21 } from "../models/sort21.js";
import { sort74Schema, type Sort74 } from "../models/sort74.js";
import {
  usersAlbumsVideosRequestSchema,
  type UsersAlbumsVideosRequest,
} from "../models/users-albums-videos-request.js";
import {
  usersAlbumsVideosVideoIdSetAlbumThumbnailRequestSchema,
  type UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest,
} from "../models/users-albums-videos-video-id-set-album-thumbnail-request.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class ShowcasesShowcaseVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToShowcase(
    request: ShowcasesShowcaseVideos.AddVideoToShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.AddVideoToShowcaseError,
      },
      options,
    );
  }

  addVideoToShowcaseAlt2(
    request: ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.AddVideoToShowcaseAlt2Error,
      },
      options,
    );
  }

  getAvailableShowcaseVideos(
    request: ShowcasesShowcaseVideos.GetAvailableShowcaseVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/albums/{album_id}/available_videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort2Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetAvailableShowcaseVideosError,
      },
      options,
    );
  }

  getAvailableVideoShowcases(
    request: ShowcasesShowcaseVideos.GetAvailableVideoShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/available_albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort74Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetAvailableVideoShowcasesError,
      },
      options,
    );
  }

  getShowcaseVideo(
    request: ShowcasesShowcaseVideos.GetShowcaseVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, ShowcasesShowcaseVideos.GetShowcaseVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideoError,
      },
      options,
    );
  }

  getShowcaseVideoAlt2(
    request: ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [{ name: "password", value: request.password, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideoAlt2Error,
      },
      options,
    );
  }

  getShowcaseVideos(
    request: ShowcasesShowcaseVideos.GetShowcaseVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter10Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort21Schema)) },
          { name: "weak_search", value: request.weakSearch, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideosError,
      },
      options,
    );
  }

  getShowcaseVideosAlt2(
    request: ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter10Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort21Schema)) },
          { name: "weak_search", value: request.weakSearch, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: ShowcasesShowcaseVideos.GetShowcaseVideosAlt2Error,
      },
      options,
    );
  }

  removeVideoFromShowcase(
    request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseError,
      },
      options,
    );
  }

  removeVideoFromShowcaseAlt2(
    request: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/albums/{album_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.RemoveVideoFromShowcaseAlt2Error,
      },
      options,
    );
  }

  replaceVideosInShowcase(
    request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: usersAlbumsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseError,
      },
      options,
    );
  }

  replaceVideosInShowcaseAlt2(
    request: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/albums/{album_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: meAlbumsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesShowcaseVideos.ReplaceVideosInShowcaseAlt2Error,
      },
      options,
    );
  }

  setVideoAsShowcaseFeatured(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/videos/{video_id}/set_featured_video"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedError,
      },
      options,
    );
  }

  setVideoAsShowcaseFeaturedAlt2(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/albums/{album_id}/videos/{video_id}/set_featured_video"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseFeaturedAlt2Error,
      },
      options,
    );
  }

  setVideoAsShowcaseThumbnail(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default(
          "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsVideosVideoIdSetAlbumThumbnailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailError,
      },
      options,
    );
  }

  setVideoAsShowcaseThumbnailAlt2(
    request: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/albums/{album_id}/videos/{video_id}/set_album_thumbnail"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meAlbumsVideosSetAlbumThumbnailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesShowcaseVideos.SetVideoAsShowcaseThumbnailAlt2Error,
      },
      options,
    );
  }
}

export namespace ShowcasesShowcaseVideos {
  export type AddVideoToShowcaseRequest = {
    albumId: number;
    userId: number;
    videoId: number;
  };

  export class AddVideoToShowcaseError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoToShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type AddVideoToShowcaseAlt2Request = {
    albumId: number;
    videoId: number;
  };

  export class AddVideoToShowcaseAlt2Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVideoToShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAvailableShowcaseVideosRequest = {
    albumId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort2;
  };

  export class GetAvailableShowcaseVideosError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetAvailableShowcaseVideosError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAvailableVideoShowcasesRequest = {
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort74;
  };

  export class GetAvailableVideoShowcasesError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAvailableVideoShowcasesError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetShowcaseVideoRequest = {
    albumId: number;
    userId: number;
    videoId: number;
    password?: string;
  };

  export class GetShowcaseVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseVideoAlt2Request = {
    albumId: number;
    videoId: number;
    password?: string;
  };

  export class GetShowcaseVideoAlt2Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseVideoAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseVideosRequest = {
    albumId: number;
    userId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter10;
    filterEmbeddable?: boolean;
    page?: number;
    password?: string;
    perPage?: number;
    query?: string;
    sort?: Sort21;
    weakSearch?: boolean;
  };

  export class GetShowcaseVideosError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseVideosError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseVideosAlt2Request = {
    albumId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter10;
    filterEmbeddable?: boolean;
    page?: number;
    password?: string;
    perPage?: number;
    query?: string;
    sort?: Sort21;
    weakSearch?: boolean;
  };

  export class GetShowcaseVideosAlt2Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseVideosAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveVideoFromShowcaseRequest = {
    albumId: number;
    userId: number;
    videoId: number;
  };

  export class RemoveVideoFromShowcaseError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<RemoveVideoFromShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type RemoveVideoFromShowcaseAlt2Request = {
    albumId: number;
    videoId: number;
  };

  export class RemoveVideoFromShowcaseAlt2Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<RemoveVideoFromShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceVideosInShowcaseRequest = {
    albumId: number;
    userId: number;
    body: UsersAlbumsVideosRequest;
  };

  export class ReplaceVideosInShowcaseError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<ReplaceVideosInShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceVideosInShowcaseAlt2Request = {
    albumId: number;
    body: MeAlbumsVideosRequest;
  };

  export class ReplaceVideosInShowcaseAlt2Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<ReplaceVideosInShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SetVideoAsShowcaseFeaturedRequest = {
    albumId: number;
    userId: number;
    videoId: number;
  };

  export class SetVideoAsShowcaseFeaturedError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SetVideoAsShowcaseFeaturedError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetVideoAsShowcaseFeaturedAlt2Request = {
    albumId: number;
    videoId: number;
  };

  export class SetVideoAsShowcaseFeaturedAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<SetVideoAsShowcaseFeaturedAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetVideoAsShowcaseThumbnailRequest = {
    albumId: number;
    userId: number;
    videoId: number;
    body?: UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest;
  };

  export class SetVideoAsShowcaseThumbnailError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<SetVideoAsShowcaseThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetVideoAsShowcaseThumbnailAlt2Request = {
    albumId: number;
    videoId: number;
    body?: MeAlbumsVideosSetAlbumThumbnailRequest;
  };

  export class SetVideoAsShowcaseThumbnailAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<SetVideoAsShowcaseThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
