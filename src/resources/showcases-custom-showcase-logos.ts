import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  usersAlbumsLogosLogoIdRequestSchema,
  type UsersAlbumsLogosLogoIdRequest,
} from "../models/users-albums-logos-logo-id-request.js";
import type { Servers } from "../servers.js";

export class ShowcasesCustomShowcaseLogos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.CreateShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/logos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseLogos.CreateShowcaseLogoError,
      },
      options,
    );
  }

  deleteShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/logos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "logo_id", value: request.logoId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesCustomShowcaseLogos.DeleteShowcaseLogoError,
      },
      options,
    );
  }

  getShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.GetShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.GetShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/logos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "logo_id", value: request.logoId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseLogos.GetShowcaseLogoError,
      },
      options,
    );
  }

  getShowcaseLogos(
    request: ShowcasesCustomShowcaseLogos.GetShowcaseLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ShowcasesCustomShowcaseLogos.GetShowcaseLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/logos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ShowcasesCustomShowcaseLogos.GetShowcaseLogosError,
      },
      options,
    );
  }

  replaceShowcaseLogo(
    request: ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/logos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "logo_id", value: request.logoId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsLogosLogoIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ShowcasesCustomShowcaseLogos.ReplaceShowcaseLogoError,
      },
      options,
    );
  }
}

export namespace ShowcasesCustomShowcaseLogos {
  export type CreateShowcaseLogoRequest = {
    albumId: number;
    userId: number;
  };

  export class CreateShowcaseLogoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseLogoRequest = {
    albumId: number;
    logoId: number;
    userId: number;
  };

  export class DeleteShowcaseLogoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseLogoRequest = {
    albumId: number;
    logoId: number;
    userId: number;
  };

  export class GetShowcaseLogoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseLogosRequest = {
    albumId: number;
    userId: number;
    page?: number;
    perPage?: number;
  };

  export class GetShowcaseLogosError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseLogosError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type ReplaceShowcaseLogoRequest = {
    albumId: number;
    logoId: number;
    userId: number;
    body?: UsersAlbumsLogosLogoIdRequest;
  };

  export class ReplaceShowcaseLogoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<ReplaceShowcaseLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
