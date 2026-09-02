import { s, type Schema } from "../core/index.js";

export type Buy2 = {
  active: boolean;
  price: Record<string, unknown>;
  purchased?: boolean;
};

export const buy2Schema: Schema<Buy2> = s.object<Buy2>({
  active: s.boolean(),
  price: s.record(s.string(), s.unknown()),
  purchased: s.optional(s.boolean()),
});
