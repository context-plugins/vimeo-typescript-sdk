import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EditSettings = {
  options: string[];
  uri: string;
};

export const editSettingsSchema: Schema<EditSettings> = s.object<EditSettings>({
  options: s.array(s.string()),
  uri: s.string(),
});
