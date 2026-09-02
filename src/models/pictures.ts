import { s, type Schema } from "../core/index.js";

export type Pictures = {
  options: string[];
  total: number;
  uri: string;
};

export const picturesSchema: Schema<Pictures> = s.object<Pictures>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
