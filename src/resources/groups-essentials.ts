import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter1Schema, type Filter1 } from "../models/filter1.js";
import { groupConnectionSchema, type GroupConnection } from "../models/group-connection.js";
import { groupSchema, type Group } from "../models/group.js";
import { groupsRequestSchema, type GroupsRequest } from "../models/groups-request.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort13Schema, type Sort13 } from "../models/sort13.js";
import type { Servers } from "../servers.js";

export class GroupsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createGroup(
    request: GroupsEssentials.CreateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, GroupsEssentials.CreateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: groupsRequestSchema },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: GroupsEssentials.CreateGroupError,
      },
      options,
    );
  }

  deleteGroup(
    request: GroupsEssentials.DeleteGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsEssentials.DeleteGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/groups/{group_id}"),
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
        errorFactory: GroupsEssentials.DeleteGroupError,
      },
      options,
    );
  }

  getGroup(
    request: GroupsEssentials.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, GroupsEssentials.GetGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/groups/{group_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: GroupsEssentials.GetGroupError,
      },
      options,
    );
  }

  getGroups(
    request: GroupsEssentials.GetGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsEssentials.GetGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter1Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort13Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: GroupsEssentials.GetGroupsError,
      },
      options,
    );
  }
}

export namespace GroupsEssentials {
  export type CreateGroupRequest = {
    body: GroupsRequest;
  };

  export class CreateGroupError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<CreateGroupError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteGroupRequest = {
    groupId: number;
  };

  export class DeleteGroupError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupRequest = {
    groupId: number;
  };

  export class GetGroupError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetGroupError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupsRequest = {
    direction?: Direction;
    filter?: Filter1;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort13;
  };

  export class GetGroupsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetGroupsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
