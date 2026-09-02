import { s, type Schema } from "../core/index.js";

export type AddLogos = {
  options: string[];
  uri: string;
};

export const addLogosSchema: Schema<AddLogos> = s.object<AddLogos>({
  options: s.array(s.string()),
  uri: s.string(),
});
