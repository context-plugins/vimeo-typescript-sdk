import { s, type Schema } from "../core/index.js";

export type Season = {
  name?: string;
  options?: string[];
  uri?: string;
};

export const seasonSchema: Schema<Season> = s.object<Season>({
  name: s.optional(s.string()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
