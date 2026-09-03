import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";

export type CreativeCommons = {
  code: Code1;
  name: string;
  uri: string | null;
};

export const creativeCommonsSchema: Schema<CreativeCommons> = s.object<CreativeCommons>({
  code: code1Schema,
  name: s.string(),
  uri: s.nullable(s.string()),
});
