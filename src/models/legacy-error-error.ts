import { s, type Schema } from "../core/index.js";

export type LegacyErrorError = {
  error: string;
};

export const legacyErrorErrorSchema: Schema<LegacyErrorError> = s.object<LegacyErrorError>({
  error: s.string(),
});
