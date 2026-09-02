import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

export class EmbedPresetsCustomLogos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCustomLogo(
    request: EmbedPresetsCustomLogos.CreateCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.CreateCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.CreateCustomLogoError,
      },
      options,
    );
  }

  createCustomLogoAlt1(
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.CreateCustomLogoAlt1Error,
      },
      options,
    );
  }

  deleteCustomLogo(
    request: EmbedPresetsCustomLogos.DeleteCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsCustomLogos.DeleteCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "logo_id", value: request.logoId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsCustomLogos.DeleteCustomLogoError,
      },
      options,
    );
  }

  deleteCustomLogoAlt1(
    request: EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "logo_id", value: request.logoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EmbedPresetsCustomLogos.DeleteCustomLogoAlt1Error,
      },
      options,
    );
  }

  getCustomLogo(
    request: EmbedPresetsCustomLogos.GetCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.GetCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "logo_id", value: request.logoId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogoError,
      },
      options,
    );
  }

  getCustomLogoAlt1(
    request: EmbedPresetsCustomLogos.GetCustomLogoAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsCustomLogos.GetCustomLogoAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/customlogos/{logo_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "logo_id", value: request.logoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogoAlt1Error,
      },
      options,
    );
  }

  getCustomLogos(
    request: EmbedPresetsCustomLogos.GetCustomLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sizes", value: request.sizes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogosError,
      },
      options,
    );
  }

  getCustomLogosAlt1(
    request: EmbedPresetsCustomLogos.GetCustomLogosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, EmbedPresetsCustomLogos.GetCustomLogosAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/customlogos"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sizes", value: request.sizes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: EmbedPresetsCustomLogos.GetCustomLogosAlt1Error,
      },
      options,
    );
  }
}

export namespace EmbedPresetsCustomLogos {
  export type CreateCustomLogoRequest = {
    userId: number;
  };

  export class CreateCustomLogoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CreateCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export class CreateCustomLogoAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CreateCustomLogoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteCustomLogoRequest = {
    logoId: number;
    userId: number;
  };

  export class DeleteCustomLogoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteCustomLogoAlt1Request = {
    logoId: number;
  };

  export class DeleteCustomLogoAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteCustomLogoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogoRequest = {
    logoId: number;
    userId: number;
  };

  export class GetCustomLogoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogoAlt1Request = {
    logoId: number;
  };

  export class GetCustomLogoAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCustomLogoAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogosRequest = {
    userId: number;
    page?: number;
    perPage?: number;
    sizes?: string;
  };

  export class GetCustomLogosError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCustomLogosError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetCustomLogosAlt1Request = {
    page?: number;
    perPage?: number;
    sizes?: string;
  };

  export class GetCustomLogosAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetCustomLogosAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
