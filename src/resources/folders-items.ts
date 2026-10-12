import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter21Schema, type Filter21 } from "../models/filter21.js";
import { sort37Schema, type Sort37 } from "../models/sort37.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage items in folders.
 */
export class FoldersItems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove items from a folder
   *
   * @remarks
   * This method removes all items from the specified folder.
   *
   * @returns The items were removed.
   *
   * @throws {@link FoldersItems.DeleteFolderItemsAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFolderItemsAlt1(
    request: FoldersItems.DeleteFolderItemsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersItems.DeleteFolderItemsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [
          { name: "uris", value: request.uris, schema: s.string() },
          {
            name: "send_to_recently_deleted",
            value: request.sendToRecentlyDeleted,
            schema: s.optional(s.boolean()),
          },
          { name: "should_delete_items", value: request.shouldDeleteItems, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersItems.DeleteFolderItemsAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the items in a folder
   *
   * @remarks
   * This method returns every item that belongs to the specified folder.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFolderItems(
    request: FoldersItems.GetFolderItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [
          { name: "clip_privacy_filters", value: request.clipPrivacyFilters, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter21Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
        ],
        headers: [],
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
   * Get all the items in a folder
   *
   * @remarks
   * This method returns every item that belongs to the specified folder.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFolderItems2(
    request: FoldersItems.GetFolderItems2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [
          { name: "clip_privacy_filters", value: request.clipPrivacyFilters, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter21Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
        ],
        headers: [],
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

export namespace FoldersItems {
  export type DeleteFolderItemsAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    /**
     * A comma-separated list of video, event, or folder URIs to remove. Folder URIs are moved to
     * the library root (with their contents).
     */
    uris: string;
    /**
     * When `should_delete_items` is true, send deleted clips to Recently Deleted purgatory
     * (`TYPE_RECENTLY_DELETED`) instead of legacy user delete purgatory.
     */
    sendToRecentlyDeleted?: boolean;
    /** Whether to delete the items when removing them from the folder. */
    shouldDeleteItems?: boolean;
  };

  export class DeleteFolderItemsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteFolderItemsAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFolderItemsRequest = {
    /** The ID of the folder. */
    projectId: number;
    /**
     * A comma-separated list of video privacy types to filter on. The accepted values are `private`
     * for when only the creator and users with access grants can play the video; `public` for when
     * anyone can play the video; `password` for when only users with the correct password can play
     * the video; `hide_from_vimeo` for when the video is private but embeddable anywhere; and
     * `unlisted` for when only users with the link can play the video.
     */
    clipPrivacyFilters?: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `folder` - Filter the results by folder.
     *  * `live_event` - Filter the results by event.
     *  * `video` - Filter the results by video.
     */
    filter?: Filter21;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sort order.
     *  * `duration` - Sort the results by duration. Items without a duration, namely events and
     *    folders, are grouped by type in ascending alphabetical order, with events first.
     *  * `last_user_action_event_date` - Sort the results by the date of the last user action.
     */
    sort?: Sort37;
  };

  export type GetFolderItems2Request = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    /**
     * A comma-separated list of video privacy types to filter on. The accepted values are `private`
     * for when only the creator and users with access grants can play the video; `public` for when
     * anyone can play the video; `password` for when only users with the correct password can play
     * the video; `hide_from_vimeo` for when the video is private but embeddable anywhere; and
     * `unlisted` for when only users with the link can play the video.
     */
    clipPrivacyFilters?: string;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `folder` - Filter the results by folder.
     *  * `live_event` - Filter the results by event.
     *  * `video` - Filter the results by video.
     */
    filter?: Filter21;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sort order.
     *  * `duration` - Sort the results by duration. Items without a duration, namely events and
     *    folders, are grouped by type in ascending alphabetical order, with events first.
     *  * `last_user_action_event_date` - Sort the results by the date of the last user action.
     */
    sort?: Sort37;
  };
}
