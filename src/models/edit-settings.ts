import { s, type Schema } from "../core/index.js";

export type EditSettings = {
  options: string[];
  uri: string;
};

export const editSettingsSchema: Schema<EditSettings> = s.object<EditSettings>({
  options: s.array(s.string()),
  uri: s.string(),
});
