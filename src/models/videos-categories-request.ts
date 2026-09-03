import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosCategoriesRequest = {
  category: string[];
};

export const videosCategoriesRequestSchema: Schema<VideosCategoriesRequest> =
  s.object<VideosCategoriesRequest>({
    category: s.array(s.string()),
  });
