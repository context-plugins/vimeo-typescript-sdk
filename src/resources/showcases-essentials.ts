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
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { meAlbumsCopyRequestSchema, type MeAlbumsCopyRequest } from "../models/me-albums-copy-request.js";
import { meAlbumsRequestSchema, type MeAlbumsRequest } from "../models/me-albums-request.js";
import { meAlbumsRequest1Schema, type MeAlbumsRequest1 } from "../models/me-albums-request1.js";
import { sort18Schema, type Sort18 } from "../models/sort18.js";
import {
  usersAlbumsCopyRequestSchema,
  type UsersAlbumsCopyRequest,
} from "../models/users-albums-copy-request.js";
import { usersAlbumsRequestSchema, type UsersAlbumsRequest } from "../models/users-albums-request.js";
import { usersAlbumsRequest1Schema, type UsersAlbumsRequest1 } from "../models/users-albums-request1.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with showcases.
 */
export class ShowcasesEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add folder contents to showcases
   *
   * @remarks
   * This method adds all videos and events from a specified folder to showcases.
   *
   * The authenticated user must either be the owner of the showcase or have team permissions.
   *
   * @returns The folder contents were added to the showcases.
   *
   * @throws {@link ShowcasesEssentials.AddFolderToShowcasesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addFolderToShowcases(
    request: ShowcasesEssentials.AddFolderToShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesEssentials.AddFolderToShowcasesError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/from_folder"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "album_uris", value: request.albumUris, schema: s.string() },
          { name: "folder_id", value: request.folderId, schema: s.float64() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesEssentials.AddFolderToShowcasesError,
      },
      options,
    );
  }

  /**
   * Copy a showcase
   *
   * @remarks
   * This method creates a copy of the specified showcase.
   *
   * @returns The copied showcase was created.
   *
   * @throws {@link ShowcasesEssentials.CopyShowcaseError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  copyShowcase(
    request: ShowcasesEssentials.CopyShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CopyShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}/copy"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CopyShowcaseError,
      },
      options,
    );
  }

  /**
   * Copy a showcase
   *
   * @remarks
   * This method creates a copy of the specified showcase.
   *
   * @returns The copied showcase was created.
   *
   * @throws {@link ShowcasesEssentials.CopyShowcaseAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  copyShowcaseAlt2(
    request: ShowcasesEssentials.CopyShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CopyShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/albums/{album_id}/copy"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meAlbumsCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CopyShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Create a showcase
   *
   * @remarks
   * This method creates a new showcase for the specified user.
   *
   * @returns The showcase was created.
   *
   * @throws {@link ShowcasesEssentials.CreateShowcaseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShowcase(
    request: ShowcasesEssentials.CreateShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CreateShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersAlbumsRequestSchema },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CreateShowcaseError,
      },
      options,
    );
  }

  /**
   * Create a showcase
   *
   * @remarks
   * This method creates a new showcase for the specified user.
   *
   * @returns The showcase was created.
   *
   * @throws {@link ShowcasesEssentials.CreateShowcaseAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShowcaseAlt1(
    request: ShowcasesEssentials.CreateShowcaseAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CreateShowcaseAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meAlbumsRequestSchema },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CreateShowcaseAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete a showcase
   *
   * @remarks
   * This method deletes the specified showcase. The authenticated user must be the owner of the
   * showcase.
   *
   * @returns The showcase was deleted.
   *
   * @throws {@link ShowcasesEssentials.DeleteShowcaseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteShowcase(
    request: ShowcasesEssentials.DeleteShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesEssentials.DeleteShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}"),
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
        success: { kind: "empty" },
        errorFactory: ShowcasesEssentials.DeleteShowcaseError,
      },
      options,
    );
  }

  /**
   * Delete a showcase
   *
   * @remarks
   * This method deletes the specified showcase. The authenticated user must be the owner of the
   * showcase.
   *
   * @returns The showcase was deleted.
   *
   * @throws {@link ShowcasesEssentials.DeleteShowcaseAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteShowcaseAlt2(
    request: ShowcasesEssentials.DeleteShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesEssentials.DeleteShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesEssentials.DeleteShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Edit a showcase
   *
   * @remarks
   * This method edits the specified showcase. The authenticated user must be the owner of the
   * showcase.
   *
   * @returns The showcase was edited.
   *
   * @throws {@link ShowcasesEssentials.EditShowcaseError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editShowcase(
    request: ShowcasesEssentials.EditShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.EditShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.EditShowcaseError,
      },
      options,
    );
  }

  /**
   * Edit a showcase
   *
   * @remarks
   * This method edits the specified showcase. The authenticated user must be the owner of the
   * showcase.
   *
   * @returns The showcase was edited.
   *
   * @throws {@link ShowcasesEssentials.EditShowcaseAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editShowcaseAlt2(
    request: ShowcasesEssentials.EditShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.EditShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => meAlbumsRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.EditShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Get a specific showcase
   *
   * @remarks
   * This method returns the specified showcase. The authenticated user must be the owner of the
   * showcase.
   *
   * @returns The showcase was returned.
   *
   * @throws {@link ShowcasesEssentials.GetShowcaseError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcase(
    request: ShowcasesEssentials.GetShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.GetShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums/{album_id}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.GetShowcaseError,
      },
      options,
    );
  }

  /**
   * Get a specific showcase
   *
   * @remarks
   * This method returns the specified showcase. The authenticated user must be the owner of the
   * showcase.
   *
   * @returns The showcase was returned.
   *
   * @throws {@link ShowcasesEssentials.GetShowcaseAlt2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcaseAlt2(
    request: ShowcasesEssentials.GetShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.GetShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.GetShowcaseAlt2Error,
      },
      options,
    );
  }

  /**
   * Get all the showcases that belong to the user
   *
   * @remarks
   * This method returns every showcase belonging to the authenticated user.
   *
   * @returns The showcases were returned.
   *
   * @throws {@link ShowcasesEssentials.GetShowcasesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcases(
    request: ShowcasesEssentials.GetShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, ShowcasesEssentials.GetShowcasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort18Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: ShowcasesEssentials.GetShowcasesError,
      },
      options,
    );
  }

  /**
   * Get all the showcases that belong to the user
   *
   * @remarks
   * This method returns every showcase belonging to the authenticated user.
   *
   * @returns The showcases were returned.
   *
   * @throws {@link ShowcasesEssentials.GetShowcasesAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShowcasesAlt1(
    request: ShowcasesEssentials.GetShowcasesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, ShowcasesEssentials.GetShowcasesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort18Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: ShowcasesEssentials.GetShowcasesAlt1Error,
      },
      options,
    );
  }

  /**
   * Add videos and events to showcases
   *
   * @remarks
   * This method adds videos and events to the specified showcases. The authenticated user must
   * either be the owner of the showcase or have team permissions.
   *
   * The present setup permits only one event per showcase.
   *
   * @returns The videos and events were added to the showcases.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateShowcases(
    request: ShowcasesEssentials.UpdateShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "album_item_uris", value: request.albumItemUris, schema: s.string() },
          { name: "album_uris", value: request.albumUris, schema: s.string() },
        ],
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
}

export namespace ShowcasesEssentials {
  export type AddFolderToShowcasesRequest = {
    /** The ID of the user. */
    userId: number;
    /** A comma-separated list of showcase URIs. */
    albumUris: string;
    /** The ID of the folder containing videos and events to add. */
    folderId: number;
  };

  export class AddFolderToShowcasesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AddFolderToShowcasesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CopyShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersAlbumsCopyRequest;
  };

  export class CopyShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CopyShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CopyShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    body?: MeAlbumsCopyRequest;
  };

  export class CopyShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CopyShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateShowcaseRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersAlbumsRequest;
  };

  export class CreateShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateShowcaseError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateShowcaseAlt1Request = {
    body: MeAlbumsRequest;
  };

  export class CreateShowcaseAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateShowcaseAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
  };

  export class DeleteShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersAlbumsRequest1;
  };

  export class EditShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditShowcaseError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
    body?: MeAlbumsRequest1;
  };

  export class EditShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"legacyError", LegacyError>
      | Declared<"legacyError2", LegacyError>
      | Declared<"legacyError3", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditShowcaseAlt2Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseRequest = {
    /** The ID of the showcase. */
    albumId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetShowcaseError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseAlt2Request = {
    /** The ID of the showcase. */
    albumId: number;
  };

  export class GetShowcaseAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcaseAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcasesRequest = {
    /** The ID of the user. */
    userId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * A comma-separated list of showcase privacies to include. Valid options are `anybody` for
     * universal access, `password` for password-restricted access, `embed_only` for restricted
     * access on Vimeo but available as an embedded showcase elsewhere, `team` for team-only access,
     * `nobody` for owner-only access, and `unlisted` for restricted access except for those with a
     * direct link. By default, all privacies are returned.
     */
    filterPrivacy?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date of creation.
     *  * `duration` - Sort the results by duration.
     *  * `last_modified` - Sort the results by last modified date.
     *  * `videos` - Sort the results by the number of videos.
     */
    sort?: Sort18;
  };

  export class GetShowcasesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcasesError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcasesAlt1Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * A comma-separated list of showcase privacies to include. Valid options are `anybody` for
     * universal access, `password` for password-restricted access, `embed_only` for restricted
     * access on Vimeo but available as an embedded showcase elsewhere, `team` for team-only access,
     * `nobody` for owner-only access, and `unlisted` for restricted access except for those with a
     * direct link. By default, all privacies are returned.
     */
    filterPrivacy?: string;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date of creation.
     *  * `duration` - Sort the results by duration.
     *  * `last_modified` - Sort the results by last modified date.
     *  * `videos` - Sort the results by the number of videos.
     */
    sort?: Sort18;
  };

  export class GetShowcasesAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetShowcasesAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UpdateShowcasesRequest = {
    /** The ID of the user. */
    userId: number;
    /** A comma-separated list of video or event URIs. */
    albumItemUris: string;
    /** A comma-separated list of showcase URIs. */
    albumUris: string;
  };
}
