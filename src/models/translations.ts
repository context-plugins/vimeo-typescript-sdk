import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason8Schema, type Reason8 } from "./reason8.js";

export type Translations = {
  disabled: boolean;
  options: string[];
  reason: Reason8 | null;
  uri: string;
};

export const translationsSchema: Schema<Translations> = s.object<Translations>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason8Schema)),
  uri: s.string(),
});
