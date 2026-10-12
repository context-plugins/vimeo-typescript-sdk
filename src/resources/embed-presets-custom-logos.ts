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
import type { Servers } from "../servers.js";

/**
 * Vimeo members with access to embed presets can include their own logo images in the embedded
 * player. These custom logos can be part of an embed preset.
 *
 * Use these methods to work with custom logos.
 */
export class EmbedPresetsCustomLogos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a custom user logo
   *
   * @remarks
   * This method adds a custom logo representing the authenticated user for display in the embedded
   * player. Be sure to use this method in the context of the multi-step upload procedure described
   * in our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail) guide. This
   * method represents Step 2 of the procedure.
   *
   * @returns The custom logo was added.
   *
   * @throws {@link EmbedPresetsCustomLogos.CreateCustomLogoError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomLogo(
    request: EmbedPresetsCustomLogos.CreateCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.CreateCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.CreateCustomLogoError,
      },
      options,
    );
  }

  /**
   * Add a custom user logo
   *
   * @remarks
   * This method adds a custom logo representing the authenticated user for display in the embedded
   * player. Be sure to use this method in the context of the multi-step upload procedure described
   * in our [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail) guide. This
   * method represents Step 2 of the procedure.
   *
   * @returns The custom logo was added.
   *
   * @throws {@link EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomLogoAlt1(
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete a custom user logo
   *
   * @remarks
   * This method deletes the specified custom logo belonging to the authenticated user.
   *
   * @returns The custom logo was deleted.
   *
   * @throws {@link EmbedPresetsCustomLogos.DeleteCustomLogoError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomLogo(
    request: EmbedPresetsCustomLogos.DeleteCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsCustomLogos.DeleteCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "logo_id", value: request.logoId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsCustomLogos.DeleteCustomLogoError,
      },
      options,
    );
  }

  /**
   * Delete a custom user logo
   *
   * @remarks
   * This method deletes the specified custom logo belonging to the authenticated user.
   *
   * @returns The custom logo was deleted.
   *
   * @throws {@link EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomLogoAlt1(
    request: EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "logo_id", value: request.logoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific custom user logo
   *
   * @remarks
   * This method returns a single custom logo belonging to the authenticated user.
   *
   * @returns The custom logo was returned.
   *
   * @throws {@link EmbedPresetsCustomLogos.GetCustomLogoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomLogo(
    request: EmbedPresetsCustomLogos.GetCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.GetCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "logo_id", value: request.logoId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogoError,
      },
      options,
    );
  }

  /**
   * Get a specific custom user logo
   *
   * @remarks
   * This method returns a single custom logo belonging to the authenticated user.
   *
   * @returns The custom logo was returned.
   *
   * @throws {@link EmbedPresetsCustomLogos.GetCustomLogoAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomLogoAlt1(
    request: EmbedPresetsCustomLogos.GetCustomLogoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.GetCustomLogoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "logo_id", value: request.logoId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogoAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the custom logos that belong to the user
   *
   * @remarks
   * This method returns every custom logo that belongs to the authenticated user or team owner.
   *
   * @returns The custom logos were returned.
   *
   * @throws {@link EmbedPresetsCustomLogos.GetCustomLogosError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomLogos(
    request: EmbedPresetsCustomLogos.GetCustomLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sizes", value: request.sizes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogosError,
      },
      options,
    );
  }

  /**
   * Get all the custom logos that belong to the user
   *
   * @remarks
   * This method returns every custom logo that belongs to the authenticated user or team owner.
   *
   * @returns The custom logos were returned.
   *
   * @throws {@link EmbedPresetsCustomLogos.GetCustomLogosAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomLogosAlt1(
    request: EmbedPresetsCustomLogos.GetCustomLogosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sizes", value: request.sizes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogosAlt1Error,
      },
      options,
    );
  }
}

export namespace EmbedPresetsCustomLogos {
  export type CreateCustomLogoRequest = {
    /** The ID of the user. */
    userId: number;
  };

  export class CreateCustomLogoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export class CreateCustomLogoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateCustomLogoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteCustomLogoRequest = {
    /** The ID of the custom logo. */
    logoId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteCustomLogoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteCustomLogoAlt1Request = {
    /** The ID of the custom logo. */
    logoId: number;
  };

  export class DeleteCustomLogoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteCustomLogoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogoRequest = {
    /** The ID of the custom logo. */
    logoId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetCustomLogoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogoAlt1Request = {
    /** The ID of the custom logo. */
    logoId: number;
  };

  export class GetCustomLogoAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCustomLogoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogosRequest = {
    /** The ID of the user. */
    userId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The pixel dimensions of the image in `{width}x{height}` format. For more information, see our
     * [Using Common Formats and
     * Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide.
     */
    sizes?: string;
  };

  export class GetCustomLogosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCustomLogosError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogosAlt1Request = {
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The pixel dimensions of the image in `{width}x{height}` format. For more information, see our
     * [Using Common Formats and
     * Parameters](https://developer.vimeo.com/api/common-formats#using-the-sizes-parameter) guide.
     */
    sizes?: string;
  };

  export class GetCustomLogosAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetCustomLogosAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
