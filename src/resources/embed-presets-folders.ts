import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with folders that have embed presets.
 */
export class EmbedPresetsFolders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove an embed preset from a folder
   *
   * @remarks
   * This method removes the specified embed preset from a folder. The authenticated user must be
   * either the owner of the folder or a team user with the contributor or admin role.
   *
   * @returns The embed preset was removed.
   *
   * @throws {@link EmbedPresetsFolders.DeleteFolderEmbedPresetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFolderEmbedPreset(
    request: EmbedPresetsFolders.DeleteFolderEmbedPresetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsFolders.DeleteFolderEmbedPresetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/presets/{preset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "preset_id", value: request.presetId, schema: s.float64() },
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsFolders.DeleteFolderEmbedPresetError,
      },
      options,
    );
  }
}

export namespace EmbedPresetsFolders {
  export type DeleteFolderEmbedPresetRequest = {
    /** The ID of the embed preset. */
    presetId: number;
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteFolderEmbedPresetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteFolderEmbedPresetError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
