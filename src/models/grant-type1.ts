import { s, type EnumSchema } from "../core/index.js";

export const GrantType1 = {
  ClientCredentials: "client_credentials",
} as const;
export type GrantType1 = (typeof GrantType1)[keyof typeof GrantType1] | (string & {});

export const grantType1Schema: EnumSchema<GrantType1> = s.enumOf<GrantType1>(GrantType1);
