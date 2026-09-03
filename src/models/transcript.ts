import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status7Schema, type Status7 } from "./status7.js";

export type Transcript = {
  language: string | null;
  status?: Status7;
};

export const transcriptSchema: Schema<Transcript> = s.object<Transcript>({
  language: s.nullable(s.string()),
  status: s.optional(s.lazy(() => status7Schema)),
});
