import { s, type EnumSchema } from "../core/index.js";

export const Type = {
  Caution: "caution",
  Custom: "custom",
  Default: "default",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
