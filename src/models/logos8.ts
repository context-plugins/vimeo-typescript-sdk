import { s, type Schema } from "../core/index.js";
import { custom8Schema, type Custom8 } from "./custom8.js";

export type Logos8 = {
  custom?: Custom8;
  vimeo?: boolean;
};

export const logos8Schema: Schema<Logos8> = s.object<Logos8>({
  custom: s.optional(s.lazy(() => custom8Schema)),
  vimeo: s.optional(s.boolean()),
});
