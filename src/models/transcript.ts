import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status6Schema, type Status6 } from "./status6.js";

export type Transcript = {
  language: string | null;
  status?: Status6;
};

export const transcriptSchema: Schema<Transcript> = s.object<Transcript>({
  language: s.nullable(s.string()),
  status: s.optional(s.lazy(() => status6Schema)),
});
