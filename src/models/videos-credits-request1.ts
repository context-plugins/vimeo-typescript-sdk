import { s, type Schema } from "../core/index.js";

export type VideosCreditsRequest1 = {
  name?: string;
  role?: string;
};

export const videosCreditsRequest1Schema: Schema<VideosCreditsRequest1> = s.object<VideosCreditsRequest1>({
  name: s.optional(s.string()),
  role: s.optional(s.string()),
});
