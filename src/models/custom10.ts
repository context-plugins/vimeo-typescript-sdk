import { s, type Schema } from "../core/index.js";

export type Custom10 = {
  active?: boolean;
  link?: string;
  sticky?: boolean;
};

export const custom10Schema: Schema<Custom10> = s.object<Custom10>({
  active: s.optional(s.boolean()),
  link: s.optional(s.string()),
  sticky: s.optional(s.boolean()),
});
