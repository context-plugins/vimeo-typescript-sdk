import { s, type Schema } from "../core/index.js";
import { grantType1Schema, type GrantType1 } from "./grant-type1.js";

export type OauthAuthorizeClientRequest = {
  grantType: GrantType1;
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
