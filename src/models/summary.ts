import { s, type Schema } from "../core/index.js";
import { reason6Schema, type Reason6 } from "./reason6.js";

export type Summary = {
  disabled: boolean;
  options: string[];
  reason: Reason6 | null;
  uri: string;
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason6Schema)),
  uri: s.string(),
});
