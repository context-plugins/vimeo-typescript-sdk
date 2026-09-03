import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason3Schema, type Reason3 } from "./reason3.js";

export type AskAiManager = {
  disabled: boolean;
  options: string[];
  reason: Reason3 | null;
  uri: string;
};

export const askAiManagerSchema: Schema<AskAiManager> = s.object<AskAiManager>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason3Schema)),
  uri: s.string(),
});
