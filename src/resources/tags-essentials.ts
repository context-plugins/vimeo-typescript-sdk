import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { tagSchema, type Tag } from "../models/tag.js";
import type { Servers } from "../servers.js";

export class TagsEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getTag(request: TagsEssentials.GetTagRequest, options?: RequestOptions): ApiPromise<Tag, ResponseError> {
    return this.#rawClient.execute<Tag, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/tags/{word}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "word", value: request.word, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TagsEssentials {
  export type GetTagRequest = {
    word: string;
  };
}
