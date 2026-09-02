import { s, type EnumSchema } from "../core/index.js";

export const GrantType = {
  AuthorizationCode: "authorization_code",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
