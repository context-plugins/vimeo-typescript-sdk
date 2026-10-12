import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { tier1Schema, type Tier1 } from "../models/tier1.js";
import type { Servers } from "../servers.js";

/**
 * These are the most common methods for working with subscription plans.
 */
export class SubscriptionPlansEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a single subscription plan
   *
   * @remarks
   * This method returns the specified subscription plan.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlan(
    request: SubscriptionPlansEssentials.GetPlanRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscription_plans/{tier}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "tier", value: request.tier, schema: tier1Schema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SubscriptionPlansEssentials {
  export type GetPlanRequest = {
    /**
     * The type of subscription plan.
     *
     * Option descriptions:
     *  * `advanced` - The plan type is Vimeo Advanced.
     *  * `business` - The plan type is Vimeo Business.
     *  * `free` - The plan type is Vimeo Free.
     *  * `live_premium` - The plan type is Vimeo Premium.
     *  * `plus` - The plan type is Vimeo Plus.
     *  * `pro` - The plan type is Vimeo Pro.
     *  * `pro_unlimited` - The plan type is Vimeo Pro Unlimited.
     *  * `standard` - The plan type is Vimeo Standard.
     *  * `starter` - The plan type is Vimeo Starter.
     */
    tier: Tier1;
  };
}
