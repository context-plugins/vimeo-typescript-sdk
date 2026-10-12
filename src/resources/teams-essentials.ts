import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * These are the most common methods for working with teams.
 */
export class TeamsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Backfill a custom metadata value across a team's videos
   *
   * @remarks
   * This method applies a custom metadata value across every existing video owned by the team. Use
   * it to populate a newly created field, fix a typo across a library, or align a large catalog
   * after a workflow change.
   *
   * The backfill runs **asynchronously**. The response is returned as soon as the job is accepted,
   * but the values themselves are propagated in the background and may take several minutes for
   * large libraries. The `total_videos` count in the response is a snapshot of how many videos
   * match the request at the moment it's accepted; videos uploaded after that point aren't included
   * and need a separate backfill.
   *
   * By default, only videos that don't already have a value for the field are updated. Set
   * `override_existing` to `true` to replace existing values as well.
   *
   * The value provided must match the field's data type. For example, a `date` field requires
   * `YYYY-MM-DD`, a `select` field requires one of its allowed values, and a `multi-select` field
   * requires a JSON-encoded array of allowed values.
   *
   * @returns The backfill request was accepted. The response includes the `field_id` and the
   * `total_videos` snapshot count of videos that will be updated in the background.
   *
   * @throws {@link TeamsEssentials.BackfillTeamCustomMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  backfillTeamCustomMetadata(
    request: TeamsEssentials.BackfillTeamCustomMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TeamsEssentials.BackfillTeamCustomMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/teams/{user_id}/custom_metadata/backfill"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamsCustomMetadataBackfillRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: TeamsEssentials.BackfillTeamCustomMetadataError,
      },
      options,
    );
  }

  /**
   * List videos missing mandatory custom metadata
   *
   * @remarks
   * This method returns the team's videos that are missing one or more values for **mandatory**
   * custom metadata fields. Use it to power dashboards that surface incomplete videos, drive
   * curation workflows, or generate reports of catalog completeness.
   *
   * Each item in the response includes the video's title and identifier, a link to the video's
   * management page, a thumbnail, the last modified timestamp, and the list of mandatory fields
   * that still need a value (each with its `field_id` and `name`).
   *
   * Only fields marked `mandatory: true` (see `POST /teams/{user_id}/custom_metadata`) are
   * considered. Teams with no mandatory fields receive an empty result set.
   *
   * @returns The list of incomplete videos was returned. Each entry includes the video's ID, name,
   * link, thumbnail URL, modified timestamp, and the list of mandatory fields that are still
   * missing values.
   *
   * @throws {@link TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeamCustomMetadataIncompleteVideos(
    request: TeamsEssentials.GetTeamCustomMetadataIncompleteVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/teams/{user_id}/custom_metadata/incomplete_videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort48Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TeamsEssentials.GetTeamCustomMetadataIncompleteVideosError,
      },
      options,
    );
  }

  /**
   * Get a team's custom metadata fields
   *
   * @remarks
   * This method returns every custom metadata field defined for the specified team.
   *
   * Custom metadata fields let teams attach structured, queryable information to videos (for
   * example, a department selector, a release date, or a freeform note). Once a field is defined
   * here, you can assign per-video values via `PUT /videos/{video_id}/custom_metadata`.
   *
   * The response contains the field definitions only; per-video values are returned by the video
   * endpoints. Use this method to populate a UI that lets users fill in metadata, or to discover
   * the field IDs you need for backfills and value updates.
   *
   * @returns The custom metadata fields were returned.
   *
   * @throws {@link TeamsEssentials.GetTeamCustomMetadataSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeamCustomMetadataSettings(
    request: TeamsEssentials.GetTeamCustomMetadataSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSettingsConnection, TeamsEssentials.GetTeamCustomMetadataSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/teams/{user_id}/custom_metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customMetadataSettingsConnectionSchema },
        errorFactory: TeamsEssentials.GetTeamCustomMetadataSettingsError,
      },
      options,
    );
  }

  /**
   * Add, rename, or remove a custom metadata field's allowed values
   *
   * @remarks
   * This method modifies the allowed value list of a `select` or `multi-select` custom metadata
   * field. Use it to rename an option, remove an option, or add a new option without recreating the
   * field.
   *
   * Each entry in the `options` array describes one atomic change, defined by combining `old_value`
   * and `new_value`:
   *
   * | `old_value`     | `new_value`     | Operation                      |
   * | --------------- | --------------- | ------------------------------ |
   * | string          | string          | Rename `old_value` to `new_value` |
   * | string          | `null` / omitted | Delete `old_value` from the field |
   * | `null` / omitted | string          | Add `new_value` to the field   |
   *
   * Renames are propagated to every existing video that uses the option, so the change is visible
   * across the team's library. Deletes also remove the option from every video that had it set.
   * Propagation runs in the background; the field's option list itself is updated synchronously and
   * returned in the response.
   *
   * A few rules to be aware of:
   *
   * - The field must be of type `select` or `multi-select`. Other types reject the request.
   * - Cascading renames (renaming `A` to `B`, then `B` to `C` in the same call) are not allowed;
   *   submit them as separate requests if you need that effect.
   * - The resulting option list must not contain duplicates.
   *
   * @returns The updated field definition was returned, including its new list of allowed values.
   *
   * @throws {@link TeamsEssentials.UpdateCustomMetadataFieldOptionsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomMetadataFieldOptions(
    request: TeamsEssentials.UpdateCustomMetadataFieldOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSettings, TeamsEssentials.UpdateCustomMetadataFieldOptionsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/teams/{user_id}/custom_metadata/options"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamsCustomMetadataOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: customMetadataSettingsSchema },
        errorFactory: TeamsEssentials.UpdateCustomMetadataFieldOptionsError,
      },
      options,
    );
  }

  /**
   * Create, update, or delete a team's custom metadata fields
   *
   * @remarks
   * This method creates, updates, or deletes custom metadata fields for a team in a single request.
   * Each entry in the `fields` array is treated independently:
   *
   * - To **create** a new field, omit `id` and provide `name`, `type`, and `mandatory`.
   * - To **update** an existing field, provide `id` along with the values you want to change. Other
   *   values are left untouched.
   * - To **delete** an existing field, provide `id` and set `delete: true`. Deleting a field also
   *   removes every value assigned to it across the team's videos.
   *
   * Some constraints are worth knowing up front:
   *
   * - A team can have a maximum of 20 custom metadata fields. Requests that would exceed that limit
   *   after deletes are applied are rejected.
   * - The `type` of an existing field can't be changed once the field is created.
   * - A field that was created as optional can't be made `mandatory` later.
   * - All operations in the request are applied as a single batch; if any one fails the whole
   *   request is rejected and no changes are saved.
   *
   * @returns The updated set of custom metadata fields was returned.
   *
   * @throws {@link TeamsEssentials.UpsertCustomMetadataSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertCustomMetadataSettings(
    request: TeamsEssentials.UpsertCustomMetadataSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSettings[], TeamsEssentials.UpsertCustomMetadataSettingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/teams/{user_id}/custom_metadata"),
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
    /** The ID of the team owner. */
    userId: number;
    body: TeamsCustomMetadataBackfillRequest;
  };

  export class BackfillTeamCustomMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<BackfillTeamCustomMetadataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTeamCustomMetadataIncompleteVideosRequest = {
    /** The ID of the team owner. */
    userId: number;
    /** The page number of the results to show. Defaults to `1`. */
    page?: number;
    /** The number of items to show on each page, up to a maximum of `100`. Defaults to `25`. */
    perPage?: number;
    /**
     * The order in which to return the results. Defaults to `title_asc`.
     *
     * Option descriptions:
     *  * `modified_asc` - Sort by last modified time, oldest first.
     *  * `modified_desc` - Sort by last modified time, newest first.
     *  * `title_asc` - Sort by video title, ascending.
     *  * `title_desc` - Sort by video title, descending.
     */
    sort?: Sort48;
  };

  export class GetTeamCustomMetadataIncompleteVideosError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetTeamCustomMetadataIncompleteVideosError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTeamCustomMetadataSettingsRequest = {
    /** The ID of the team owner. */
    userId: number;
  };

  export class GetTeamCustomMetadataSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError> | Declared<"error", Error>
    >;

    static readonly errors: ErrorDecoders<GetTeamCustomMetadataSettingsError> = [
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCustomMetadataFieldOptionsRequest = {
    /** The ID of the team owner. */
    userId: number;
    body: TeamsCustomMetadataOptionsRequest;
  };

  export class UpdateCustomMetadataFieldOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<UpdateCustomMetadataFieldOptionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UpsertCustomMetadataSettingsRequest = {
    /** The ID of the team owner. */
    userId: number;
    body?: TeamsCustomMetadataRequest;
  };

  export class UpsertCustomMetadataSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<UpsertCustomMetadataSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
