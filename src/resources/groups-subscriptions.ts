import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import type { Servers } from "../servers.js";

export class GroupsSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  joinGroup(
    request: GroupsSubscriptions.JoinGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.JoinGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
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
        errorFactory: GroupsSubscriptions.JoinGroupError,
      },
      options,
    );
  }

  joinGroupAlt1(
    request: GroupsSubscriptions.JoinGroupAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.JoinGroupAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
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
        errorFactory: GroupsSubscriptions.JoinGroupAlt1Error,
      },
      options,
    );
  }

  leaveGroup(
    request: GroupsSubscriptions.LeaveGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.LeaveGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
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
        errorFactory: GroupsSubscriptions.LeaveGroupError,
      },
      options,
    );
  }

  leaveGroupAlt1(
    request: GroupsSubscriptions.LeaveGroupAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, GroupsSubscriptions.LeaveGroupAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
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
        errorFactory: GroupsSubscriptions.LeaveGroupAlt1Error,
      },
      options,
    );
  }
}

export namespace GroupsSubscriptions {
  export type JoinGroupRequest = {
    groupId: number;
    userId: number;
  };

  export class JoinGroupError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<JoinGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type JoinGroupAlt1Request = {
    groupId: number;
  };

  export class JoinGroupAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<JoinGroupAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LeaveGroupRequest = {
    groupId: number;
    userId: number;
  };

  export class LeaveGroupError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<LeaveGroupError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LeaveGroupAlt1Request = {
    groupId: number;
  };

  export class LeaveGroupAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"error", Error>
  > {
    static readonly errors: ErrorDecoders<LeaveGroupAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
