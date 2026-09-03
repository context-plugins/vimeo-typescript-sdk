import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosTrimRequest = {
  trimEnd?: string;
  trimStart?: string;
};

export const videosTrimRequestSchema: Schema<VideosTrimRequest> = s.object<VideosTrimRequest>({
  trimEnd: s.optional(s.string()),
  trimStart: s.optional(s.string()),
  _keysMap: {
    trimEnd: "trim_end",
    trimStart: "trim_start",
  },
});
