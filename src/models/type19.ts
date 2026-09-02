import { s, type EnumSchema } from "../core/index.js";

export const Type19 = {
  Channel: "channel",
  Custom: "custom",
  Organization: "organization",
  Page: "page",
  Profile: "profile",
} as const;
export type Type19 = (typeof Type19)[keyof typeof Type19] | (string & {});

export const type19Schema: EnumSchema<Type19> = s.enumOf<Type19>(Type19);
