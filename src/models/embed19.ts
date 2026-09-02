import { s, type EnumSchema } from "../core/index.js";

export const Embed19 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed19 = (typeof Embed19)[keyof typeof Embed19] | (string & {});

export const embed19Schema: EnumSchema<Embed19> = s.enumOf<Embed19>(Embed19);
