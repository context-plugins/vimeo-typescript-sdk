import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Skill = {
  name: string;
  uri: string;
};

export const skillSchema: Schema<Skill> = s.object<Skill>({
  name: s.string(),
  uri: s.string(),
});
