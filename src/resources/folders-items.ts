import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { filter21Schema, type Filter21 } from "../models/filter21.js";
import { sort37Schema, type Sort37 } from "../models/sort37.js";
import type { Servers } from "../servers.js";

export class FoldersItems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteFolderItemsAlt1(
    request: FoldersItems.DeleteFolderItemsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FoldersItems.DeleteFolderItemsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/projects/{project_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
        query: [
          { name: "uris", value: request.uris, schema: s.string() },
          {
            name: "send_to_recently_deleted",
            value: request.sendToRecentlyDeleted,
            schema: s.optional(s.boolean()),
          },
          { name: "should_delete_items", value: request.shouldDeleteItems, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FoldersItems.DeleteFolderItemsAlt1Error,
      },
      options,
    );
  }

  getFolderItems(
    request: FoldersItems.GetFolderItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/projects/{project_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.number() }],
        query: [
          { name: "clip_privacy_filters", value: request.clipPrivacyFilters, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter21Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
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

  getFolderItems2(
    request: FoldersItems.GetFolderItems2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/projects/{project_id}/items"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        query: [
          { name: "clip_privacy_filters", value: request.clipPrivacyFilters, schema: s.optional(s.string()) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter21Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort37Schema)) },
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
}

export namespace FoldersItems {
  export type DeleteFolderItemsAlt1Request = {
    projectId: number;
    uris: string;
    sendToRecentlyDeleted?: boolean;
    shouldDeleteItems?: boolean;
  };

  export class DeleteFolderItemsAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteFolderItemsAlt1Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFolderItemsRequest = {
    projectId: number;
    clipPrivacyFilters?: string;
    direction?: Direction;
    filter?: Filter21;
    page?: number;
    perPage?: number;
    sort?: Sort37;
  };

  export type GetFolderItems2Request = {
    projectId: number;
    userId: number;
    clipPrivacyFilters?: string;
    direction?: Direction;
    filter?: Filter21;
    page?: number;
    perPage?: number;
    sort?: Sort37;
  };
}
