import { s, type Schema } from "../core/index.js";
import { positionSchema, type Position } from "./position.js";

export type PlayButton = {
  position: Position;
};

export const playButtonSchema: Schema<PlayButton> = s.object<PlayButton>({
  position: positionSchema,
});
