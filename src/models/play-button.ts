import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { positionSchema, type Position } from "./position.js";

export type PlayButton = {
  position: Position;
};

export const playButtonSchema: Schema<PlayButton> = s.object<PlayButton>({
  position: positionSchema,
});
