import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Parent = {
  link: string;
  name: string;
  uri: string;
};

export const parentSchema: Schema<Parent> = s.object<Parent>({
  link: s.string(),
  name: s.string(),
  uri: s.string(),
});
