import { s, type Schema } from "../core/index.js";

export type AskAi = {
  options: string[];
  uri: string;
};

export const askAiSchema: Schema<AskAi> = s.object<AskAi>({
  options: s.array(s.string()),
  uri: s.string(),
});
