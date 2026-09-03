import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";

export type Seats = {
  admin: number | null;
  authenticated: number | null;
  mode: Mode;
  team: number | null;
};

export const seatsSchema: Schema<Seats> = s.object<Seats>({
  admin: s.nullable(s.number()),
  authenticated: s.nullable(s.number()),
  mode: modeSchema,
  team: s.nullable(s.number()),
});
