import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { domainConnectionSchema, type DomainConnection } from "../models/domain-connection.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort78Schema, type Sort78 } from "../models/sort78.js";
import type { Servers } from "../servers.js";

export class VideosEmbedPrivacy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addVideoPrivacyDomain(
    request: VideosEmbedPrivacy.AddVideoPrivacyDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEmbedPrivacy.AddVideoPrivacyDomainError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/videos/{video_id}/privacy/domains/{domain}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEmbedPrivacy.AddVideoPrivacyDomainError,
      },
      options,
    );
  }

  deleteVideoPrivacyDomain(
    request: VideosEmbedPrivacy.DeleteVideoPrivacyDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEmbedPrivacy.DeleteVideoPrivacyDomainError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/privacy/domains/{domain}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEmbedPrivacy.DeleteVideoPrivacyDomainError,
      },
      options,
    );
  }

  getVideoPrivacyDomains(
    request: VideosEmbedPrivacy.GetVideoPrivacyDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, VideosEmbedPrivacy.GetVideoPrivacyDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/privacy/domains"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort78Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: domainConnectionSchema },
        errorFactory: VideosEmbedPrivacy.GetVideoPrivacyDomainsError,
      },
      options,
    );
  }
}

export namespace VideosEmbedPrivacy {
  export type AddVideoPrivacyDomainRequest = {
    domain: string;
    videoId: number;
  };

  export class AddVideoPrivacyDomainError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<AddVideoPrivacyDomainError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoPrivacyDomainRequest = {
    domain: string;
    videoId: number;
  };

  export class DeleteVideoPrivacyDomainError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteVideoPrivacyDomainError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoPrivacyDomainsRequest = {
    videoId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    sort?: Sort78;
  };

  export class GetVideoPrivacyDomainsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoPrivacyDomainsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
