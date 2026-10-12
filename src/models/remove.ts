import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Remove = {
  /** The showcase URI to remove the video from. */
  uri?: string;
};

export const removeSchema: Schema<Remove> = s.object<Remove>({
  uri: s.optional(s.string()),
});
