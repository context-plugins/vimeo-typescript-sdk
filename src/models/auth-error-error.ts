import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthErrorError = {
  error: string;
  errorDescription: string;
};

export const authErrorErrorSchema: Schema<AuthErrorError> = s.object<AuthErrorError>({
  error: s.string(),
  errorDescription: s.string(),
  _keysMap: {
    errorDescription: "error_description",
  },
});
