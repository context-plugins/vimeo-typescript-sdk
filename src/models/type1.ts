import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's role type. This data requires a bearer token with the `private` scope.
 *
 * Option descriptions:
 *  * `moderator` - The authenticated user is a moderator.
 *  * `subscriber` - The authenticated user is a subscriber.
 */
export const Type1 = {
  Moderator: "moderator",
  Subscriber: "subscriber",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
