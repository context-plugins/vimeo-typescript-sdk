import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The text block that appears after the video ends. */
export type Text = {
  /** The text of the description. */
  description?: string;
};

export const textSchema: Schema<Text> = s.object<Text>({
  description: s.optional(s.string()),
});
