import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Embed19 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed19 = (typeof Embed19)[keyof typeof Embed19] | (string & {});

export const embed19Schema: EnumSchema<Embed19> = s.enumOf<Embed19>(Embed19);
