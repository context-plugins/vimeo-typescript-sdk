import { s, type Schema } from "../core/index.js";
import { positionSchema, type Position } from "./position.js";

export type PlayButton3 = {
  position?: Position;
};

export const playButton3Schema: Schema<PlayButton3> = s.object<PlayButton3>({
  position: s.optional(s.lazy(() => positionSchema)),
});
