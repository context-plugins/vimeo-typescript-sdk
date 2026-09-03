import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type43Schema, type Type43 } from "./type43.js";

export type Field = {
  defaultValue?: string | null;
  delete?: boolean;
  description?: string | null;
  id?: number;
  mandatory?: boolean;
  name?: string;
  type?: Type43;
  values?: string[] | null;
};

export const fieldSchema: Schema<Field> = s.object<Field>({
  defaultValue: s.optionalNullable(s.string()),
  delete: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  id: s.optional(s.number()),
  mandatory: s.optional(s.boolean()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => type43Schema)),
  values: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    defaultValue: "default_value",
  },
});
