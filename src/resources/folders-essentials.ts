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
import { meProjectsRequestSchema, type MeProjectsRequest } from "../models/me-projects-request.js";
import { meProjectsRequest1Schema, type MeProjectsRequest1 } from "../models/me-projects-request1.js";
import { meProjectsRequest2Schema, type MeProjectsRequest2 } from "../models/me-projects-request2.js";
import { projectConnectionSchema, type ProjectConnection } from "../models/project-connection.js";
import { projectSchema, type Project } from "../models/project.js";
import { sort36Schema, type Sort36 } from "../models/sort36.js";
import { usersProjectsRequestSchema, type UsersProjectsRequest } from "../models/users-projects-request.js";
import {
  usersProjectsRequest1Schema,
  type UsersProjectsRequest1,
} from "../models/users-projects-request1.js";
import {
  usersProjectsRequest2Schema,
  type UsersProjectsRequest2,
} from "../models/users-projects-request2.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with folders.
 */
export class FoldersEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a folder
   *
   * @remarks
   * This method creates a new folder for the authenticated user. By default, this method creates a
   * top-level folder. To create a subfolder — that is, to place the new folder inside an existing
   * folder — specify the parent folder by URI with the **parent_folder_uri** parameter in the body
   * of the request.
   *
   * @returns The folder was created.
   *
   * @throws {@link FoldersEssentials.CreateProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: FoldersEssentials.CreateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: usersProjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Create a folder
   *
   * @remarks
   * This method creates a new folder for the authenticated user. By default, this method creates a
   * top-level folder. To create a subfolder — that is, to place the new folder inside an existing
   * folder — specify the parent folder by URI with the **parent_folder_uri** parameter in the body
   * of the request.
   *
   * @returns The folder was created.
   *
   * @throws {@link FoldersEssentials.CreateProjectAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectAlt1(
    request: FoldersEssentials.CreateProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.CreateProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meProjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.CreateProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete a folder
   *
   * @remarks
   * This method deletes the specified folder and optionally also the videos that it contains. The
   * authenticated user must be the owner of the folder.
   *
   * @returns The folder was deleted.
   *
   * @throws {@link FoldersEssentials.DeleteProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject(
    request: FoldersEssentials.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersEssentials.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersProjectsRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersEssentials.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Delete a folder
   *
   * @remarks
   * This method deletes the specified folder and optionally also the videos that it contains. The
   * authenticated user must be the owner of the folder.
   *
   * @returns The folder was deleted.
   *
   * @throws {@link FoldersEssentials.DeleteProjectAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProjectAlt1(
    request: FoldersEssentials.DeleteProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersEssentials.DeleteProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meProjectsRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersEssentials.DeleteProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Edit a folder
   *
   * @remarks
   * This method edits the specified folder. The authenticated user must be the owner of the folder.
   *
   * @returns The folder was edited.
   *
   * @throws {@link FoldersEssentials.EditProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editProject(
    request: FoldersEssentials.EditProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.EditProjectError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}"),
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
        body: { kind: "json", value: request.body, schema: usersProjectsRequest2Schema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.EditProjectError,
      },
      options,
    );
  }

  /**
   * Edit a folder
   *
   * @remarks
   * This method edits the specified folder. The authenticated user must be the owner of the folder.
   *
   * @returns The folder was edited.
   *
   * @throws {@link FoldersEssentials.EditProjectAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editProjectAlt1(
    request: FoldersEssentials.EditProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.EditProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: meProjectsRequest2Schema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.EditProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a user's private-to-me folder
   *
   * @remarks
   * This method returns the specified private-to-me folder.
   *
   * @returns The folder was returned.
   *
   * @throws {@link FoldersEssentials.GetPrivateToMeFolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPrivateToMeFolder(
    request: FoldersEssentials.GetPrivateToMeFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.GetPrivateToMeFolderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{owner_id}/folders/private_to_me"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "owner_id", value: request.ownerId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.GetPrivateToMeFolderError,
      },
      options,
    );
  }

  /**
   * Get a specific folder
   *
   * @remarks
   * This method returns a single folder belonging to the authenticated user.
   *
   * @returns The folder was returned.
   *
   * @throws {@link FoldersEssentials.GetProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: FoldersEssentials.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/projects/{project_id}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.GetProjectError,
      },
      options,
    );
  }

  /**
   * Get a specific folder
   *
   * @remarks
   * This method returns a single folder belonging to the authenticated user.
   *
   * @returns The folder was returned.
   *
   * @throws {@link FoldersEssentials.GetProjectAlt1Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectAlt1(
    request: FoldersEssentials.GetProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.GetProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.GetProjectAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the folders that belong to the user
   *
   * @remarks
   * This method returns all the folders belonging to the authenticated user.
   *
   * @returns The folders were returned.
   *
   * @throws {@link FoldersEssentials.GetProjectsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjects(
    request: FoldersEssentials.GetProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectConnection, FoldersEssentials.GetProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort36Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectConnectionSchema },
        errorFactory: FoldersEssentials.GetProjectsError,
      },
      options,
    );
  }

  /**
   * Get all the folders that belong to the user
   *
   * @remarks
   * This method returns all the folders belonging to the authenticated user.
   *
   * @returns The folders were returned.
   *
   * @throws {@link FoldersEssentials.GetProjectsAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsAlt1(
    request: FoldersEssentials.GetProjectsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<ProjectConnection, FoldersEssentials.GetProjectsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort36Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectConnectionSchema },
        errorFactory: FoldersEssentials.GetProjectsAlt1Error,
      },
      options,
    );
  }
}

export namespace FoldersEssentials {
  export type CreateProjectRequest = {
    /** The ID of the user. */
    userId: number;
    body: UsersProjectsRequest;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateProjectAlt1Request = {
    body: MeProjectsRequest;
  };

  export class CreateProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<CreateProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersProjectsRequest1;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    body?: MeProjectsRequest1;
  };

  export class DeleteProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<DeleteProjectAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
    body: UsersProjectsRequest2;
  };

  export class EditProjectError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<EditProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
    body: MeProjectsRequest2;
  };

  export class EditProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
    >;

    static readonly errors: ErrorDecoders<EditProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPrivateToMeFolderRequest = {
    /** The ID of the owner. */
    ownerId: number;
  };

  export class GetPrivateToMeFolderError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetPrivateToMeFolderError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectRequest = {
    /** The ID of the folder. */
    projectId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectAlt1Request = {
    /** The ID of the folder. */
    projectId: number;
  };

  export class GetProjectAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetProjectAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectsRequest = {
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
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sort order.
     *  * `modified_time` - Sort the results by last modification.
     *  * `name` - Sort the results by name.
     *  * `pinned_on` - Sort the results by pinned timestamp.
     */
    sort?: Sort36;
  };

  export class GetProjectsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetProjectsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectsAlt1Request = {
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
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
     *  * `date` - Sort the results by date.
     *  * `default` - Use the default sort order.
     *  * `modified_time` - Sort the results by last modification.
     *  * `name` - Sort the results by name.
     *  * `pinned_on` - Sort the results by pinned timestamp.
     */
    sort?: Sort36;
  };

  export class GetProjectsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetProjectsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
