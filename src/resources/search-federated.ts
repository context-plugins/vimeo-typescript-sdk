import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  federatedSearchItemsConnectionSchema,
  type FederatedSearchItemsConnection,
} from "../models/federated-search-items-connection.js";
import { filter30Schema, type Filter30 } from "../models/filter30.js";
import { sort46Schema, type Sort46 } from "../models/sort46.js";
import type { Servers } from "../servers.js";

export class SearchFederated {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  federatedSearchUserItems(
    request: SearchFederated.FederatedSearchUserItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/search/{user_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter30Schema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "modified_end_date", value: request.modifiedEndDate, schema: s.optional(s.string()) },
          { name: "modified_start_date", value: request.modifiedStartDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort46Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: federatedSearchItemsConnectionSchema },
        errorFactory: SearchFederated.FederatedSearchUserItemsError,
      },
      options,
    );
  }

  federatedSearchUserItemsAlt1(
    request: SearchFederated.FederatedSearchUserItemsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<FederatedSearchItemsConnection, SearchFederated.FederatedSearchUserItemsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/workspaces/search/{workspace_uuid}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "workspace_uuid", value: request.workspaceUuid, schema: s.string() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter30Schema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "modified_end_date", value: request.modifiedEndDate, schema: s.optional(s.string()) },
          { name: "modified_start_date", value: request.modifiedStartDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "query_fields", value: request.queryFields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort46Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: federatedSearchItemsConnectionSchema },
        errorFactory: SearchFederated.FederatedSearchUserItemsAlt1Error,
      },
      options,
    );
  }
}

export namespace SearchFederated {
  export type FederatedSearchUserItemsRequest = {
    userId: number;
    direction?: Direction;
    filter?: Filter30;
    filterPrivacy?: string;
    modifiedEndDate?: string;
    modifiedStartDate?: string;
    page?: number;
    perPage?: number;
    query?: string;
    queryFields?: string;
    sort?: Sort46;
  };

  export class FederatedSearchUserItemsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<FederatedSearchUserItemsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FederatedSearchUserItemsAlt1Request = {
    workspaceUuid: string;
    direction?: Direction;
    filter?: Filter30;
    filterPrivacy?: string;
    modifiedEndDate?: string;
    modifiedStartDate?: string;
    page?: number;
    perPage?: number;
    query?: string;
    queryFields?: string;
    sort?: Sort46;
  };

  export class FederatedSearchUserItemsAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<FederatedSearchUserItemsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
