import { s, type Schema } from "../core/index.js";
import { custom4Schema, type Custom4 } from "./custom4.js";

export type Logos4 = {
  custom?: Custom4;
  vimeo?: boolean;
};

export const logos4Schema: Schema<Logos4> = s.object<Logos4>({
  custom: s.optional(s.lazy(() => custom4Schema)),
  vimeo: s.optional(s.boolean()),
});
