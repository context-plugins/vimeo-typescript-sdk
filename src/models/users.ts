import { s, type Schema } from "../core/index.js";

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
