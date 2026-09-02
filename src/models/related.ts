import { s, type Schema } from "../core/index.js";

export type Related = {
  options?: string[];
  uri?: string;
};

export const relatedSchema: Schema<Related> = s.object<Related>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
