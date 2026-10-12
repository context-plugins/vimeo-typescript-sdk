import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The grant type. The value of this field must be `client_credentials`.
 *
 * Option descriptions:
 *  * `client_credentials` - The grant type is for the client credentials.
 */
export const GrantType1 = {
  ClientCredentials: "client_credentials",
} as const;
export type GrantType1 = (typeof GrantType1)[keyof typeof GrantType1] | (string & {});

export const grantType1Schema: EnumSchema<GrantType1> = s.enumOf<GrantType1>(GrantType1);
