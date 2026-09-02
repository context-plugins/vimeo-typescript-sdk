import { s, type Schema } from "../core/index.js";

export type VideosPicturesRequest1 = {
  active?: boolean;
};

export const videosPicturesRequest1Schema: Schema<VideosPicturesRequest1> = s.object<VideosPicturesRequest1>({
  active: s.optional(s.boolean()),
});
