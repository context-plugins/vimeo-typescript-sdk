import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetsSchema, type Assets } from "./assets.js";

export type TextDecoration = {
  assets?: Assets;
  text: string;
  type: "url";
};

export const textDecorationSchema: Schema<TextDecoration> = s.object<TextDecoration>({
  assets: s.optional(s.lazy(() => assetsSchema)),
  text: s.string(),
  type: s.literal("url"),
});
