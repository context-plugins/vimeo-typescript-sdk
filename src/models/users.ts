import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Users = {
  options: string[];
  total: number;
  uri: string;
};

export const usersSchema: Schema<Users> = s.object<Users>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
