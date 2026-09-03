import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AskAi = {
  options: string[];
  uri: string;
};

export const askAiSchema: Schema<AskAi> = s.object<AskAi>({
  options: s.array(s.string()),
  uri: s.string(),
});
