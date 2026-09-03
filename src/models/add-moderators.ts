import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddModerators = {
  options: string[];
  uri: string;
};

export const addModeratorsSchema: Schema<AddModerators> = s.object<AddModerators>({
  options: s.array(s.string()),
  uri: s.string(),
});
