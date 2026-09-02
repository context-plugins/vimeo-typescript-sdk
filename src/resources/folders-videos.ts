import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class FoldersVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToProject(
    request: FoldersVideos.AddVideoToProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideoToProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideoToProjectError,
      },
      options,
    );
  }

  addVideoToProjectAlt1(
    request: FoldersVideos.AddVideoToProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideoToProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideoToProjectAlt1Error,
      },
      options,
    );
  }

  addVideosToProject(
    request: FoldersVideos.AddVideosToProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideosToProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: usersProjectsVideosRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideosToProjectError,
      },
      options,
    );
  }

  addVideosToProjectAlt1(
    request: FoldersVideos.AddVideosToProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.AddVideosToProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/me/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: meProjectsVideosRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.AddVideosToProjectAlt1Error,
      },
      options,
    );
  }

  getProjectVideos(
    request: FoldersVideos.GetProjectVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, FoldersVideos.GetProjectVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "include_subfolders", value: request.includeSubfolders, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: FoldersVideos.GetProjectVideosError,
      },
      options,
    );
  }

  getProjectVideosAlt1(
    request: FoldersVideos.GetProjectVideosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, FoldersVideos.GetProjectVideosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_tag", value: request.filterTag, schema: s.optional(s.string()) },
          { name: "filter_tag_all_of", value: request.filterTagAllOf, schema: s.optional(s.string()) },
          { name: "filter_tag_exclude", value: request.filterTagExclude, schema: s.optional(s.string()) },
          { name: "include_subfolders", value: request.includeSubfolders, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: FoldersVideos.GetProjectVideosAlt1Error,
      },
      options,
    );
  }

  removeVideoFromProject(
    request: FoldersVideos.RemoveVideoFromProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideoFromProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideoFromProjectError,
      },
      options,
    );
  }

  removeVideoFromProjectAlt1(
    request: FoldersVideos.RemoveVideoFromProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideoFromProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/projects/{project_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideoFromProjectAlt1Error,
      },
      options,
    );
  }

  removeVideosFromProject(
    request: FoldersVideos.RemoveVideosFromProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideosFromProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: usersProjectsVideosRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersVideos.RemoveVideosFromProjectError,
      },
      options,
    );
  }

  removeVideosFromProjectAlt1(
    request: FoldersVideos.RemoveVideosFromProjectAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersVideos.RemoveVideosFromProjectAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/projects/{project_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
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
    projectId: number;
    userId: number;
    videoId: number;
  };

  export class AddVideoToProjectError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<AddVideoToProjectError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideoToProjectAlt1Request = {
    projectId: number;
    videoId: number;
  };

  export class AddVideoToProjectAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<AddVideoToProjectAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToProjectRequest = {
    projectId: number;
    userId: number;
    body: UsersProjectsVideosRequest1;
  };

  export class AddVideosToProjectError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AddVideosToProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVideosToProjectAlt1Request = {
    projectId: number;
    body: MeProjectsVideosRequest1;
  };

  export class AddVideosToProjectAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AddVideosToProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectVideosRequest = {
    projectId: number;
    userId: number;
    direction?: Direction;
    filterTag?: string;
    filterTagAllOf?: string;
    filterTagExclude?: string;
    includeSubfolders?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    queryFields?: string;
    sort?: Sort37;
  };

  export class GetProjectVideosError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetProjectVideosError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectVideosAlt1Request = {
    projectId: number;
    direction?: Direction;
    filterTag?: string;
    filterTagAllOf?: string;
    filterTagExclude?: string;
    includeSubfolders?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    queryFields?: string;
    sort?: Sort37;
  };

  export class GetProjectVideosAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetProjectVideosAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideoFromProjectRequest = {
    projectId: number;
    userId: number;
    videoId: number;
  };

  export class RemoveVideoFromProjectError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideoFromProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideoFromProjectAlt1Request = {
    projectId: number;
    videoId: number;
  };

  export class RemoveVideoFromProjectAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideoFromProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromProjectRequest = {
    projectId: number;
    userId: number;
    body: UsersProjectsVideosRequest;
  };

  export class RemoveVideosFromProjectError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideosFromProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveVideosFromProjectAlt1Request = {
    projectId: number;
    body: MeProjectsVideosRequest;
  };

  export class RemoveVideosFromProjectAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<RemoveVideosFromProjectAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
