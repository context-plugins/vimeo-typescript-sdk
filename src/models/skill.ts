import { s, type Schema } from "../core/index.js";

export type Skill = {
  name: string;
  uri: string;
};

export const skillSchema: Schema<Skill> = s.object<Skill>({
  name: s.string(),
  uri: s.string(),
});
