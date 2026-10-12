import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Add = {
  /** The showcase URI to add the video to. */
  uri?: string;
};

export const addSchema: Schema<Add> = s.object<Add>({
  uri: s.optional(s.string()),
});
