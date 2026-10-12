import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";

export type OauthAccessTokenRequest = {
  /** The authorization code received from the authorization server. */
  code: string;
  /**
   * The grant type. The value of this field must be `authorization_code`.
   *
   * Option descriptions:
   *  * `authorization_code` - The grant type is for an authorization code.
   */
  grantType: GrantType;
  /** The redirect URI. The value of this field must match the URI from `/oauth/authorize`. */
  redirectUri: string;
};

export const oauthAccessTokenRequestSchema: Schema<OauthAccessTokenRequest> =
  s.object<OauthAccessTokenRequest>({
    code: s.string(),
    grantType: grantTypeSchema,
    redirectUri: s.string(),
    _keysMap: {
      grantType: "grant_type",
      redirectUri: "redirect_uri",
    },
  });
