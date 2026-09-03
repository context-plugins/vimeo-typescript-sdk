import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Status2 = {
  required: boolean;
  value: string;
};

export const status2Schema: Schema<Status2> = s.object<Status2>({
  required: s.boolean(),
  value: s.string(),
});
