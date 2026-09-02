import { s, type EnumSchema } from "../core/index.js";

export const Type31 = {
  All: "all",
  OneTime: "one_time",
  Recurring: "recurring",
} as const;
export type Type31 = (typeof Type31)[keyof typeof Type31] | (string & {});

export const type31Schema: EnumSchema<Type31> = s.enumOf<Type31>(Type31);
