import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about renting the video. */
export type Rent2 = {
  /** Whether the video can be rented. */
  active: boolean;
  /** The rental price of the video by currency type. */
  price: Record<string, unknown>;
  /** Whether the video has been rented. */
  purchased?: boolean;
};

export const rent2Schema: Schema<Rent2> = s.object<Rent2>({
  active: s.boolean(),
  price: s.record(s.string(), s.unknown()),
  purchased: s.optional(s.boolean()),
});
