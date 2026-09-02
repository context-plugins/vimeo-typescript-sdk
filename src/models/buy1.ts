import { s, type Schema } from "../core/index.js";

export type Buy1 = {
  active: boolean;
  price: number | null;
};

export const buy1Schema: Schema<Buy1> = s.object<Buy1>({
  active: s.boolean(),
  price: s.nullable(s.number()),
});
