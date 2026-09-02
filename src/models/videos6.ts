import { s, type Schema } from "../core/index.js";

export type Videos6 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos6Schema: Schema<Videos6> = s.object<Videos6>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
