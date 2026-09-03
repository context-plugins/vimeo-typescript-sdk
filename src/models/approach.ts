import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Approach = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach = (typeof Approach)[keyof typeof Approach] | (string & {});

export const approachSchema: EnumSchema<Approach> = s.enumOf<Approach>(Approach);
