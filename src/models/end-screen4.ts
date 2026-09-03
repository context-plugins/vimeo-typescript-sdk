import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type40Schema, type Type40 } from "./type40.js";

export type EndScreen4 = {
  type?: Type40;
};

export const endScreen4Schema: Schema<EndScreen4> = s.object<EndScreen4>({
  type: s.optional(s.lazy(() => type40Schema)),
});
