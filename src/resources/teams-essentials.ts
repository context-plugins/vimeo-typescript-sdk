import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import {
  customMetadataSettingsConnectionSchema,
  type CustomMetadataSettingsConnection,
} from "../models/custom-metadata-settings-connection.js";
import {
  customMetadataSettingsSchema,
  type CustomMetadataSettings,
} from "../models/custom-metadata-settings.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort48Schema, type Sort48 } from "../models/sort48.js";
import {
  teamsCustomMetadataBackfillRequestSchema,
  type TeamsCustomMetadataBackfillRequest,
} from "../models/teams-custom-metadata-backfill-request.js";
import {
  teamsCustomMetadataOptionsRequestSchema,
  type TeamsCustomMetadataOptionsRequest,
} from "../models/teams-custom-metadata-options-request.js";
import {
  teamsCustomMetadataRequestSchema,
  type TeamsCustomMetadataRequest,
} from "../models/teams-custom-metadata-request.js";
import type { Servers } from "../servers.js";

export class TeamsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  backfillTeamCustomMetadata(
    request: TeamsEssentials.BackfillTeamCustomMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TeamsEssentials.BackfillTeamCustomMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/teams/{user_id}/custom_metadata/backfill"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: teamsCustomMetadataBackfillRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: TeamsEssentials.BackfillTeamCustomMetadataError,
      },
      options,
    );
  }

  getTeamCustomMetadataIncompleteVideos(
    request: TeamsEssentials.GetTeamCustomMetadataIncompleteVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/teams/{user_id}/custom_metadata/incomplete_videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort48Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError,
      },
      options,
    );
  }

  getTeamCustomMetadataSettings(
    request: TeamsEssentials.GetTeamCustomMetadataSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSettingsConnection, TeamsEssentials.GetTeamCustomMetadataSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/teams/{user_id}/custom_metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customMetadataSettingsConnectionSchema },
        errorFactory: TeamsEssentials.GetTeamCustomMetadataSettingsError,
      },
      options,
    );
  }

  updateCustomMetadataFieldOptions(
    request: TeamsEssentials.UpdateCustomMetadataFieldOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSettings, TeamsEssentials.UpdateCustomMetadataFieldOptionsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/teams/{user_id}/custom_metadata/options"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: teamsCustomMetadataOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: customMetadataSettingsSchema },
        errorFactory: TeamsEssentials.UpdateCustomMetadataFieldOptionsError,
      },
      options,
    );
  }

  upsertCustomMetadataSettings(
    request: TeamsEssentials.UpsertCustomMetadataSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSettings[], TeamsEssentials.UpsertCustomMetadataSettingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/teams/{user_id}/custom_metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => teamsCustomMetadataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customMetadataSettingsSchema)) },
        errorFactory: TeamsEssentials.UpsertCustomMetadataSettingsError,
      },
      options,
    );
  }
}

export namespace TeamsEssentials {
  export type BackfillTeamCustomMetadataRequest = {
    userId: number;
    body: TeamsCustomMetadataBackfillRequest;
  };

  export class BackfillTeamCustomMetadataError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<BackfillTeamCustomMetadataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTeamCustomMetadataIncompleteVideosRequest = {
    userId: number;
    page?: number;
    perPage?: number;
    sort?: Sort48;
  };

  export class GetTeamCustomMetadataIncompleteVideosError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetTeamCustomMetadataIncompleteVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTeamCustomMetadataSettingsRequest = {
    userId: number;
  };

  export class GetTeamCustomMetadataSettingsError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<GetTeamCustomMetadataSettingsError> = [
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCustomMetadataFieldOptionsRequest = {
    userId: number;
    body: TeamsCustomMetadataOptionsRequest;
  };

  export class UpdateCustomMetadataFieldOptionsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<UpdateCustomMetadataFieldOptionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UpsertCustomMetadataSettingsRequest = {
    userId: number;
    body?: TeamsCustomMetadataRequest;
  };

  export class UpsertCustomMetadataSettingsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<UpsertCustomMetadataSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
