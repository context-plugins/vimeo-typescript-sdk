import { s, type EnumSchema } from "../core/index.js";

export const Mode = {
  AdminAndAuthenticated: "admin_and_authenticated",
  Global: "global",
  PerSeatType: "per_seat_type",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
