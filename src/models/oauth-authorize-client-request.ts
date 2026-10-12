import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantType1Schema, type GrantType1 } from "./grant-type1.js";

export type OauthAuthorizeClientRequest = {
  /**
   * The grant type. The value of this field must be `client_credentials`.
   *
   * Option descriptions:
   *  * `client_credentials` - The grant type is for the client credentials.
   */
  grantType: GrantType1;
  /** A space-separated list of the authentication scopes to access. The default is `public`. */
  scope: string;
};

export const oauthAuthorizeClientRequestSchema: Schema<OauthAuthorizeClientRequest> =
  s.object<OauthAuthorizeClientRequest>({
    grantType: grantType1Schema,
    scope: s.string(),
    _keysMap: {
      grantType: "grant_type",
    },
  });
