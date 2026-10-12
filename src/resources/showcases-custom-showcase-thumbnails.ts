import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  usersAlbumsCustomThumbnailsThumbnailIdRequestSchema,
  type UsersAlbumsCustomThumbnailsThumbnailIdRequest,
} from "../models/users-albums-custom-thumbnails-thumbnail-id-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage custom thumbnail images for showcases. These thumbnails come from
 * uploaded image files that aren't necessarily stills from a video.
 */
export class ShowcasesCustomShowcaseThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a custom thumbnail to a showcase
   *
   * @remarks
   * This method adds an uploaded image file as a custom thumbnail for the specified showcase. The
   * image doesn't need to be a still from a showcase video, unlike with the [standard thumbnail
   * method](https://developer.vimeo.com/api/reference/showcases#set_video_as_showcase_thumbnail).
   * The authenticated user must be the owner of the showcase.
   *
   * For information on how to upload the thumbnail, see our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.
   *
   * @returns The custom thumbnail was added to the showcase.
   *
   * @throws {@link ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShowcaseCustomThumb(
    request: ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.CreateShowcaseCustomThumbError,
      },
      options,
    );
  }

  /**
   * Delete a custom showcase thumbnail
   *
   * @remarks
   * This method deletes the specified custom thumbnail from its showcase. The authenticated user
   * must be the owner of the showcase.
   *
   * @returns The custom thumbnail was deleted.
   *
   * @throws {@link ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteShowcaseCustomThumbnail(
    request: ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesCustomShowcaseThumbnails.DeleteShowcaseCustomThumbnailError,
      },
      options,
    );
  }

  /**
   * Get a specific custom showcase thumbnail
   *
   * @remarks
   * This method returns a single custom thumbnail of the specified showcase. The authenticated user
   * must be the owner of the showcase.
   *
   * @returns The custom thumbnail was returned.
   *
   * @throws {@link ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseCustomThumbnail(
    request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbnailError,
      },
      options,
    );
  }

  /**
   * Get all the custom thumbnails of a showcase
   *
   * @remarks
   * This method returns every custom thumbnail of the specified showcase.
   *
   * @returns The custom thumbnails were returned.
   *
   * @throws {@link ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseCustomThumbs(
    request: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/custom_thumbnails"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ShowcasesCustomShowcaseThumbnails.GetShowcaseCustomThumbsError,
      },
      options,
    );
  }

  /**
   * Replace a custom showcase thumbnail
   *
   * @remarks
   * This method replaces the specified custom showcase thumbnail with a new image file. The
   * authenticated user must be the owner of the showcase.
   *
   * For information on how to upload the thumbnail, see our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
   *
   * @returns The custom thumbnail was replaced.
   *
   * @throws {@link ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceShowcaseCustomThumb(
    request: ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseThumbnails.ReplaceShowcaseCustomThumbError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class CreateShowcaseCustomThumbError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateShowcaseCustomThumbError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseCustomThumbnailRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the custom thumbnail. */
    thumbnailId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteShowcaseCustomThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteShowcaseCustomThumbnailError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseCustomThumbnailRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the custom thumbnail. */
    thumbnailId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetShowcaseCustomThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetShowcaseCustomThumbnailError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseCustomThumbsRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetShowcaseCustomThumbsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseCustomThumbsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceShowcaseCustomThumbRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the custom thumbnail. */
    thumbnailId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersAlbumsCustomThumbnailsThumbnailIdRequest;
  };

  export class ReplaceShowcaseCustomThumbError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<ReplaceShowcaseCustomThumbError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
