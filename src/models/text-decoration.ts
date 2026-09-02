import { s, type Schema } from "../core/index.js";
import { assetsSchema, type Assets } from "./assets.js";
import { type12Schema, type Type12 } from "./type12.js";

export type TextDecoration = {
  assets?: Assets;
  text: string;
  type: Type12;
};

export const textDecorationSchema: Schema<TextDecoration> = s.object<TextDecoration>({
  assets: s.optional(s.lazy(() => assetsSchema)),
  text: s.string(),
  type: type12Schema,
});
