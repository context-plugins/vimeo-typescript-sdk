import { s, type EnumSchema } from "../core/index.js";

export const Unit = {
  VideoCount: "video_count",
  VideoSize: "video_size",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
