import { s, type Schema } from "../core/index.js";
import { reason4Schema, type Reason4 } from "./reason4.js";

export type AskAiViewer = {
  disabled: boolean;
  options: string[];
  reason: Reason4 | null;
  uri: string;
};

export const askAiViewerSchema: Schema<AskAiViewer> = s.object<AskAiViewer>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason4Schema)),
  uri: s.string(),
});
