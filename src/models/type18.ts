import { s, type EnumSchema } from "../core/index.js";

export const Type18 = {
  Custom: "custom",
  None: "none",
  Vimeo: "vimeo",
} as const;
export type Type18 = (typeof Type18)[keyof typeof Type18] | (string & {});

export const type18Schema: EnumSchema<Type18> = s.enumOf<Type18>(Type18);
