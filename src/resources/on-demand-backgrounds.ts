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
  ondemandPagesBackgroundsRequestSchema,
  type OndemandPagesBackgroundsRequest,
} from "../models/ondemand-pages-backgrounds-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with background images on an On Demand page.
 */
export class OnDemandBackgrounds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a background to an On Demand page
   *
   * @remarks
   * This method adds a background image to the specified On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The background image was added.
   *
   * @throws {@link OnDemandBackgrounds.CreateVodBackgroundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVodBackground(
    request: OnDemandBackgrounds.CreateVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandBackgrounds.CreateVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds"),
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
        errorFactory: OnDemandBackgrounds.CreateVodBackgroundError,
      },
      options,
    );
  }

  /**
   * Delete a background on an On Demand page
   *
   * @remarks
   * This method deletes the specified background image on an On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The background image was deleted.
   *
   * @throws {@link OnDemandBackgrounds.DeleteVodBackgroundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVodBackground(
    request: OnDemandBackgrounds.DeleteVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandBackgrounds.DeleteVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds/{background_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "background_id", value: request.backgroundId, schema: s.float64() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandBackgrounds.DeleteVodBackgroundError,
      },
      options,
    );
  }

  /**
   * Edit a background on an On Demand page
   *
   * @remarks
   * This method edits the specified background image on an On Demand page. The authenticated user
   * must be the owner of the page.
   *
   * @returns The background image was edited.
   *
   * @throws {@link OnDemandBackgrounds.EditVodBackgroundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editVodBackground(
    request: OnDemandBackgrounds.EditVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandBackgrounds.EditVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds/{background_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "background_id", value: request.backgroundId, schema: s.float64() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => ondemandPagesBackgroundsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: OnDemandBackgrounds.EditVodBackgroundError,
      },
      options,
    );
  }

  /**
   * Get a specific background on an On Demand page
   *
   * @remarks
   * This method returns a single background image on the specified On Demand page. The
   * authenticated user must be the owner of the page.
   *
   * @returns The background image was returned.
   *
   * @throws {@link OnDemandBackgrounds.GetVodBackgroundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodBackground(
    request: OnDemandBackgrounds.GetVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandBackgrounds.GetVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds/{background_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "background_id", value: request.backgroundId, schema: s.float64() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: OnDemandBackgrounds.GetVodBackgroundError,
      },
      options,
    );
  }

  /**
   * Get all the backgrounds on an On Demand page
   *
   * @remarks
   * This method returns every background image on the specified On Demand page. The authenticated
   * user must be the owner of the page.
   *
   * @returns The background images were returned.
   *
   * @throws {@link OnDemandBackgrounds.GetVodBackgroundsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVodBackgrounds(
    request: OnDemandBackgrounds.GetVodBackgroundsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, OnDemandBackgrounds.GetVodBackgroundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds"),
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
        errorFactory: OnDemandBackgrounds.GetVodBackgroundsError,
      },
      options,
    );
  }
}

export namespace OnDemandBackgrounds {
  export type CreateVodBackgroundRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class CreateVodBackgroundError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<CreateVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodBackgroundRequest = {
    /** The ID of the background image. */
    backgroundId: number;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class DeleteVodBackgroundError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVodBackgroundRequest = {
    /** The ID of the background image. */
    backgroundId: number;
    /** The ID of the On Demand page. */
    ondemandId: number;
    body?: OndemandPagesBackgroundsRequest;
  };

  export class EditVodBackgroundError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<EditVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodBackgroundRequest = {
    /** The ID of the background image. */
    backgroundId: number;
    /** The ID of the On Demand page. */
    ondemandId: number;
  };

  export class GetVodBackgroundError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<GetVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodBackgroundsRequest = {
    /** The ID of the On Demand page. */
    ondemandId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetVodBackgroundsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVodBackgroundsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
