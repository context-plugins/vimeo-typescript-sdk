import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Related = {
  options?: string[];
  uri?: string;
};

export const relatedSchema: Schema<Related> = s.object<Related>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
