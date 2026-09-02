import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  usersAlbumsCustomThumbnailsThumbnailIdRequestSchema,
  type UsersAlbumsCustomThumbnailsThumbnailIdRequest,
} from "../models/users-albums-custom-thumbnails-thumbnail-id-request.js";
import type { Servers } from "../servers.js";

export class ShowcasesCustomShowcaseThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createShowcaseCustomThumb(
    request: ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError,
      },
      options,
    );
  }

  deleteShowcaseCustomThumbnail(
    request: ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError,
      },
      options,
    );
  }

  getShowcaseCustomThumbnail(
    request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError,
      },
      options,
    );
  }

  getShowcaseCustomThumbs(
    request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails"),
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
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError,
      },
      options,
    );
  }

  replaceShowcaseCustomThumb(
    request: ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsCustomThumbnailsThumbnailIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError,
      },
      options,
    );
  }
}

export namespace ShowcasesCustomShowcaseThumbnails {
  export type CreateShowcaseCustomThumbRequest = {
    albumId: number;
    userId: number;
  };

  export class CreateShowcaseCustomThumbError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateShowcaseCustomThumbError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseCustomThumbnailRequest = {
    albumId: number;
    thumbnailId: number;
    userId: number;
  };

  export class DeleteShowcaseCustomThumbnailError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteShowcaseCustomThumbnailError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseCustomThumbnailRequest = {
    albumId: number;
    thumbnailId: number;
    userId: number;
  };

  export class GetShowcaseCustomThumbnailError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetShowcaseCustomThumbnailError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseCustomThumbsRequest = {
    albumId: number;
    userId: number;
    page?: number;
    perPage?: number;
  };

  export class GetShowcaseCustomThumbsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetShowcaseCustomThumbsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceShowcaseCustomThumbRequest = {
    albumId: number;
    thumbnailId: number;
    userId: number;
    body?: UsersAlbumsCustomThumbnailsThumbnailIdRequest;
  };

  export class ReplaceShowcaseCustomThumbError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<ReplaceShowcaseCustomThumbError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
