import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom1Schema, type Custom1 } from "./custom1.js";

/** A collection of information about the logo in the corner of the onsite player. */
export type Logos1 = {
  /** A collection of information relating to custom logos in the onsite player. */
  custom?: Custom1;
  /** Whether the Vimeo logo appears in the onsite player. */
  vimeo?: boolean;
};

export const logos1Schema: Schema<Logos1> = s.object<Logos1>({
  custom: s.optional(s.lazy(() => custom1Schema)),
  vimeo: s.optional(s.boolean()),
});
