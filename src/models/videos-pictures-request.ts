import { s, type Schema } from "../core/index.js";

export type VideosPicturesRequest = {
  active?: boolean;
  time?: number;
};

export const videosPicturesRequestSchema: Schema<VideosPicturesRequest> = s.object<VideosPicturesRequest>({
  active: s.optional(s.boolean()),
  time: s.optional(s.number()),
});
