import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
