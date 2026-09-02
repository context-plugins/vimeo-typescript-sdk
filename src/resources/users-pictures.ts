import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { mePicturesRequestSchema, type MePicturesRequest } from "../models/me-pictures-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import { usersPicturesRequestSchema, type UsersPicturesRequest } from "../models/users-pictures-request.js";
import type { Servers } from "../servers.js";

export class UsersPictures {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPicture(
    request: UsersPictures.CreatePictureRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/pictures"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createPictureAlt1(options?: RequestOptions): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/me/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePicture(
    request: UsersPictures.DeletePictureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portraitset_id", value: request.portraitsetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePictureAlt1(
    request: UsersPictures.DeletePictureAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/me/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portraitset_id", value: request.portraitsetId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  editPicture(
    request: UsersPictures.EditPictureRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portraitset_id", value: request.portraitsetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  editPictureAlt1(
    request: UsersPictures.EditPictureAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.default("/me/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portraitset_id", value: request.portraitsetId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => mePicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPicture(
    request: UsersPictures.GetPictureRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portraitset_id", value: request.portraitsetId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPictureAlt1(
    request: UsersPictures.GetPictureAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/pictures/{portraitset_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portraitset_id", value: request.portraitsetId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPictures(
    request: UsersPictures.GetPicturesRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ResponseError> {
    return this.#rawClient.execute<PictureConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPicturesAlt1(
    request: UsersPictures.GetPicturesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, ResponseError> {
    return this.#rawClient.execute<PictureConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace UsersPictures {
  export type CreatePictureRequest = {
    userId: number;
  };

  export type DeletePictureRequest = {
    portraitsetId: number;
    userId: number;
  };

  export type DeletePictureAlt1Request = {
    portraitsetId: number;
  };

  export type EditPictureRequest = {
    portraitsetId: number;
    userId: number;
    body?: UsersPicturesRequest;
  };

  export type EditPictureAlt1Request = {
    portraitsetId: number;
    body?: MePicturesRequest;
  };

  export type GetPictureRequest = {
    portraitsetId: number;
    userId: number;
  };

  export type GetPictureAlt1Request = {
    portraitsetId: number;
  };

  export type GetPicturesRequest = {
    userId: number;
    page?: number;
    perPage?: number;
  };

  export type GetPicturesAlt1Request = {
    page?: number;
    perPage?: number;
  };
}
