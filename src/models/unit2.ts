import { s, type EnumSchema } from "../core/index.js";

export const Unit2 = {
  VideoSize: "video_size",
} as const;
export type Unit2 = (typeof Unit2)[keyof typeof Unit2] | (string & {});

export const unit2Schema: EnumSchema<Unit2> = s.enumOf<Unit2>(Unit2);
