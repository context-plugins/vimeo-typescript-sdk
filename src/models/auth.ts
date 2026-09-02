import { s, type Schema } from "../core/index.js";
import { apiAppSchema, type ApiApp } from "./api-app.js";
import { tokenTypeSchema, type TokenType } from "./token-type.js";
import { userSchema, type User } from "./user.js";

export type Auth = {
  accessToken: string;
  app: ApiApp;
  expiresOn?: string;
  refreshToken?: string;
  scope: string;
  tokenType: TokenType;
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
