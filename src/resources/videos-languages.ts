import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { filter7Schema, type Filter7 } from "../models/filter7.js";
import { languageConnectionSchema, type LanguageConnection } from "../models/language-connection.js";
import type { Servers } from "../servers.js";

export class VideosLanguages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getLanguages(
    request: VideosLanguages.GetLanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<LanguageConnection, ResponseError> {
    return this.#rawClient.execute<LanguageConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/languages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filter7Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: languageConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideosLanguages {
  export type GetLanguagesRequest = {
    filter?: Filter7;
    page?: number;
    perPage?: number;
  };
}
