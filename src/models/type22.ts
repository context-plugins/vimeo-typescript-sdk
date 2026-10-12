import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The way in which the promotion generates promo codes.
 *
 * Option descriptions:
 *  * `batch` - The promotion provides a unique promotional code for each user.
 *  * `batch_prefix` - Like `batch`, except that all codes have a similar prefix string. _This
 *    option is deprecated, yet it may still appear for some users._
 *  * `single` - The promotion provides a single promotional code for all users.
 */
export const Type22 = {
  Batch: "batch",
  BatchPrefix: "batch_prefix",
  Single: "single",
} as const;
export type Type22 = (typeof Type22)[keyof typeof Type22] | (string & {});

export const type22Schema: EnumSchema<Type22> = s.enumOf<Type22>(Type22);
