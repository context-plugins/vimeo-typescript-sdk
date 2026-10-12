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
import {
  meProjectsVideosRequestSchema,
  type MeProjectsVideosRequest,
} from "../models/me-projects-videos-request.js";
import {
  meProjectsVideosRequest1Schema,
  type MeProjectsVideosRequest1,
} from "../models/me-projects-videos-request1.js";
import { sort37Schema, type Sort37 } from "../models/sort37.js";
import {
  usersProjectsVideosRequestSchema,
  type UsersProjectsVideosRequest,
} from "../models/users-projects-videos-request.js";
import {
  usersProjectsVideosRequest1Schema,
  type UsersProjectsVideosRequest1,
} from "../models/users-projects-videos-request1.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage videos in folders.
 */
export class FoldersVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a video to a folder
   *
   * @remarks
   * This method adds a single video to the specified folder. The authenticated user must be the
   * owner of the folder.
   *
   * @returns The video was added.
   *
   * @throws {@link FoldersVideos.AddVideoToProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToProject(
    request: FoldersVideos.AddVideoToProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideoToProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideoToProjectError,
      },
      options,
    );
  }

  /**
   * Add a video to a folder
   *
   * @remarks
   * This method adds a single video to the specified folder. The authenticated user must be the
   * owner of the folder.
   *
   * @returns The video was added.
   *
   * @throws {@link FoldersVideos.AddVideoToProjectAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoToProjectAlt1(
    request: FoldersVideos.AddVideoToProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideoToProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideoToProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Add a list of videos to a folder
   *
   * @remarks
   * This method adds multiple videos to the specified folder. The authenticated user must be the
   * owner of the folder.
   *
   * @returns The videos were added.
   *
   * @throws {@link FoldersVideos.AddVideosToProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideosToProject(
    request: FoldersVideos.AddVideosToProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideosToProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersProjectsVideosRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideosToProjectError,
      },
      options,
    );
  }

  /**
   * Add a list of videos to a folder
   *
   * @remarks
   * This method adds multiple videos to the specified folder. The authenticated user must be the
   * owner of the folder.
   *
   * @returns The videos were added.
   *
   * @throws {@link FoldersVideos.AddVideosToProjectAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideosToProjectAlt1(
    request: FoldersVideos.AddVideosToProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideosToProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meProjectsVideosRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideosToProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the videos in a folder
   *
   * @remarks
   * This method returns all the videos that belong to the specified folder.
   *
   * @returns The videos were returned.
   *
   * @throws {@link FoldersVideos.GetProjectVideosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectVideos(
    request: FoldersVideos.GetProjectVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, FoldersVideos.GetProjectVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/videos"),
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
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "include_subfolders", value: request.includeSubfolders, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: FoldersVideos.GetProjectVideosError,
      },
      options,
    );
  }

  /**
   * Get all the videos in a folder
   *
   * @remarks
   * This method returns all the videos that belong to the specified folder.
   *
   * @returns The videos were returned.
   *
   * @throws {@link FoldersVideos.GetProjectVideosAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectVideosAlt1(
    request: FoldersVideos.GetProjectVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, FoldersVideos.GetProjectVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "include_subfolders", value: request.includeSubfolders, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: FoldersVideos.GetProjectVideosAlt1Error,
      },
      options,
    );
  }

  /**
   * Remove a video from a folder
   *
   * @remarks
   * This method removes a single video from the specified folder. Please note that this doesn't
   * delete the video itself.
   *
   * @returns The video was removed.
   *
   * @throws {@link FoldersVideos.RemoveVideoFromProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideoFromProject(
    request: FoldersVideos.RemoveVideoFromProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideoFromProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideoFromProjectError,
      },
      options,
    );
  }

  /**
   * Remove a video from a folder
   *
   * @remarks
   * This method removes a single video from the specified folder. Please note that this doesn't
   * delete the video itself.
   *
   * @returns The video was removed.
   *
   * @throws {@link FoldersVideos.RemoveVideoFromProjectAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideoFromProjectAlt1(
    request: FoldersVideos.RemoveVideoFromProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideoFromProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideoFromProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Remove a list of videos from a folder
   *
   * @remarks
   * This method removes multiple videos from the specified folder. The authenticated user must be
   * the owner of the folder.
   *
   * @returns The videos were removed.
   *
   * @throws {@link FoldersVideos.RemoveVideosFromProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideosFromProject(
    request: FoldersVideos.RemoveVideosFromProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideosFromProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersProjectsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideosFromProjectError,
      },
      options,
    );
  }

  /**
   * Remove a list of videos from a folder
   *
   * @remarks
   * This method removes multiple videos from the specified folder. The authenticated user must be
   * the owner of the folder.
   *
   * @returns The videos were removed.
   *
   * @throws {@link FoldersVideos.RemoveVideosFromProjectAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeVideosFromProjectAlt1(
    request: FoldersVideos.RemoveVideosFromProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideosFromProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meProjectsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideosFromProjectAlt1Error,
      },
      options,
    );
  }
}

export namespace FoldersVideos {
  export type AddVideoToProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToProjectError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AddVideoToProjectError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideoToProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoToProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<AddVideoToProjectAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    body: UsersProjectsVideosRequest1;
  };

  export class AddVideosToProjectError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AddVideosToProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    body: MeProjectsVideosRequest1;
  };

  export class AddVideosToProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AddVideosToProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectVideosRequest = {
    /** The ID of the folder. */
    projectId: number;
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
     * A comma-separated list of tags to filter on. All results must include at least one of these
     * tags. The use of this parameter triggers a search.
     */
    filterTag?: string;
    /**
     * A comma-separated list of tags to filter on. All results must include all of these tags. The
     * use of this parameter triggers a search.
     */
    filterTagAllOf?: string;
    /** A comma-separated list of tags to exclude. The use of this parameter triggers a search. */
    filterTagExclude?: string;
    /** Whether to include subfolders. */
    includeSubfolders?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * A comma-separated list of fields to query over. The default value is
     * `title,description,chapters,tags`.
     */
    queryFields?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sort order.
     *  * `duration` - Sort the results by duration.
     *  * `last_user_action_event_date` - Sort the results by the date of the last user action.
     */
    sort?: Sort37;
  };

  export class GetProjectVideosError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetProjectVideosError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectVideosAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /**
     * A comma-separated list of tags to filter on. All results must include at least one of these
     * tags. The use of this parameter triggers a search.
     */
    filterTag?: string;
    /**
     * A comma-separated list of tags to filter on. All results must include all of these tags. The
     * use of this parameter triggers a search.
     */
    filterTagAllOf?: string;
    /** A comma-separated list of tags to exclude. The use of this parameter triggers a search. */
    filterTagExclude?: string;
    /** Whether to include subfolders. */
    includeSubfolders?: boolean;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /** The search query to use to filter the results. */
    query?: string;
    /**
     * A comma-separated list of fields to query over. The default value is
     * `title,description,chapters,tags`.
     */
    queryFields?: string;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sort order.
     *  * `duration` - Sort the results by duration.
     *  * `last_user_action_event_date` - Sort the results by the date of the last user action.
     */
    sort?: Sort37;
  };

  export class GetProjectVideosAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetProjectVideosAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideoFromProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class RemoveVideoFromProjectError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideoFromProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideoFromProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class RemoveVideoFromProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideoFromProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    body: UsersProjectsVideosRequest;
  };

  export class RemoveVideosFromProjectError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideosFromProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    body: MeProjectsVideosRequest;
  };

  export class RemoveVideosFromProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<RemoveVideosFromProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
