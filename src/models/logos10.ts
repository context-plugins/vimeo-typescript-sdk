import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom10Schema, type Custom10 } from "./custom10.js";

export type Logos10 = {
  custom?: Custom10;
  /** Whether to show the Vimeo logo on the embeddable player. */
  vimeo?: boolean;
};

export const logos10Schema: Schema<Logos10> = s.object<Logos10>({
  custom: s.optional(s.lazy(() => custom10Schema)),
  vimeo: s.optional(s.boolean()),
});
