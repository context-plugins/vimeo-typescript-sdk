import { s, type Schema } from "../core/index.js";
import { custom1Schema, type Custom1 } from "./custom1.js";

export type Logos1 = {
  custom?: Custom1;
  vimeo?: boolean;
};

export const logos1Schema: Schema<Logos1> = s.object<Logos1>({
  custom: s.optional(s.lazy(() => custom1Schema)),
  vimeo: s.optional(s.boolean()),
});
