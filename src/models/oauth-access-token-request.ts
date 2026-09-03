import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthAccessTokenRequest = {
  code: string;
  grantType: "authorization_code";
  redirectUri: string;
};

export const oauthAccessTokenRequestSchema: Schema<OauthAccessTokenRequest> =
  s.object<OauthAccessTokenRequest>({
    code: s.string(),
    grantType: s.literal("authorization_code"),
    redirectUri: s.string(),
    _keysMap: {
      grantType: "grant_type",
      redirectUri: "redirect_uri",
    },
  });
