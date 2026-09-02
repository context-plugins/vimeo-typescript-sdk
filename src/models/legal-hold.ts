import { s, type Schema } from "../core/index.js";

export type LegalHold = {
  options: string[];
  uri: string;
};

export const legalHoldSchema: Schema<LegalHold> = s.object<LegalHold>({
  options: s.array(s.string()),
  uri: s.string(),
});
