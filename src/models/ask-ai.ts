import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to submit questions to the AI service for this video. */
export type AskAi = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const askAiSchema: Schema<AskAi> = s.object<AskAi>({
  options: s.array(s.string()),
  uri: s.string(),
});
