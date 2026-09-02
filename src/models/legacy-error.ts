import { s, type Schema } from "../core/index.js";

export type LegacyError = {
  error: string;
};

export const legacyErrorSchema: Schema<LegacyError> = s.object<LegacyError>({
  error: s.string(),
});
