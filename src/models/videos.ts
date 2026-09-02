import { s, type Schema } from "../core/index.js";

export type Videos = {
  options: string[];
  total: number;
  uri: string;
};

export const videosSchema: Schema<Videos> = s.object<Videos>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
