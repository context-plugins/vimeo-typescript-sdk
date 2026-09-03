import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LegacyError = {
  error: string;
};

export const legacyErrorSchema: Schema<LegacyError> = s.object<LegacyError>({
  error: s.string(),
});
