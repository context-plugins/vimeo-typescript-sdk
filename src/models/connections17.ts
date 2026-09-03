import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clipSchema, type Clip } from "./clip.js";

export type Connections17 = {
  clip: Clip;
};

export const connections17Schema: Schema<Connections17> = s.object<Connections17>({
  clip: clipSchema,
});
