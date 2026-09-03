import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Projects = {
  options: string[];
  total: number;
  uri: string;
};

export const projectsSchema: Schema<Projects> = s.object<Projects>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
