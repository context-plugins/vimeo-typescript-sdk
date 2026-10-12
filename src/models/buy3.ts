import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price2Schema, type Price2 } from "./price2.js";

export type Buy3 = {
  /**
   * Whether the video can be purchased. This parameter is required when **rent.active** is `false`.
   */
  active?: boolean;
  /**
   * Whether people who buy the video can download it. To use this parameter, **type** must be
   * `film`.
   */
  download?: boolean;
  price?: Price2;
};

export const buy3Schema: Schema<Buy3> = s.object<Buy3>({
  active: s.optional(s.boolean()),
  download: s.optional(s.boolean()),
  price: s.optional(s.lazy(() => price2Schema)),
});
