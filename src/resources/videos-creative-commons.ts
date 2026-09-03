import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  creativeCommonsConnectionSchema,
  type CreativeCommonsConnection,
} from "../models/creative-commons-connection.js";
import type { Servers } from "../servers.js";

export class VideosCreativeCommons {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCcLicenses(
    request: VideosCreativeCommons.GetCcLicensesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreativeCommonsConnection, ResponseError> {
    return this.#rawClient.execute<CreativeCommonsConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/creativecommons"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creativeCommonsConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideosCreativeCommons {
  export type GetCcLicensesRequest = {
    page?: number;
    perPage?: number;
  };
}
