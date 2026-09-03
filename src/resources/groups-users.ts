import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter12Schema, type Filter12 } from "../models/filter12.js";
import { filter2Schema, type Filter2 } from "../models/filter2.js";
import { groupConnectionSchema, type GroupConnection } from "../models/group-connection.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort5Schema, type Sort5 } from "../models/sort5.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import { userConnectionSchema, type UserConnection } from "../models/user-connection.js";
import type { Servers } from "../servers.js";

export class GroupsUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  checkIfUserJoinedGroup(
    request: GroupsUsers.CheckIfUserJoinedGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsUsers.CheckIfUserJoinedGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/groups/{group_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsUsers.CheckIfUserJoinedGroupError,
      },
      options,
    );
  }

  checkIfUserJoinedGroupAlt1(
    request: GroupsUsers.CheckIfUserJoinedGroupAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsUsers.CheckIfUserJoinedGroupAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/groups/{group_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsUsers.CheckIfUserJoinedGroupAlt1Error,
      },
      options,
    );
  }

  getGroupMembers(
    request: GroupsUsers.GetGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, GroupsUsers.GetGroupMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/groups/{group_id}/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter2Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: GroupsUsers.GetGroupMembersError,
      },
      options,
    );
  }

  getUserGroups(
    request: GroupsUsers.GetUserGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsUsers.GetUserGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter12Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort5Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: GroupsUsers.GetUserGroupsError,
      },
      options,
    );
  }

  getUserGroupsAlt1(
    request: GroupsUsers.GetUserGroupsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsUsers.GetUserGroupsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter12Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort5Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: GroupsUsers.GetUserGroupsAlt1Error,
      },
      options,
    );
  }
}

export namespace GroupsUsers {
  export type CheckIfUserJoinedGroupRequest = {
    groupId: number;
    userId: number;
  };

  export class CheckIfUserJoinedGroupError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserJoinedGroupError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserJoinedGroupAlt1Request = {
    groupId: number;
  };

  export class CheckIfUserJoinedGroupAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CheckIfUserJoinedGroupAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGroupMembersRequest = {
    groupId: number;
    direction?: Direction;
    filter?: Filter2;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export class GetGroupMembersError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetGroupMembersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUserGroupsRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter12;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort5;
  };

  export class GetUserGroupsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetUserGroupsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUserGroupsAlt1Request = {
    direction?: Direction;
    filter?: Filter12;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort5;
  };

  export class GetUserGroupsAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetUserGroupsAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
