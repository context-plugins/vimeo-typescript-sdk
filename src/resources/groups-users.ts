import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * Use these methods to manage group members.
 */
export class GroupsUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if a user has joined a group
   *
   * @remarks
   * This method determines whether the authenticated user belongs to the specified group.
   *
   * @returns The user belongs to the group.
   *
   * @throws {@link GroupsUsers.CheckIfUserJoinedGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserJoinedGroup(
    request: GroupsUsers.CheckIfUserJoinedGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsUsers.CheckIfUserJoinedGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/groups/{group_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "group_id", value: request.groupId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsUsers.CheckIfUserJoinedGroupError,
      },
      options,
    );
  }

  /**
   * Check if a user has joined a group
   *
   * @remarks
   * This method determines whether the authenticated user belongs to the specified group.
   *
   * @returns The user belongs to the group.
   *
   * @throws {@link GroupsUsers.CheckIfUserJoinedGroupAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserJoinedGroupAlt1(
    request: GroupsUsers.CheckIfUserJoinedGroupAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsUsers.CheckIfUserJoinedGroupAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/groups/{group_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsUsers.CheckIfUserJoinedGroupAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the members of a group
   *
   * @remarks
   * This method returns every user who belongs to the specified group.
   *
   * @returns The members were returned.
   *
   * @throws {@link GroupsUsers.GetGroupMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupMembers(
    request: GroupsUsers.GetGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<UserConnection, GroupsUsers.GetGroupMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_id}/users"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter2Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userConnectionSchema },
        errorFactory: GroupsUsers.GetGroupMembersError,
      },
      options,
    );
  }

  /**
   * Get all the groups that the user has joined
   *
   * @remarks
   * This method returns every group to which the authenticated user belongs.
   *
   * @returns The groups were returned.
   *
   * @throws {@link GroupsUsers.GetUserGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserGroups(
    request: GroupsUsers.GetUserGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsUsers.GetUserGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter12Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort5Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupConnectionSchema },
        errorFactory: GroupsUsers.GetUserGroupsError,
      },
      options,
    );
  }

  /**
   * Get all the groups that the user has joined
   *
   * @remarks
   * This method returns every group to which the authenticated user belongs.
   *
   * @returns The groups were returned.
   *
   * @throws {@link GroupsUsers.GetUserGroupsAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserGroupsAlt1(
    request: GroupsUsers.GetUserGroupsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsUsers.GetUserGroupsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter12Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort5Schema)) },
        ],
        headers: [],
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
    /** The ID of the group. */
    groupId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class CheckIfUserJoinedGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserJoinedGroupError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CheckIfUserJoinedGroupAlt1Request = {
    /** The ID of the group. */
    groupId: number;
  };

  export class CheckIfUserJoinedGroupAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CheckIfUserJoinedGroupAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGroupMembersRequest = {
    /** The ID of the group. */
    groupId: number;
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
     *  * `moderators` - Return group moderators.
     */
    filter?: Filter2;
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
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     */
    sort?: Sort8;
  };

  export class GetGroupMembersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetGroupMembersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUserGroupsRequest = {
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
     * The attribute by which to filter the results.
     *
     * Option descriptions:
     *  * `moderated` - Return moderated groups.
     */
    filter?: Filter12;
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
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     *  * `members` - Sort the results by number of members.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort5;
  };

  export class GetUserGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetUserGroupsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUserGroupsAlt1Request = {
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
     *  * `moderated` - Return moderated groups.
     */
    filter?: Filter12;
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
     *  * `alphabetical` - Sort the results alphabetically.
     *  * `date` - Sort the results by creation date.
     *  * `members` - Sort the results by number of members.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort5;
  };

  export class GetUserGroupsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetUserGroupsAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
