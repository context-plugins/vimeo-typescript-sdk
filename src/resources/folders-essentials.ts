import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class FoldersEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createProject(
    request: FoldersEssentials.CreateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersProjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.CreateProjectError,
      },
      options,
    );
  }

  createProjectAlt1(
    request: FoldersEssentials.CreateProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.CreateProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meProjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.CreateProjectAlt1Error,
      },
      options,
    );
  }

  deleteProject(
    request: FoldersEssentials.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersEssentials.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
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

  deleteProjectAlt1(
    request: FoldersEssentials.DeleteProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersEssentials.DeleteProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
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

  editProject(
    request: FoldersEssentials.EditProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.EditProjectError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: usersProjectsRequest2Schema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.EditProjectError,
      },
      options,
    );
  }

  editProjectAlt1(
    request: FoldersEssentials.EditProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.EditProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: meProjectsRequest2Schema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.EditProjectAlt1Error,
      },
      options,
    );
  }

  getPrivateToMeFolder(
    request: FoldersEssentials.GetPrivateToMeFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.GetPrivateToMeFolderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{owner_id}/folders/private_to_me"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "owner_id", value: request.ownerId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.GetPrivateToMeFolderError,
      },
      options,
    );
  }

  getProject(
    request: FoldersEssentials.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.GetProjectError,
      },
      options,
    );
  }

  getProjectAlt1(
    request: FoldersEssentials.GetProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Project, FoldersEssentials.GetProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/projects/{project_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: FoldersEssentials.GetProjectAlt1Error,
      },
      options,
    );
  }

  getProjects(
    request: FoldersEssentials.GetProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectConnection, FoldersEssentials.GetProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort36Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectConnectionSchema },
        errorFactory: FoldersEssentials.GetProjectsError,
      },
      options,
    );
  }

  getProjectsAlt1(
    request: FoldersEssentials.GetProjectsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<ProjectConnection, FoldersEssentials.GetProjectsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/projects"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort36Schema)) },
        ],
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
    userId: number;
    body: UsersProjectsRequest;
  };

  export class CreateProjectError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateProjectAlt1Request = {
    body: MeProjectsRequest;
  };

  export class CreateProjectAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProjectRequest = {
    projectId: number;
    userId: number;
    body?: UsersProjectsRequest1;
  };

  export class DeleteProjectError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProjectAlt1Request = {
    projectId: number;
    body?: MeProjectsRequest1;
  };

  export class DeleteProjectAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteProjectAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditProjectRequest = {
    projectId: number;
    userId: number;
    body: UsersProjectsRequest2;
  };

  export class EditProjectError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<EditProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditProjectAlt1Request = {
    projectId: number;
    body: MeProjectsRequest2;
  };

  export class EditProjectAlt1Error extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"error3", Error>
    | Declared<"error4", Error>
  > {
    static readonly errors: ErrorDecoders<EditProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPrivateToMeFolderRequest = {
    ownerId: number;
  };

  export class GetPrivateToMeFolderError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetPrivateToMeFolderError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectRequest = {
    projectId: number;
    userId: number;
  };

  export class GetProjectError extends ResponseError<Declared<"error", Error> | Declared<"error2", Error>> {
    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectAlt1Request = {
    projectId: number;
  };

  export class GetProjectAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetProjectAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectsRequest = {
    userId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort36;
  };

  export class GetProjectsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetProjectsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectsAlt1Request = {
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort36;
  };

  export class GetProjectsAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetProjectsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
