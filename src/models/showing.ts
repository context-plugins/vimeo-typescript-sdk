import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Showing = {
  Lifetime: "lifetime",
  Periodic: "periodic",
} as const;
export type Showing = (typeof Showing)[keyof typeof Showing] | (string & {});

export const showingSchema: EnumSchema<Showing> = s.enumOf<Showing>(Showing);
