import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Id = {
  annual: string | null;
  monthly: string | null;
};

export const idSchema: Schema<Id> = s.object<Id>({
  annual: s.nullable(s.string()),
  monthly: s.nullable(s.string()),
});
