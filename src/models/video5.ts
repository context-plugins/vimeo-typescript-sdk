import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Video5 = {
  uri?: string;
};

export const video5Schema: Schema<Video5> = s.object<Video5>({
  uri: s.optional(s.string()),
});
