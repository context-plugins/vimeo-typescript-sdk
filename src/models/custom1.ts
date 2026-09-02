import { s, type Schema } from "../core/index.js";

export type Custom1 = {
  active?: boolean;
  link?: string | null;
  sticky?: boolean;
  url?: string | null;
  useLink?: boolean;
};

export const custom1Schema: Schema<Custom1> = s.object<Custom1>({
  active: s.optional(s.boolean()),
  link: s.optionalNullable(s.string()),
  sticky: s.optional(s.boolean()),
  url: s.optionalNullable(s.string()),
  useLink: s.optional(s.boolean()),
  _keysMap: {
    useLink: "use_link",
  },
});
