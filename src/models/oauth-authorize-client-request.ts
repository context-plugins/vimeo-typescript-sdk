import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthAuthorizeClientRequest = {
  grantType: "client_credentials";
  scope: string;
};

export const oauthAuthorizeClientRequestSchema: Schema<OauthAuthorizeClientRequest> =
  s.object<OauthAuthorizeClientRequest>({
    grantType: s.literal("client_credentials"),
    scope: s.string(),
    _keysMap: {
      grantType: "grant_type",
    },
  });
