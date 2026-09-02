import { s, type Schema } from "../core/index.js";

export type Rent2 = {
  active: boolean;
  price: Record<string, unknown>;
  purchased?: boolean;
};

export const rent2Schema: Schema<Rent2> = s.object<Rent2>({
  active: s.boolean(),
  price: s.record(s.string(), s.unknown()),
  purchased: s.optional(s.boolean()),
});
