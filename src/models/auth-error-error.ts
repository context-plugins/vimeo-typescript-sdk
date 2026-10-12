import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthErrorError = {
  /** The name of the error. */
  error: string;
  /** The description of the error. */
  errorDescription: string;
};

export const authErrorErrorSchema: Schema<AuthErrorError> = s.object<AuthErrorError>({
  error: s.string(),
  errorDescription: s.string(),
  _keysMap: {
    errorDescription: "error_description",
  },
});
