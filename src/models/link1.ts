import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The outro link settings. These fields appear only when **type** is `link`. */
export type Link1 = {
  /** The name of the outro link. */
  name?: string;
  /** The URL of the outro link. */
  url?: string;
};

export const link1Schema: Schema<Link1> = s.object<Link1>({
  name: s.optional(s.string()),
  url: s.optional(s.string()),
});
