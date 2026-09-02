import { s, type EnumSchema } from "../core/index.js";

export const Showing = {
  Lifetime: "lifetime",
  Periodic: "periodic",
} as const;
export type Showing = (typeof Showing)[keyof typeof Showing] | (string & {});

export const showingSchema: EnumSchema<Showing> = s.enumOf<Showing>(Showing);
