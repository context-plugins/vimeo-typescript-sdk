import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage group membership.
 */
export class GroupsSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add the user to a group
   *
   * @remarks
   * This method adds the authenticated user to the specified group.
   *
   * @returns The user joined the group.
   *
   * @throws {@link GroupsSubscriptions.JoinGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  joinGroup(
    request: GroupsSubscriptions.JoinGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.JoinGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
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
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsSubscriptions.JoinGroupError,
      },
      options,
    );
  }

  /**
   * Add the user to a group
   *
   * @remarks
   * This method adds the authenticated user to the specified group.
   *
   * @returns The user joined the group.
   *
   * @throws {@link GroupsSubscriptions.JoinGroupAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  joinGroupAlt1(
    request: GroupsSubscriptions.JoinGroupAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.JoinGroupAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/groups/{group_id}"),
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
        errorFactory: GroupsSubscriptions.JoinGroupAlt1Error,
      },
      options,
    );
  }

  /**
   * Remove the user from a group
   *
   * @remarks
   * This method removes the authenticated user from the specified group. The authenticated user
   * can't be the owner of the group; assign a new owner through a PATCH request first.
   *
   * @returns The user was removed from the group.
   *
   * @throws {@link GroupsSubscriptions.LeaveGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  leaveGroup(
    request: GroupsSubscriptions.LeaveGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.LeaveGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
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
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GroupsSubscriptions.LeaveGroupError,
      },
      options,
    );
  }

  /**
   * Remove the user from a group
   *
   * @remarks
   * This method removes the authenticated user from the specified group. The authenticated user
   * can't be the owner of the group; assign a new owner through a PATCH request first.
   *
   * @returns The user was removed from the group.
   *
   * @throws {@link GroupsSubscriptions.LeaveGroupAlt1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  leaveGroupAlt1(
    request: GroupsSubscriptions.LeaveGroupAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.LeaveGroupAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/groups/{group_id}"),
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
        errorFactory: GroupsSubscriptions.LeaveGroupAlt1Error,
      },
      options,
    );
  }
}

export namespace GroupsSubscriptions {
  export type JoinGroupRequest = {
    /** The ID of the group. */
    groupId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class JoinGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<JoinGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type JoinGroupAlt1Request = {
    /** The ID of the group. */
    groupId: number;
  };

  export class JoinGroupAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<JoinGroupAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LeaveGroupRequest = {
    /** The ID of the group. */
    groupId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class LeaveGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<LeaveGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LeaveGroupAlt1Request = {
    /** The ID of the group. */
    groupId: number;
  };

  export class LeaveGroupAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError> | Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<LeaveGroupAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
