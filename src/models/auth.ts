import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiAppSchema, type ApiApp } from "./api-app.js";
import { tokenTypeSchema, type TokenType } from "./token-type.js";
import { userSchema, type User } from "./user.js";

export type Auth = {
  /** The access token string. */
  accessToken: string;
  /** The API application associated with the token. */
  app: ApiApp;
  /** The token's expiration date. */
  expiresOn?: string;
  /**
   * The refresh token string. The Vimeo API doesn't currently support refresh tokens, but we plan
   * to add this support in the future.
   */
  refreshToken?: string;
  /** The scope or scopes that the token supports. */
  scope: string;
  /**
   * The token type.
   *
   * Option descriptions:
   *  * `bearer` - The token is of the bearer type.
   */
  tokenType: TokenType;
  /** The user associated with the token. */
  user?: User;
};

export const authSchema: Schema<Auth> = s.object<Auth>({
  accessToken: s.string(),
  app: apiAppSchema,
  expiresOn: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  scope: s.string(),
  tokenType: tokenTypeSchema,
  user: s.optional(s.lazy(() => userSchema)),
  _keysMap: {
    accessToken: "access_token",
    expiresOn: "expires_on",
    refreshToken: "refresh_token",
    tokenType: "token_type",
  },
});
