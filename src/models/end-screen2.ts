import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type38Schema, type Type38 } from "./type38.js";

export type EndScreen2 = {
  type?: Type38;
};

export const endScreen2Schema: Schema<EndScreen2> = s.object<EndScreen2>({
  type: s.optional(s.lazy(() => type38Schema)),
});
