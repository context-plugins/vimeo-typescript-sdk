import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { mePresetsRequestSchema, type MePresetsRequest } from "../models/me-presets-request.js";
import { mePresetsRequest1Schema, type MePresetsRequest1 } from "../models/me-presets-request1.js";
import { presetConnectionSchema, type PresetConnection } from "../models/preset-connection.js";
import { presetSchema, type Preset } from "../models/preset.js";
import { usersPresetsRequestSchema, type UsersPresetsRequest } from "../models/users-presets-request.js";
import { usersPresetsRequest1Schema, type UsersPresetsRequest1 } from "../models/users-presets-request1.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with embed presets.
 */
export class EmbedPresetsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an embed preset
   *
   * @remarks
   * This method creates an embed preset.
   *
   * @returns The embed preset was created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEmbedPresets(
    request: EmbedPresetsEssentials.CreateEmbedPresetsRequest,
    options?: RequestOptions,
  ): ApiPromise<Preset, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/presets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPresetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create an embed preset
   *
   * @remarks
   * This method creates an embed preset.
   *
   * @returns The embed preset was created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEmbedPresetsAlt1(
    request: EmbedPresetsEssentials.CreateEmbedPresetsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Preset, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/presets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => mePresetsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete an embed preset
   *
   * @remarks
   * This method deletes the specified embed preset. The authenticated user must be the owner of the
   * preset.
   *
   * @returns The embed preset was deleted.
   *
   * @throws {@link EmbedPresetsEssentials.DeleteEmbedPresetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEmbedPreset(
    request: EmbedPresetsEssentials.DeleteEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsEssentials.DeleteEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsEssentials.DeleteEmbedPresetError,
      },
      options,
    );
  }

  /**
   * Delete an embed preset
   *
   * @remarks
   * This method deletes the specified embed preset. The authenticated user must be the owner of the
   * preset.
   *
   * @returns The embed preset was deleted.
   *
   * @throws {@link EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEmbedPresetAlt1(
    request: EmbedPresetsEssentials.DeleteEmbedPresetAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error,
      },
      options,
    );
  }

  /**
   * Edit an embed preset
   *
   * @remarks
   * This method edits the specified embed preset. The authenticated user must be the owner of the
   * preset.
   *
   * @returns The embed preset was edited.
   *
   * @throws {@link EmbedPresetsEssentials.EditEmbedPresetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editEmbedPreset(
    request: EmbedPresetsEssentials.EditEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<Preset, EmbedPresetsEssentials.EditEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPresetsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: EmbedPresetsEssentials.EditEmbedPresetError,
      },
      options,
    );
  }

  /**
   * Edit an embed preset
   *
   * @remarks
   * This method edits the specified embed preset. The authenticated user must be the owner of the
   * preset.
   *
   * @returns The embed preset was edited.
   *
   * @throws {@link EmbedPresetsEssentials.EditEmbedPresetAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editEmbedPresetAlt1(
    request: EmbedPresetsEssentials.EditEmbedPresetAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Preset, EmbedPresetsEssentials.EditEmbedPresetAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => mePresetsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: EmbedPresetsEssentials.EditEmbedPresetAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific embed preset
   *
   * @remarks
   * This method returns a single embed preset. The authenticated user must be the owner of the
   * preset.
   *
   * @returns The embed preset was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmbedPreset(
    request: EmbedPresetsEssentials.GetEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<Preset, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific embed preset
   *
   * @remarks
   * This method returns a single embed preset. The authenticated user must be the owner of the
   * preset.
   *
   * @returns The embed preset was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmbedPresetAlt1(
    request: EmbedPresetsEssentials.GetEmbedPresetAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Preset, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the embed presets that a user has created
   *
   * @remarks
   * This method returns every embed preset that belongs to the authenticated user.
   *
   * @returns The embed presets were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmbedPresets(
    request: EmbedPresetsEssentials.GetEmbedPresetsRequest,
    options?: RequestOptions,
  ): ApiPromise<PresetConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/presets"),
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
        success: { kind: "json", schema: presetConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the embed presets that a user has created
   *
   * @remarks
   * This method returns every embed preset that belongs to the authenticated user.
   *
   * @returns The embed presets were returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmbedPresetsAlt1(
    request: EmbedPresetsEssentials.GetEmbedPresetsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PresetConnection, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/presets"),
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
        success: { kind: "json", schema: presetConnectionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace EmbedPresetsEssentials {
  export type CreateEmbedPresetsRequest = {
    /** The ID of the user. */
    userId: number;
    body?: UsersPresetsRequest;
  };

  export type CreateEmbedPresetsAlt1Request = {
    body?: MePresetsRequest;
  };

  export type DeleteEmbedPresetRequest = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteEmbedPresetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteEmbedPresetError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteEmbedPresetAlt1Request = {
    /** The ID of the embed preset. */
    presetId: number;
  };

  export class DeleteEmbedPresetAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteEmbedPresetAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditEmbedPresetRequest = {
    /** The ID of the preset. */
    presetId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersPresetsRequest1;
  };

  export class EditEmbedPresetError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditEmbedPresetError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditEmbedPresetAlt1Request = {
    /** The ID of the preset. */
    presetId: number;
    body?: MePresetsRequest1;
  };

  export class EditEmbedPresetAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditEmbedPresetAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetEmbedPresetRequest = {
    /** The ID of the preset. */
    presetId: number;
    /** The ID of the user. */
    userId: number;
  };

  export type GetEmbedPresetAlt1Request = {
    /** The ID of the preset. */
    presetId: number;
  };

  export type GetEmbedPresetsRequest = {
    /** The ID of the user. */
    userId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export type GetEmbedPresetsAlt1Request = {
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };
}
