import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason5Schema, type Reason5 } from "./reason5.js";

export type Highlights = {
  disabled?: boolean;
  options: string[];
  reason?: Reason5;
  uri: string;
};

export const highlightsSchema: Schema<Highlights> = s.object<Highlights>({
  disabled: s.optional(s.boolean()),
  options: s.array(s.string()),
  reason: s.optional(s.lazy(() => reason5Schema)),
  uri: s.string(),
});
