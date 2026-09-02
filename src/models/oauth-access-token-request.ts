import { s, type Schema } from "../core/index.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";

export type OauthAccessTokenRequest = {
  code: string;
  grantType: GrantType;
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
