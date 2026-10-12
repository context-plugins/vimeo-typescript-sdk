import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { meRequestSchema, type MeRequest } from "../models/me-request.js";
import { userSchema, type User } from "../models/user.js";
import { usersRequestSchema, type UsersRequest } from "../models/users-request.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with users.
 */
export class UsersEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Edit the user's account
   *
   * @remarks
   * This method edits the Vimeo account of the authenticated user.
   *
   * @returns The user's Vimeo account was edited.
   *
   * @throws {@link UsersEssentials.EditUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editUser(
    request: UsersEssentials.EditUserRequest,
    options?: RequestOptions,
  ): ApiPromise<User, UsersEssentials.EditUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => usersRequestSchema)) },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersEssentials.EditUserError,
      },
      options,
    );
  }

  /**
   * Edit the user's account
   *
   * @remarks
   * This method edits the Vimeo account of the authenticated user.
   *
   * @returns The user's Vimeo account was edited.
   *
   * @throws {@link UsersEssentials.EditUserAlt1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editUserAlt1(
    request: UsersEssentials.EditUserAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<User, UsersEssentials.EditUserAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => meRequestSchema)) },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersEssentials.EditUserAlt1Error,
      },
      options,
    );
  }

  /**
   * Get the user
   *
   * @remarks
   * This method returns the authenticated user.
   *
   * @returns The user was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(request: UsersEssentials.GetUserRequest, options?: RequestOptions): ApiPromise<User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the user
   *
   * @remarks
   * This method returns the authenticated user.
   *
   * @returns The user was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserAlt1(options?: RequestOptions): ApiPromise<User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace UsersEssentials {
  export type EditUserRequest = {
    /** The ID of the user. */
    userId: number;
    body?: UsersRequest;
  };

  export class EditUserError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<EditUserError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditUserAlt1Request = {
    body?: MeRequest;
  };

  export class EditUserAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<EditUserAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUserRequest = {
    /** The ID of the user. */
    userId: number;
  };
}
