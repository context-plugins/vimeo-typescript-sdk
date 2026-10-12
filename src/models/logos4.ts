import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom4Schema, type Custom4 } from "./custom4.js";

export type Logos4 = {
  custom?: Custom4;
  /** Whether to show the Vimeo logo on the embed player. */
  vimeo?: boolean;
};

export const logos4Schema: Schema<Logos4> = s.object<Logos4>({
  custom: s.optional(s.lazy(() => custom4Schema)),
  vimeo: s.optional(s.boolean()),
});
