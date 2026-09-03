import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type34Schema, type Type34 } from "./type34.js";

export type EndScreen2 = {
  type?: Type34;
};

export const endScreen2Schema: Schema<EndScreen2> = s.object<EndScreen2>({
  type: s.optional(s.lazy(() => type34Schema)),
});
