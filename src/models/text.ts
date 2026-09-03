import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Text = {
  description?: string;
};

export const textSchema: Schema<Text> = s.object<Text>({
  description: s.optional(s.string()),
});
