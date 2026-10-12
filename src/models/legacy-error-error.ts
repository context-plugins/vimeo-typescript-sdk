import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LegacyErrorError = {
  /** The error message. */
  error: string;
};

export const legacyErrorErrorSchema: Schema<LegacyErrorError> = s.object<LegacyErrorError>({
  error: s.string(),
});
