import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  ondemandPagesPicturesRequestSchema,
  type OndemandPagesPicturesRequest,
} from "../models/ondemand-pages-pictures-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with poster images on On Demand pages.
 */
export class OnDemandPosters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a poster to an On Demand page
   *
   * @remarks
   * This method adds a poster image to the specified On Demand page. The authenticated user must be
   * the owner of the page.
   *
   * @returns The poster was added.
   *
   * @throws {@link OnDemandPosters.AddVodPosterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVodPoster(
    request: OnDemandPosters.AddVodPosterRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandPosters.AddVodPosterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: OnDemandPosters.AddVodPosterError,
      },
      options,
    );
  }

  /**
   * Edit a poster on an On Demand page
   *
   * @remarks
   * This method edits a poster image on the specified On Demand page. The authenticated user must
   * be the owner of the page.
   *
   * @returns The poster was edited.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVodPoster(
    request: OnDemandPosters.EditVodPosterRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures/{poster_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "poster_id", value: request.posterId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ondemandPagesPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific poster on an On Demand page
   *
   * @remarks
   * This method returns a single poster on the specified On Demand page.
   *
   * @returns The poster was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPoster(
    request: OnDemandPosters.GetVodPosterRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures/{poster_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
          { name: "poster_id", value: request.posterId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all the posters on an On Demand page
   *
   * @remarks
   * This method returns every poster on the specified On Demand page.
   *
   * @returns The posters were returned.
   *
   * @throws {@link OnDemandPosters.GetVodPostersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodPosters(
    request: OnDemandPosters.GetVodPostersRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, OnDemandPosters.GetVodPostersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "ondemand_id", value: request.ondemandId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
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
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class AddVodPosterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<AddVodPosterError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVodPosterRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the poster. */
    posterId: number;
    body?: OndemandPagesPicturesRequest;
  };

  export type GetVodPosterRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The ID of the poster. */
    posterId: number;
  };

  export type GetVodPostersRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVodPostersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodPostersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
