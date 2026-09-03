import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type22 = {
  Batch: "batch",
  BatchPrefix: "batch_prefix",
  Single: "single",
} as const;
export type Type22 = (typeof Type22)[keyof typeof Type22] | (string & {});

export const type22Schema: EnumSchema<Type22> = s.enumOf<Type22>(Type22);
