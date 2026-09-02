import { s, type Schema } from "../core/index.js";

export type Video5 = {
  uri?: string;
};

export const video5Schema: Schema<Video5> = s.object<Video5>({
  uri: s.optional(s.string()),
});
