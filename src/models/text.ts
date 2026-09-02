import { s, type Schema } from "../core/index.js";

export type Text = {
  description?: string;
};

export const textSchema: Schema<Text> = s.object<Text>({
  description: s.optional(s.string()),
});
