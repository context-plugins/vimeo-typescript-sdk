import { s, type Schema } from "../core/index.js";

export type Custom16 = {
  active?: boolean;
  id?: number | null;
  link?: string | null;
  sticky?: boolean;
};

export const custom16Schema: Schema<Custom16> = s.object<Custom16>({
  active: s.optional(s.boolean()),
  id: s.optionalNullable(s.number()),
  link: s.optionalNullable(s.string()),
  sticky: s.optional(s.boolean()),
});
