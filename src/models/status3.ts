import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Status3 = {
  required: boolean;
  value: string;
};

export const status3Schema: Schema<Status3> = s.object<Status3>({
  required: s.boolean(),
  value: s.string(),
});
