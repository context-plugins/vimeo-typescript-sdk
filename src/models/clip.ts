import { s, type Schema } from "../core/index.js";

export type Clip = {
  options: string[];
  uri: string;
};

export const clipSchema: Schema<Clip> = s.object<Clip>({
  options: s.array(s.string()),
  uri: s.string(),
});
