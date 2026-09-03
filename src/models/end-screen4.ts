import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type36Schema, type Type36 } from "./type36.js";

export type EndScreen4 = {
  type?: Type36;
};

export const endScreen4Schema: Schema<EndScreen4> = s.object<EndScreen4>({
  type: s.optional(s.lazy(() => type36Schema)),
});
