import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { mePresetsRequestSchema, type MePresetsRequest } from "../models/me-presets-request.js";
import { mePresetsRequest1Schema, type MePresetsRequest1 } from "../models/me-presets-request1.js";
import { presetConnectionSchema, type PresetConnection } from "../models/preset-connection.js";
import { presetSchema, type Preset } from "../models/preset.js";
import { usersPresetsRequestSchema, type UsersPresetsRequest } from "../models/users-presets-request.js";
import { usersPresetsRequest1Schema, type UsersPresetsRequest1 } from "../models/users-presets-request1.js";
import type { Servers } from "../servers.js";

export class EmbedPresetsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createEmbedPresets(
    request: EmbedPresetsEssentials.CreateEmbedPresetsRequest,
    options?: RequestOptions,
  ): ApiPromise<Preset, ResponseError> {
    return this.#rawClient.execute<Preset, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/presets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPresetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createEmbedPresetsAlt1(
    request: EmbedPresetsEssentials.CreateEmbedPresetsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Preset, ResponseError> {
    return this.#rawClient.execute<Preset, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/me/presets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => mePresetsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteEmbedPreset(
    request: EmbedPresetsEssentials.DeleteEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsEssentials.DeleteEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsEssentials.DeleteEmbedPresetError,
      },
      options,
    );
  }

  deleteEmbedPresetAlt1(
    request: EmbedPresetsEssentials.DeleteEmbedPresetAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsEssentials.DeleteEmbedPresetAlt1Error,
      },
      options,
    );
  }

  editEmbedPreset(
    request: EmbedPresetsEssentials.EditEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<Preset, EmbedPresetsEssentials.EditEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
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

  editEmbedPresetAlt1(
    request: EmbedPresetsEssentials.EditEmbedPresetAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Preset, EmbedPresetsEssentials.EditEmbedPresetAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.number() }],
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

  getEmbedPreset(
    request: EmbedPresetsEssentials.GetEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<Preset, ResponseError> {
    return this.#rawClient.execute<Preset, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEmbedPresetAlt1(
    request: EmbedPresetsEssentials.GetEmbedPresetAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Preset, ResponseError> {
    return this.#rawClient.execute<Preset, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: presetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEmbedPresets(
    request: EmbedPresetsEssentials.GetEmbedPresetsRequest,
    options?: RequestOptions,
  ): ApiPromise<PresetConnection, ResponseError> {
    return this.#rawClient.execute<PresetConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/presets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: presetConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEmbedPresetsAlt1(
    request: EmbedPresetsEssentials.GetEmbedPresetsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PresetConnection, ResponseError> {
    return this.#rawClient.execute<PresetConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/presets"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: presetConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace EmbedPresetsEssentials {
  export type CreateEmbedPresetsRequest = {
    userId: number;
    body?: UsersPresetsRequest;
  };

  export type CreateEmbedPresetsAlt1Request = {
    body?: MePresetsRequest;
  };

  export type DeleteEmbedPresetRequest = {
    presetId: number;
    userId: number;
  };

  export class DeleteEmbedPresetError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteEmbedPresetError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteEmbedPresetAlt1Request = {
    presetId: number;
  };

  export class DeleteEmbedPresetAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteEmbedPresetAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditEmbedPresetRequest = {
    presetId: number;
    userId: number;
    body?: UsersPresetsRequest1;
  };

  export class EditEmbedPresetError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditEmbedPresetError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditEmbedPresetAlt1Request = {
    presetId: number;
    body?: MePresetsRequest1;
  };

  export class EditEmbedPresetAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditEmbedPresetAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetEmbedPresetRequest = {
    presetId: number;
    userId: number;
  };

  export type GetEmbedPresetAlt1Request = {
    presetId: number;
  };

  export type GetEmbedPresetsRequest = {
    userId: number;
    page?: number;
    perPage?: number;
  };

  export type GetEmbedPresetsAlt1Request = {
    page?: number;
    perPage?: number;
  };
}
