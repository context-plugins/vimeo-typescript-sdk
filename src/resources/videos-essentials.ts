import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { customMetadataValuesSchema, type CustomMetadataValues } from "../models/custom-metadata-values.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter22Schema, type Filter22 } from "../models/filter22.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { filter45Schema, type Filter45 } from "../models/filter45.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { meVideosCopyRequestSchema, type MeVideosCopyRequest } from "../models/me-videos-copy-request.js";
import { meVideosRequestSchema, type MeVideosRequest } from "../models/me-videos-request.js";
import { queryFieldsSchema, type QueryFields } from "../models/query-fields.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { sort39Schema, type Sort39 } from "../models/sort39.js";
import { sort73Schema, type Sort73 } from "../models/sort73.js";
import {
  usersVideosCopyRequestSchema,
  type UsersVideosCopyRequest,
} from "../models/users-videos-copy-request.js";
import { usersVideosRequestSchema, type UsersVideosRequest } from "../models/users-videos-request.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import {
  videosCustomMetadataRequestSchema,
  type VideosCustomMetadataRequest,
} from "../models/videos-custom-metadata-request.js";
import { videosRequestSchema, type VideosRequest } from "../models/videos-request.js";
import { videosRequest1Schema, type VideosRequest1 } from "../models/videos-request1.js";
import type { Servers } from "../servers.js";

export class VideosEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfUserOwnsVideo(
    request: VideosEssentials.CheckIfUserOwnsVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CheckIfUserOwnsVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CheckIfUserOwnsVideoError,
      },
      options,
    );
  }

  checkIfUserOwnsVideoAlt1(
    request: VideosEssentials.CheckIfUserOwnsVideoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CheckIfUserOwnsVideoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CheckIfUserOwnsVideoAlt1Error,
      },
      options,
    );
  }

  copyVideo(
    request: VideosEssentials.CopyVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CopyVideoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/videos/{video_id}/copy"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersVideosCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CopyVideoError,
      },
      options,
    );
  }

  copyVideoAlt2(
    request: VideosEssentials.CopyVideoAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.CopyVideoAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/videos/{video_id}/copy"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meVideosCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.CopyVideoAlt2Error,
      },
      options,
    );
  }

  deleteVideo(
    request: VideosEssentials.DeleteVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEssentials.DeleteVideoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => videosRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEssentials.DeleteVideoError,
      },
      options,
    );
  }

  deleteVideos(
    request: VideosEssentials.DeleteVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEssentials.DeleteVideosError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [{ name: "uris", value: request.uris, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersVideosRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEssentials.DeleteVideosError,
      },
      options,
    );
  }

  deleteVideosAlt1(
    request: VideosEssentials.DeleteVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEssentials.DeleteVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [{ name: "uris", value: request.uris, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => meVideosRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEssentials.DeleteVideosAlt1Error,
      },
      options,
    );
  }

  editVideo(
    request: VideosEssentials.EditVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.EditVideoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: videosRequest1Schema },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.EditVideoError,
      },
      options,
    );
  }

  getAppearances(
    request: VideosEssentials.GetAppearancesRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetAppearancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/appearances"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.GetAppearancesError,
      },
      options,
    );
  }

  getAppearancesAlt1(
    request: VideosEssentials.GetAppearancesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetAppearancesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/appearances"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.GetAppearancesAlt1Error,
      },
      options,
    );
  }

  getVideo(
    request: VideosEssentials.GetVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, VideosEssentials.GetVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [{ name: "time_links", value: request.timeLinks, schema: s.optional(s.boolean()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: VideosEssentials.GetVideoError,
      },
      options,
    );
  }

  getVideos(
    request: VideosEssentials.GetVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter22Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "filter_playable", value: request.filterPlayable, schema: s.optional(s.boolean()) },
          {
            name: "filter_screen_recorded",
            value: request.filterScreenRecorded,
            schema: s.optional(s.boolean()),
          },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "filter_uploader", value: request.filterUploader, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          {
            name: "query_fields",
            value: request.queryFields,
            schema: s.optional(s.lazy(() => queryFieldsSchema)),
          },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort39Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.GetVideosError,
      },
      options,
    );
  }

  getVideosAlt1(
    request: VideosEssentials.GetVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.GetVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "containing_uri", value: request.containingUri, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter22Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "filter_playable", value: request.filterPlayable, schema: s.optional(s.boolean()) },
          {
            name: "filter_screen_recorded",
            value: request.filterScreenRecorded,
            schema: s.optional(s.boolean()),
          },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "filter_uploader", value: request.filterUploader, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          {
            name: "query_fields",
            value: request.queryFields,
            schema: s.optional(s.lazy(() => queryFieldsSchema)),
          },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort39Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.GetVideosAlt1Error,
      },
      options,
    );
  }

  searchVideos(
    request: VideosEssentials.SearchVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, VideosEssentials.SearchVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter45Schema)) },
          { name: "links", value: request.links, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort73Schema)) },
          { name: "uris", value: request.uris, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: VideosEssentials.SearchVideosError,
      },
      options,
    );
  }

  updateVideoCustomMetadata(
    request: VideosEssentials.UpdateVideoCustomMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataValues[], VideosEssentials.UpdateVideoCustomMetadataError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/custom_metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosCustomMetadataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customMetadataValuesSchema)) },
        errorFactory: VideosEssentials.UpdateVideoCustomMetadataError,
      },
      options,
    );
  }
}

