import { s, type Schema } from "../core/index.js";

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
