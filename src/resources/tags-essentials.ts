import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { tagSchema, type Tag } from "../models/tag.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with tags.
 */
export class TagsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a tag
   *
   * @remarks
   * This method returns the specified tag.
   *
   * @returns The tag was returned.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTag(request: TagsEssentials.GetTagRequest, options?: RequestOptions): ApiPromise<Tag, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "word", value: request.word, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TagsEssentials {
  export type GetTagRequest = {
    /** The tag to return. */
    word: string;
  };
}
