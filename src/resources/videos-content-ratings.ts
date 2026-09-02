import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth } from "../core/index.js";
import {
  contentRatingConnectionSchema,
  type ContentRatingConnection,
} from "../models/content-rating-connection.js";
import type { Servers } from "../servers.js";

export class VideosContentRatings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getContentRatings(options?: RequestOptions): ApiPromise<ContentRatingConnection, ResponseError> {
    return this.#rawClient.execute<ContentRatingConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/contentratings"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentRatingConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
