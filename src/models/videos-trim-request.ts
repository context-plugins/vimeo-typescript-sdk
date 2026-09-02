import { s, type Schema } from "../core/index.js";

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
