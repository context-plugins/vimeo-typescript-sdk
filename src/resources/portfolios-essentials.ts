import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { portfolioConnectionSchema, type PortfolioConnection } from "../models/portfolio-connection.js";
import { portfolioSchema, type Portfolio } from "../models/portfolio.js";
import { sort8Schema, type Sort8 } from "../models/sort8.js";
import type { Servers } from "../servers.js";

export class PortfoliosEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getPortfolio(
    request: PortfoliosEssentials.GetPortfolioRequest,
    options?: RequestOptions,
  ): ApiPromise<Portfolio, ResponseError> {
    return this.#rawClient.execute<Portfolio, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/portfolios/{portfolio_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "portfolio_id", value: request.portfolioId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfolioSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPortfolioAlt1(
    request: PortfoliosEssentials.GetPortfolioAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Portfolio, ResponseError> {
    return this.#rawClient.execute<Portfolio, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/portfolios/{portfolio_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "portfolio_id", value: request.portfolioId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfolioSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPortfolios(
    request: PortfoliosEssentials.GetPortfoliosRequest,
    options?: RequestOptions,
  ): ApiPromise<PortfolioConnection, ResponseError> {
    return this.#rawClient.execute<PortfolioConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/portfolios"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfolioConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPortfoliosAlt1(
    request: PortfoliosEssentials.GetPortfoliosAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PortfolioConnection, ResponseError> {
    return this.#rawClient.execute<PortfolioConnection, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/me/portfolios"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort8Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: portfolioConnectionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace PortfoliosEssentials {
  export type GetPortfolioRequest = {
    portfolioId: number;
    userId: number;
  };

  export type GetPortfolioAlt1Request = {
    portfolioId: number;
  };

  export type GetPortfoliosRequest = {
    userId: number;
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };

  export type GetPortfoliosAlt1Request = {
    direction?: Direction;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort8;
  };
}
