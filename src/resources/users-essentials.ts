import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { meRequestSchema, type MeRequest } from "../models/me-request.js";
import { userSchema, type User } from "../models/user.js";
import { usersRequestSchema, type UsersRequest } from "../models/users-request.js";
import type { Servers } from "../servers.js";

export class UsersEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  editUser(
    request: UsersEssentials.EditUserRequest,
    options?: RequestOptions,
  ): ApiPromise<User, UsersEssentials.EditUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => usersRequestSchema)) },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersEssentials.EditUserError,
      },
      options,
    );
  }

  editUserAlt1(
    request: UsersEssentials.EditUserAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<User, UsersEssentials.EditUserAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => meRequestSchema)) },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersEssentials.EditUserAlt1Error,
      },
      options,
    );
  }

  getUser(
    request: UsersEssentials.GetUserRequest,
    options?: RequestOptions,
  ): ApiPromise<User, ResponseError> {
    return this.#rawClient.execute<User, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserAlt1(options?: RequestOptions): ApiPromise<User, ResponseError> {
    return this.#rawClient.execute<User, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace UsersEssentials {
  export type EditUserRequest = {
    userId: number;
    body?: UsersRequest;
  };

  export class EditUserError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<EditUserError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditUserAlt1Request = {
    body?: MeRequest;
  };

  export class EditUserAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<EditUserAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetUserRequest = {
    userId: number;
  };
}
