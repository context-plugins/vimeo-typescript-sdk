import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The grant type. The value of this field must be `authorization_code`.
 *
 * Option descriptions:
 *  * `authorization_code` - The grant type is for an authorization code.
 */
export const GrantType = {
  AuthorizationCode: "authorization_code",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
