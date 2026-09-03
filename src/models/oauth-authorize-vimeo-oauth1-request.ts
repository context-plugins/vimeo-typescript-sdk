import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantType2Schema, type GrantType2 } from "./grant-type2.js";

export type OauthAuthorizeVimeoOauth1Request = {
  grantType: GrantType2;
  token: string;
  tokenSecret: string;
};

export const oauthAuthorizeVimeoOauth1RequestSchema: Schema<OauthAuthorizeVimeoOauth1Request> =
  s.object<OauthAuthorizeVimeoOauth1Request>({
    grantType: grantType2Schema,
    token: s.string(),
    tokenSecret: s.string(),
    _keysMap: {
      grantType: "grant_type",
      tokenSecret: "token_secret",
    },
  });
