import { s, type Schema } from "../core/index.js";

export type Following = {
  options: string[];
  total: number;
  uri: string;
};

export const followingSchema: Schema<Following> = s.object<Following>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
