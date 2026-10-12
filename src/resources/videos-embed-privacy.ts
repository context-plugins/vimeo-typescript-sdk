import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { domainConnectionSchema, type DomainConnection } from "../models/domain-connection.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { sort78Schema, type Sort78 } from "../models/sort78.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to manage the allowlist of embeddable videos.
 */
export class VideosEmbedPrivacy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a domain to a video's allowlist
   *
   * @remarks
   * This method adds the specified domain to a video's allowlist.
   *
   * @returns The domain was added to the video's allowlist.
   *
   * @throws {@link VideosEmbedPrivacy.AddVideoPrivacyDomainError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVideoPrivacyDomain(
    request: VideosEmbedPrivacy.AddVideoPrivacyDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEmbedPrivacy.AddVideoPrivacyDomainError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/domains/{domain}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEmbedPrivacy.AddVideoPrivacyDomainError,
      },
      options,
    );
  }

  /**
   * Remove a domain from a video's allowlist
   *
   * @remarks
   * This method removes the specified domain from a video's allowlist.
   *
   * @returns The domain was removed.
   *
   * @throws {@link VideosEmbedPrivacy.DeleteVideoPrivacyDomainError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVideoPrivacyDomain(
    request: VideosEmbedPrivacy.DeleteVideoPrivacyDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosEmbedPrivacy.DeleteVideoPrivacyDomainError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/domains/{domain}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosEmbedPrivacy.DeleteVideoPrivacyDomainError,
      },
      options,
    );
  }

  /**
   * Get all the domains on a video's allowlist
   *
   * @remarks
   * This method returns every domain on the specified video's allowlist.
   *
   * @returns The domains were returned.
   *
   * @throws {@link VideosEmbedPrivacy.GetVideoPrivacyDomainsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVideoPrivacyDomains(
    request: VideosEmbedPrivacy.GetVideoPrivacyDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainConnection, VideosEmbedPrivacy.GetVideoPrivacyDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/privacy/domains"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort78Schema)) },
        ],
        headers: [],
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
    /** The domain name. */
    domain: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class AddVideoPrivacyDomainError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<AddVideoPrivacyDomainError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoPrivacyDomainRequest = {
    /** The domain name. */
    domain: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteVideoPrivacyDomainError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
    >;

    static readonly errors: ErrorDecoders<DeleteVideoPrivacyDomainError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoPrivacyDomainsRequest = {
    /** The ID of the video. */
    videoId: number;
    /**
     * The sort direction of the results.
     *
     * Option descriptions:
     *  * `asc` - Sort the results in ascending order.
     *  * `desc` - Sort the results in descending order.
     */
    direction?: Direction;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
    /**
     * The way to sort the results.
     *
     * Option descriptions:
     *  * `default` - Sort the results by the video's allowlist ID.
     */
    sort?: Sort78;
  };

  export class GetVideoPrivacyDomainsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetVideoPrivacyDomainsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
