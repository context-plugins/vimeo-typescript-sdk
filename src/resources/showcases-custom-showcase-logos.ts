import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  usersAlbumsLogosLogoIdRequestSchema,
  type UsersAlbumsLogosLogoIdRequest,
} from "../models/users-albums-logos-logo-id-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage custom showcase logos, or the supplementary images, usually logos,
 * that appear on a showcase's page. These images aren't the same as showcase thumbnails, or the
 * images that represent the showcase across Vimeo.
 */
export class ShowcasesCustomShowcaseLogos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a custom logo to a showcase
   *
   * @remarks
   * This method adds an image file as a custom logo to the specified showcase. The authenticated
   * user must be the owner of the showcase.
   *
   * For information on how to upload the logo, see our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
   *
   * @returns The logo was added to the showcase.
   *
   * @throws {@link ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.CreateShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/logos"),
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
        errorFactory: ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError,
      },
      options,
    );
  }

  /**
   * Delete a custom showcase logo
   *
   * @remarks
   * This method deletes the specified custom logo from its showcase. The authenticated user must be
   * the owner of the showcase.
   *
   * @returns The custom logo was deleted.
   *
   * @throws {@link ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/logos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "logo_id", value: request.logoId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError,
      },
      options,
    );
  }

  /**
   * Get a specific custom showcase logo
   *
   * @remarks
   * This method returns a single custom logo of the specified showcase. The authenticated user must
   * be the owner of the showcase.
   *
   * @returns The custom logo was returned.
   *
   * @throws {@link ShowcasesCustomShowcaseLogos.GetShowcaseLogoError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.GetShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.GetShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/logos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "logo_id", value: request.logoId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseLogos.GetShowcaseLogoError,
      },
      options,
    );
  }

  /**
   * Get all the custom logos of a showcase
   *
   * @remarks
   * This method returns every custom logo of the specified showcase. The authenticated user must be
   * the owner of the showcase.
   *
   * @returns The custom logos were returned.
   *
   * @throws {@link ShowcasesCustomShowcaseLogos.GetShowcaseLogosError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseLogos(
    request: ShowcasesCustomShowcaseLogos.GetShowcaseLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ShowcasesCustomShowcaseLogos.GetShowcaseLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/logos"),
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
        errorFactory: ShowcasesCustomShowcaseLogos.GetShowcaseLogosError,
      },
      options,
    );
  }

  /**
   * Replace a custom showcase logo
   *
   * @remarks
   * This method replaces the specified custom showcase logo with a new image file. The
   * authenticated user must be the owner of the showcase.
   *
   * For information on how to upload the logo, see our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
   *
   * @returns The custom logo was replaced.
   *
   * @throws {@link ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/logos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.float64() },
          { name: "logo_id", value: request.logoId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsLogosLogoIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError,
      },
      options,
    );
  }
}

export namespace ShowcasesCustomShowcaseLogos {
  export type CreateShowcaseLogoRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class CreateShowcaseLogoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseLogoRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the custom logo. */
    logoId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteShowcaseLogoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseLogoRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the custom logo. */
    logoId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetShowcaseLogoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseLogosRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetShowcaseLogosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseLogosError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceShowcaseLogoRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the custom logo. */
    logoId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersAlbumsLogosLogoIdRequest;
  };

  export class ReplaceShowcaseLogoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<ReplaceShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
