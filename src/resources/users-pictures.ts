import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { mePicturesRequestSchema, type MePicturesRequest } from "../models/me-pictures-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import { usersPicturesRequestSchema, type UsersPicturesRequest } from "../models/users-pictures-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with user pictures.
 */
export class UsersPictures {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a picture to the user's account
   *
   * @remarks
   * This method adds a portrait image to the authenticated user's Vimeo account. Send the binary
   * data of the image file to the location that you receive from the **link** field in the
   * response. For step-by-step instructions, see [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail-step-3).
   *
   * @returns The portrait image was added.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPicture(
    request: UsersPictures.CreatePictureRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/pictures"),
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add a picture to the user's account
   *
   * @remarks
   * This method adds a portrait image to the authenticated user's Vimeo account. Send the binary
   * data of the image file to the location that you receive from the **link** field in the
   * response. For step-by-step instructions, see [Working with Thumbnail
   * Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail-step-3).
   *
   * @returns The portrait image was added.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPictureAlt1(options?: RequestOptions): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/pictures"),
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a picture from the user's account
   *
   * @remarks
   * This method removes the specified portrait image from the authenticated user's Vimeo account.
   *
   * @returns The portrait image was removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePicture(
    request: UsersPictures.DeletePictureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portraitset_id", value: request.portraitsetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a picture from the user's account
   *
   * @remarks
   * This method removes the specified portrait image from the authenticated user's Vimeo account.
   *
   * @returns The portrait image was removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePictureAlt1(
    request: UsersPictures.DeletePictureAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portraitset_id", value: request.portraitsetId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Edit a picture in the user's account
   *
   * @remarks
   * This method edits the specified portrait image belonging to the authenticated user.
   *
   * @returns The portrait image was edited.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editPicture(
    request: UsersPictures.EditPictureRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portraitset_id", value: request.portraitsetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Edit a picture in the user's account
   *
   * @remarks
   * This method edits the specified portrait image belonging to the authenticated user.
   *
   * @returns The portrait image was edited.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editPictureAlt1(
    request: UsersPictures.EditPictureAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portraitset_id", value: request.portraitsetId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => mePicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific picture that belongs to the user
   *
   * @remarks
   * This method returns a single portrait image belonging to the authenticated user.
   *
   * @returns The portrait image was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPicture(
    request: UsersPictures.GetPictureRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portraitset_id", value: request.portraitsetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific picture that belongs to the user
   *
   * @remarks
   * This method returns a single portrait image belonging to the authenticated user.
   *
   * @returns The portrait image was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPictureAlt1(
    request: UsersPictures.GetPictureAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portraitset_id", value: request.portraitsetId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the pictures that belong to the user
   *
   * @remarks
   * This method returns every portrait image belonging to the authenticated user.
   *
   * @returns The portrait images were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPictures(
    request: UsersPictures.GetPicturesRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the pictures that belong to the user
   *
   * @remarks
   * This method returns every portrait image belonging to the authenticated user.
   *
   * @returns The portrait images were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPicturesAlt1(
    request: UsersPictures.GetPicturesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace UsersPictures {
  export type CreatePictureRequest = {
    /** The ID of the user. */
    userId: number;
  };

  export type DeletePictureRequest = {
    /** The ID of the picture. */
    portraitsetId: number;
    /** The ID of the user. */
    userId: number;
  };

  export type DeletePictureAlt1Request = {
    /** The ID of the picture. */
    portraitsetId: number;
  };

  export type EditPictureRequest = {
    /** The ID of the picture. */
    portraitsetId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersPicturesRequest;
  };

  export type EditPictureAlt1Request = {
    /** The ID of the picture. */
    portraitsetId: number;
    body?: MePicturesRequest;
  };

  export type GetPictureRequest = {
    /** The ID of the picture. */
    portraitsetId: number;
    /** The ID of the user. */
    userId: number;
  };

  export type GetPictureAlt1Request = {
    /** The ID of the picture. */
    portraitsetId: number;
  };

  export type GetPicturesRequest = {
    /** The ID of the user. */
    userId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetPicturesAlt1Request = {
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };
}
