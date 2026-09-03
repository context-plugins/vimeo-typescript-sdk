import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
