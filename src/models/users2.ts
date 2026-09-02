import { s, type Schema } from "../core/index.js";

export type Users2 = {
  options: string[];
  total: number;
  uri: string;
};

export const users2Schema: Schema<Users2> = s.object<Users2>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
