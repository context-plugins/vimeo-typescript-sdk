import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Log = {
  /** The URL to record a Play logging event. */
  play?: string;
};

export const logSchema: Schema<Log> = s.object<Log>({
  play: s.optional(s.string()),
});
