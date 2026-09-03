import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthAuthorizeVimeoOauth1Request = {
  grantType: "vimeo_oauth1";
  token: string;
  tokenSecret: string;
};

export const oauthAuthorizeVimeoOauth1RequestSchema: Schema<OauthAuthorizeVimeoOauth1Request> =
  s.object<OauthAuthorizeVimeoOauth1Request>({
    grantType: s.literal("vimeo_oauth1"),
    token: s.string(),
    tokenSecret: s.string(),
    _keysMap: {
      grantType: "grant_type",
      tokenSecret: "token_secret",
    },
  });
