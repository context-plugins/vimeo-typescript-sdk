import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom2Schema, type Custom2 } from "./custom2.js";

/** A collection of information about the logo in the corner of the embeddable player. */
export type Logos2 = {
  /** A collection of information relating to custom logos in the embeddable player. */
  custom: Custom2;
  /** Whether the Vimeo logo appears in the embeddable player for the video. */
  vimeo: boolean;
};

export const logos2Schema: Schema<Logos2> = s.object<Logos2>({
  custom: custom2Schema,
  vimeo: s.boolean(),
});
