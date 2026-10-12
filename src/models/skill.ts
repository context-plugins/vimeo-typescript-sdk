import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Skill = {
  /** The skill's display name. */
  name: string;
  /** The skill's canonical relative URI. */
  uri: string;
};

export const skillSchema: Schema<Skill> = s.object<Skill>({
  name: s.string(),
  uri: s.string(),
});
