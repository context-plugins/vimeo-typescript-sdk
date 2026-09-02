import { s, type Schema } from "../core/index.js";
import { period4Schema, type Period4 } from "./period4.js";

export type Rent1 = {
  active: boolean;
  period: Period4 | null;
  price: number | null;
};

export const rent1Schema: Schema<Rent1> = s.object<Rent1>({
  active: s.boolean(),
  period: s.nullable(s.lazy(() => period4Schema)),
  price: s.nullable(s.number()),
});
