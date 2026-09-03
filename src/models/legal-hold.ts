import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LegalHold = {
  options: string[];
  uri: string;
};

export const legalHoldSchema: Schema<LegalHold> = s.object<LegalHold>({
  options: s.array(s.string()),
  uri: s.string(),
});
