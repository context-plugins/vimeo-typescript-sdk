import { s, type Schema } from "../core/index.js";

export type Pictures2 = {
  options: string[];
  total: number;
  uri: string;
};

export const pictures2Schema: Schema<Pictures2> = s.object<Pictures2>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
