import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import {
  ondemandPagesBackgroundsRequestSchema,
  type OndemandPagesBackgroundsRequest,
} from "../models/ondemand-pages-backgrounds-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

export class OnDemandBackgrounds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createVodBackground(
    request: OnDemandBackgrounds.CreateVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandBackgrounds.CreateVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds"),
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
        errorFactory: OnDemandBackgrounds.CreateVodBackgroundError,
      },
      options,
    );
  }

  deleteVodBackground(
    request: OnDemandBackgrounds.DeleteVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnDemandBackgrounds.DeleteVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds/{background_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "background_id", value: request.backgroundId, schema: s.number() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnDemandBackgrounds.DeleteVodBackgroundError,
      },
      options,
    );
  }

  editVodBackground(
    request: OnDemandBackgrounds.EditVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandBackgrounds.EditVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds/{background_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "background_id", value: request.backgroundId, schema: s.number() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
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

  getVodBackground(
    request: OnDemandBackgrounds.GetVodBackgroundRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, OnDemandBackgrounds.GetVodBackgroundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds/{background_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "background_id", value: request.backgroundId, schema: s.number() },
          { name: "ondemand_id", value: request.ondemandId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: OnDemandBackgrounds.GetVodBackgroundError,
      },
      options,
    );
  }

  getVodBackgrounds(
    request: OnDemandBackgrounds.GetVodBackgroundsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, OnDemandBackgrounds.GetVodBackgroundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/ondemand/pages/{ondemand_id}/backgrounds"),
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
        errorFactory: OnDemandBackgrounds.GetVodBackgroundsError,
      },
      options,
    );
  }
}

export namespace OnDemandBackgrounds {
  export type CreateVodBackgroundRequest = {
    ondemandId: number;
  };

  export class CreateVodBackgroundError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVodBackgroundRequest = {
    backgroundId: number;
    ondemandId: number;
  };

  export class DeleteVodBackgroundError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVodBackgroundRequest = {
    backgroundId: number;
    ondemandId: number;
    body?: OndemandPagesBackgroundsRequest;
  };

  export class EditVodBackgroundError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodBackgroundRequest = {
    backgroundId: number;
    ondemandId: number;
  };

  export class GetVodBackgroundError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetVodBackgroundError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVodBackgroundsRequest = {
    ondemandId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVodBackgroundsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVodBackgroundsError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
