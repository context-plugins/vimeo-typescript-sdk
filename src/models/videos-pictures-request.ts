import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosPicturesRequest = {
  active?: boolean;
  time?: number;
};

export const videosPicturesRequestSchema: Schema<VideosPicturesRequest> = s.object<VideosPicturesRequest>({
  active: s.optional(s.boolean()),
  time: s.optional(s.number()),
});
