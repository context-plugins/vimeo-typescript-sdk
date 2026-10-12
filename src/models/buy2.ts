import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about purchasing the video. */
export type Buy2 = {
  /** Whether the video can be purchased. */
  active: boolean;
  /** The purchase price of the video by currency type. */
  price: Record<string, unknown>;
  /** Whether the video has been purchased. */
  purchased?: boolean;
};

export const buy2Schema: Schema<Buy2> = s.object<Buy2>({
  active: s.boolean(),
  price: s.record(s.string(), s.unknown()),
  purchased: s.optional(s.boolean()),
});
