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
import { filter1Schema, type Filter1 } from "../models/filter1.js";
import { groupConnectionSchema, type GroupConnection } from "../models/group-connection.js";
import { groupSchema, type Group } from "../models/group.js";
import { groupsRequestSchema, type GroupsRequest } from "../models/groups-request.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort13Schema, type Sort13 } from "../models/sort13.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with groups.
 */
export class GroupsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a group
   *
   * @remarks
   * This method creates a new group.
   *
   * @returns The group was created.
   *
   * @throws {@link GroupsEssentials.CreateGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGroup(
    request: GroupsEssentials.CreateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, GroupsEssentials.CreateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: groupsRequestSchema },
      },
      {
        success: { kind: "json", schema: groupSchema },
        errorFactory: GroupsEssentials.CreateGroupError,
      },
      options,
    );
  }

  /**
   * Delete a group
   *
   * @remarks
   * This method deletes the specified group. The authenticated user must be the owner of the group.
   *
   * @returns The group was deleted.
   *
   * @throws {@link GroupsEssentials.DeleteGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGroup(
    request: GroupsEssentials.DeleteGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsEssentials.DeleteGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/groups/{group_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "group_id", value: request.groupId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsEssentials.DeleteGroupError,
      },
      options,
    );
  }

  /**
   * Get a specific group
   *
   * @remarks
   * This method returns the specified group.
   *
   * @returns The group was returned.
   *
   * @throws {@link GroupsEssentials.GetGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroup(
    request: GroupsEssentials.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, GroupsEssentials.GetGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{group_id}"),
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
        success: { kind: "json", schema: groupSchema },
        errorFactory: GroupsEssentials.GetGroupError,
      },
      options,
    );
  }

  /**
   * Get all groups
   *
   * @remarks
   * This method returns every available group.
   *
   * @returns The groups were returned.
   *
   * @throws {@link GroupsEssentials.GetGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroups(
    request: GroupsEssentials.GetGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupConnection, GroupsEssentials.GetGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter1Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort13Schema)) },
        ],
        headers: [],
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

  export class CreateGroupError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError> | Declared<"error", Error>
    >;

    static readonly errors: ErrorDecoders<CreateGroupError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteGroupRequest = {
    /** The ID of the group. */
    groupId: number;
  };

  export class DeleteGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<DeleteGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupRequest = {
    /** The ID of the group. */
    groupId: number;
  };

  export class GetGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetGroupError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetGroupsRequest = {
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
     *  * `featured` - Return featured groups.
     */
    filter?: Filter1;
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
     *  * `followers` - Sort the results by number of followers.
     *  * `relevant` - Sort the results by relevance. This option is available for search queries
     *    only.
     *  * `videos` - Sort the results by number of videos.
     */
    sort?: Sort13;
  };

  export class GetGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetGroupsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
