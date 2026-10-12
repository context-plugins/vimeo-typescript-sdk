import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clipSchema, type Clip } from "./clip.js";

/** A collection of information that is connected to this resource. */
export type Connections17 = {
  /** Information about the videos that belong to this channel. */
  clip: Clip;
};

export const connections17Schema: Schema<Connections17> = s.object<Connections17>({
  clip: clipSchema,
});
