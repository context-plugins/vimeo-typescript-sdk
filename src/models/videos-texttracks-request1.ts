import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type29Schema, type Type29 } from "./type29.js";

export type VideosTexttracksRequest1 = {
  active?: boolean;
  language?: string;
  name?: string;
  type?: Type29;
};

export const videosTexttracksRequest1Schema: Schema<VideosTexttracksRequest1> =
  s.object<VideosTexttracksRequest1>({
    active: s.optional(s.boolean()),
    language: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type29Schema)),
  });
