import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Properties1 = {
  /** The name of the property to be sent. */
  name: string;
  /** An array of the field's selectable options. */
  options: string[];
  /** Whether the field must be sent to achieve the desired action. */
  required: boolean;
};

export const properties1Schema: Schema<Properties1> = s.object<Properties1>({
  name: s.string(),
  options: s.array(s.string()),
  required: s.boolean(),
});
