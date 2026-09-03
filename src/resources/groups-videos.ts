import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter3Schema, type Filter3 } from "../models/filter3.js";
import { groupConnectionSchema, type GroupConnection } from "../models/group-connection.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort15Schema, type Sort15 } from "../models/sort15.js";
import { videoConnectionSchema, type VideoConnection } from "../models/video-connection.js";
import { videoSchema, type Video } from "../models/video.js";
import type { Servers } from "../servers.js";

export class GroupsVideos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoToGroup(
    request: GroupsVideos.AddVideoToGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, GroupsVideos.AddVideoToGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/groups/{group_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: GroupsVideos.AddVideoToGroupError,
      },
      options,
    );
  }

  deleteVideoFromGroup(
    request: GroupsVideos.DeleteVideoFromGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsVideos.DeleteVideoFromGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/groups/{group_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsVideos.DeleteVideoFromGroupError,
      },
      options,
    );
  }

  getAvailableVideoGroups(
    request: GroupsVideos.GetAvailableVideoGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsVideos.GetAvailableVideoGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/available_groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: GroupsVideos.GetAvailableVideoGroupsError,
      },
      options,
    );
  }

  getGroupVideo(
    request: GroupsVideos.GetGroupVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<Video, GroupsVideos.GetGroupVideoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/groups/{group_id}/videos/{video_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoSchema },
        errorFactory: GroupsVideos.GetGroupVideoError,
      },
      options,
    );
  }

  getGroupVideos(
    request: GroupsVideos.GetGroupVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoConnection, GroupsVideos.GetGroupVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/groups/{group_id}/videos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter3Schema)) },
          { name: "filter_embeddable", value: request.filterEmbeddable, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort15Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoConnectionSchema },
        errorFactory: GroupsVideos.GetGroupVideosError,
      },
      options,
    );
  }
}

export namespace GroupsVideos {
  export type AddVideoToGroupRequest = {
    groupId: number;
    videoId: number;
  };

  export class AddVideoToGroupError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<AddVideoToGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteVideoFromGroupRequest = {
    groupId: number;
    videoId: number;
  };

  export class DeleteVideoFromGroupError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteVideoFromGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAvailableVideoGroupsRequest = {
    videoId: number;
  };

  export class GetAvailableVideoGroupsError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAvailableVideoGroupsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupVideoRequest = {
    groupId: number;
    videoId: number;
  };

  export class GetGroupVideoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetGroupVideoError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGroupVideosRequest = {
    groupId: number;
    direction?: Direction;
    filter?: Filter3;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort15;
  };

  export class GetGroupVideosError extends ResponseError<
    Declared<"error304", undefined> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetGroupVideosError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
