import { s, type Schema } from "../core/index.js";

export type Videos3 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos3Schema: Schema<Videos3> = s.object<Videos3>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
