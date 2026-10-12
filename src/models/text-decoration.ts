import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetsSchema, type Assets } from "./assets.js";
import { type12Schema, type Type12 } from "./type12.js";

export type TextDecoration = {
  /** The assets that are needed to decorate the text. */
  assets?: Assets;
  /** The note text to decorate. */
  text: string;
  /**
   * The type of text decoration.
   *
   * Option descriptions:
   *  * `url` - The URL of the Vimeo video.
   */
  type: Type12;
};

export const textDecorationSchema: Schema<TextDecoration> = s.object<TextDecoration>({
  assets: s.optional(s.lazy(() => assetsSchema)),
  text: s.string(),
  type: type12Schema,
});
