import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Publish = {
  /** Whether to publish the On Demand page. */
  active?: boolean;
};

export const publishSchema: Schema<Publish> = s.object<Publish>({
  active: s.optional(s.boolean()),
});
