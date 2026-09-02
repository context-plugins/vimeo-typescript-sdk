import { s, type Schema } from "../core/index.js";
import { buy4Schema, type Buy4 } from "./buy4.js";
import { rent3Schema, type Rent3 } from "./rent3.js";

export type Episodes1 = {
  buy?: Buy4;
  rent?: Rent3;
};

export const episodes1Schema: Schema<Episodes1> = s.object<Episodes1>({
  buy: s.optional(s.lazy(() => buy4Schema)),
  rent: s.optional(s.lazy(() => rent3Schema)),
});
