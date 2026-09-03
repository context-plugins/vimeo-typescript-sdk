import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  ondemandPagesPicturesRequestSchema,
  type OndemandPagesPicturesRequest,
} from "../models/ondemand-pages-pictures-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

export class OnDemandPosters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVodPoster(
    request: OnDemandPosters.AddVodPosterRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandPosters.AddVodPosterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: OnDemandPosters.AddVodPosterError,
      },
      options,
    );
  }

  editVodPoster(
    request: OnDemandPosters.EditVodPosterRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures/{poster_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "poster_id", value: request.posterId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ondemandPagesPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVodPoster(
    request: OnDemandPosters.GetVodPosterRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures/{poster_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
          { name: "poster_id", value: request.posterId, schema: s.number() },
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

  getVodPosters(
    request: OnDemandPosters.GetVodPostersRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, OnDemandPosters.GetVodPostersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: OnDemandPosters.GetVodPostersError,
      },
      options,
    );
  }
}

export namespace OnDemandPosters {
  export type AddVodPosterRequest = {
    ondemandId: number;
  };

  export class AddVodPosterError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<AddVodPosterError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVodPosterRequest = {
    ondemandId: number;
    posterId: number;
    body?: OndemandPagesPicturesRequest;
  };

  export type GetVodPosterRequest = {
    ondemandId: number;
    posterId: number;
  };

  export type GetVodPostersRequest = {
    ondemandId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVodPostersError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodPostersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
