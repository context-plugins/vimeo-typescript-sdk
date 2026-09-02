import { s, type Schema } from "../core/index.js";
import { unit2Schema, type Unit2 } from "./unit2.js";

export type Restricted = {
  free: number | null;
  max: number | null;
  unit: Unit2;
  used: number;
};

export const restrictedSchema: Schema<Restricted> = s.object<Restricted>({
  free: s.nullable(s.number()),
  max: s.nullable(s.number()),
  unit: unit2Schema,
  used: s.number(),
});
