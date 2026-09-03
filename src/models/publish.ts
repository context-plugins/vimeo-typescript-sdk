import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Publish = {
  active?: boolean;
};

export const publishSchema: Schema<Publish> = s.object<Publish>({
  active: s.optional(s.boolean()),
});
