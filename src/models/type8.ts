import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The user's role type. This data requires a bearer token with the `private` scope.
 *
 * Option descriptions:
 *  * `member` - The user is a member.
 *  * `moderator` - The user is a moderator.
 */
export const Type8 = {
  Member: "member",
  Moderator: "moderator",
} as const;
export type Type8 = (typeof Type8)[keyof typeof Type8] | (string & {});

export const type8Schema: EnumSchema<Type8> = s.enumOf<Type8>(Type8);
