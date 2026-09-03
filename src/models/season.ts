import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season = {
  name?: string;
  options?: string[];
  uri?: string;
};

export const seasonSchema: Schema<Season> = s.object<Season>({
  name: s.optional(s.string()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
