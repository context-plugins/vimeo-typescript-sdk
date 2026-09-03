import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort43 = {
  Date: "date",
  Manual: "manual",
} as const;
export type Sort43 = (typeof Sort43)[keyof typeof Sort43] | (string & {});

export const sort43Schema: EnumSchema<Sort43> = s.enumOf<Sort43>(Sort43);