export namespace VideosEssentials {
  export type CheckIfUserOwnsVideoRequest = {
    userId: number;
    videoId: number;
  };

  export class CheckIfUserOwnsVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserOwnsVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserOwnsVideoAlt1Request = {
    videoId: number;
  };

  export class CheckIfUserOwnsVideoAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserOwnsVideoAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CopyVideoRequest = {
    userId: number;
    videoId: number;
    body?: UsersVideosCopyRequest;
  };

  export class CopyVideoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CopyVideoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CopyVideoAlt2Request = {
    videoId: number;
    body?: MeVideosCopyRequest;
  };

  export class CopyVideoAlt2Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CopyVideoAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoRequest = {
    videoId: number;
    body?: VideosRequest;
  };

  export class DeleteVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideosRequest = {
    userId: number;
    uris: string;
    body?: UsersVideosRequest;
  };

  export class DeleteVideosError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteVideosAlt1Request = {
    uris: string;
    body?: MeVideosRequest;
  };

  export class DeleteVideosAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteVideosAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditVideoRequest = {
    videoId: number;
    body: VideosRequest1;
  };

  export class EditVideoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditVideoError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAppearancesRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetAppearancesError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAppearancesError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAppearancesAlt1Request = {
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetAppearancesAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAppearancesAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVideoRequest = {
    videoId: number;
    timeLinks?: boolean;
  };

  export class GetVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideosRequest = {
    userId: number;
    containingUri?: string;
    direction?: Direction;
    filter?: Filter22;
    filterEmbeddable?: boolean;
    filterPlayable?: boolean;
    filterScreenRecorded?: boolean;
    filterTag?: string;
    filterTagAllOf?: string;
    filterTagExclude?: string;
    filterUploader?: number;
    page?: number;
    perPage?: number;
    query?: string;
    queryFields?: QueryFields;
    sort?: Sort39;
  };

  export class GetVideosError extends ResponseError<Declared<"error304", undefined>> {
    static readonly errors: ErrorDecoders<GetVideosError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type GetVideosAlt1Request = {
    containingUri?: string;
    direction?: Direction;
    filter?: Filter22;
    filterEmbeddable?: boolean;
    filterPlayable?: boolean;
    filterScreenRecorded?: boolean;
    filterTag?: string;
    filterTagAllOf?: string;
    filterTagExclude?: string;
    filterUploader?: number;
    page?: number;
    perPage?: number;
    query?: string;
    queryFields?: QueryFields;
    sort?: Sort39;
  };

  export class GetVideosAlt1Error extends ResponseError<Declared<"error304", undefined>> {
    static readonly errors: ErrorDecoders<GetVideosAlt1Error> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
    ];
  }

  export type SearchVideosRequest = {
    direction?: Direction;
    filter?: Filter45;
    links?: string;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort73;
    uris?: string;
  };

  export class SearchVideosError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<SearchVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UpdateVideoCustomMetadataRequest = {
    videoId: number;
    body?: VideosCustomMetadataRequest;
  };

  export class UpdateVideoCustomMetadataError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<UpdateVideoCustomMetadataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
