import { s, type Schema } from "../core/index.js";

export type Follow2 = {
  added?: boolean;
  options?: string[];
  uri?: string;
};

export const follow2Schema: Schema<Follow2> = s.object<Follow2>({
  added: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
