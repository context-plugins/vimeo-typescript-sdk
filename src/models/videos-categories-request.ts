import { s, type Schema } from "../core/index.js";

export type VideosCategoriesRequest = {
  category: string[];
};

export const videosCategoriesRequestSchema: Schema<VideosCategoriesRequest> =
  s.object<VideosCategoriesRequest>({
    category: s.array(s.string()),
  });
