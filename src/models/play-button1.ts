import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { position2Schema, type Position2 } from "./position2.js";

export type PlayButton1 = {
  position?: Position2;
};

export const playButton1Schema: Schema<PlayButton1> = s.object<PlayButton1>({
  position: s.optional(s.lazy(() => position2Schema)),
});
