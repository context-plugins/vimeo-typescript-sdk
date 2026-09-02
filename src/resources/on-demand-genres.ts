import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter24Schema, type Filter24 } from "../models/filter24.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  onDemandGenreConnectionSchema,
  type OnDemandGenreConnection,
} from "../models/on-demand-genre-connection.js";
import { onDemandGenreSchema, type OnDemandGenre } from "../models/on-demand-genre.js";
import {
  onDemandPageConnectionSchema,
  type OnDemandPageConnection,
} from "../models/on-demand-page-connection.js";
import { onDemandPageSchema, type OnDemandPage } from "../models/on-demand-page.js";
import { sort41Schema, type Sort41 } from "../models/sort41.js";
import type { Servers } from "../servers.js";

export class OnDemandGenres {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVodGenre(
    request: OnDemandGenres.AddVodGenreRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenre, OnDemandGenres.AddVodGenreError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreSchema },
        errorFactory: OnDemandGenres.AddVodGenreError,
      },
      options,
    );
  }

  deleteVodGenre(
    request: OnDemandGenres.DeleteVodGenreRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandGenres.DeleteVodGenreError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandGenres.DeleteVodGenreError,
      },
      options,
    );
  }

  getGenreVod(
    request: OnDemandGenres.GetGenreVodRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPage, OnDemandGenres.GetGenreVodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/genres/{genre_id}/pages/{ondemand_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageSchema },
        errorFactory: OnDemandGenres.GetGenreVodError,
      },
      options,
    );
  }

  getGenreVods(
    request: OnDemandGenres.GetGenreVodsRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandPageConnection, OnDemandGenres.GetGenreVodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/genres/{genre_id}/pages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "genre_id", value: request.genreId, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter24Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort41Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandPageConnectionSchema },
        errorFactory: OnDemandGenres.GetGenreVodsError,
      },
      options,
    );
  }

  getVodGenre(
    request: OnDemandGenres.GetVodGenreRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenre, OnDemandGenres.GetVodGenreError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "genre_id", value: request.genreId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreSchema },
        errorFactory: OnDemandGenres.GetVodGenreError,
      },
      options,
    );
  }

  getVodGenreByOndemandId(
    request: OnDemandGenres.GetVodGenreByOndemandIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenre, OnDemandGenres.GetVodGenreByOndemandIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/genres/{genre_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "genre_id", value: request.genreId, schema: s.string() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreSchema },
        errorFactory: OnDemandGenres.GetVodGenreByOndemandIdError,
      },
      options,
    );
  }

  getVodGenres(
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenreConnection, OnDemandGenres.GetVodGenresError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/genres"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreConnectionSchema },
        errorFactory: OnDemandGenres.GetVodGenresError,
      },
      options,
    );
  }

  getVodGenresByOndemandId(
    request: OnDemandGenres.GetVodGenresByOndemandIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OnDemandGenreConnection, OnDemandGenres.GetVodGenresByOndemandIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/genres"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: onDemandGenreConnectionSchema },
        errorFactory: OnDemandGenres.GetVodGenresByOndemandIdError,
      },
      options,
    );
  }
}

export namespace OnDemandGenres {
  export type AddVodGenreRequest = {
    genreId: string;
    ondemandId: number;
  };

  export class AddVodGenreError extends ResponseError<
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<AddVodGenreError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodGenreRequest = {
    genreId: string;
    ondemandId: number;
  };

  export class DeleteVodGenreError extends ResponseError<
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVodGenreError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGenreVodRequest = {
    genreId: string;
    ondemandId: number;
  };

  export class GetGenreVodError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetGenreVodError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetGenreVodsRequest = {
    genreId: string;
    direction?: Direction;
    filter?: Filter24;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort41;
  };

  export class GetGenreVodsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetGenreVodsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVodGenreRequest = {
    genreId: string;
  };

  export class GetVodGenreError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodGenreError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodGenreByOndemandIdRequest = {
    genreId: string;
    ondemandId: number;
  };

  export class GetVodGenreByOndemandIdError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodGenreByOndemandIdError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export class GetVodGenresError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetVodGenresError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVodGenresByOndemandIdRequest = {
    ondemandId: number;
  };

  export class GetVodGenresByOndemandIdError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodGenresByOndemandIdError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
