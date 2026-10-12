import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantType2Schema, type GrantType2 } from "./grant-type2.js";

export type OauthAuthorizeVimeoOauth1Request = {
  /**
   * The grant type. The value of this field must be `vimeo_oauth1`.
   *
   * Option descriptions:
   *  * `vimeo_oauth1` - The grant type is for the OAuth1 token.
   */
  grantType: GrantType2;
  /** The OAuth 1 token. */
  token: string;
  /** The OAuth 1 token secret. */
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
