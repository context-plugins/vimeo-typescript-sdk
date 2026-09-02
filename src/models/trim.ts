import { s, type Schema } from "../core/index.js";

export type Trim = {
  options: string[];
  uri: string;
};

export const trimSchema: Schema<Trim> = s.object<Trim>({
  options: s.array(s.string()),
  uri: s.string(),
});
