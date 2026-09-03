import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type17Schema, type Type17 } from "./type17.js";

export type CustomMetadataSettings = {
  default?: string | null;
  description?: string | null;
  id: number;
  mandatory: boolean;
  name: string;
  type: Type17;
  values?: string[] | null;
};

export const customMetadataSettingsSchema: Schema<CustomMetadataSettings> = s.object<CustomMetadataSettings>({
  default: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  id: s.number(),
  mandatory: s.boolean(),
  name: s.string(),
  type: type17Schema,
  values: s.optionalNullable(s.array(s.string())),
});
