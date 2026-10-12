import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom8Schema, type Custom8 } from "./custom8.js";

export type Logos8 = {
  custom?: Custom8;
  /** Whether to show the Vimeo logo on the embeddable player. */
  vimeo?: boolean;
};

export const logos8Schema: Schema<Logos8> = s.object<Logos8>({
  custom: s.optional(s.lazy(() => custom8Schema)),
  vimeo: s.optional(s.boolean()),
});
