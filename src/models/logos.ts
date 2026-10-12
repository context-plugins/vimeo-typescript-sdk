import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customSchema, type Custom } from "./custom.js";

/** A collection of information about the logo in the corner of the embeddable player. */
export type Logos = {
  /** A collection of information relating to custom logos in the embeddable player. */
  custom: Custom;
  /** Whether the Vimeo logo appears in the embeddable player. */
  vimeo: boolean;
};

export const logosSchema: Schema<Logos> = s.object<Logos>({
  custom: customSchema,
  vimeo: s.boolean(),
});
