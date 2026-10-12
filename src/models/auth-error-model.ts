import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthErrorModel = {
  /** The name of the error. */
  error: string;
  /** The description of the error. */
  errorDescription: string;
};

export const authErrorModelSchema: Schema<AuthErrorModel> = s.object<AuthErrorModel>({
  error: s.string(),
  errorDescription: s.string(),
  _keysMap: {
    errorDescription: "error_description",
  },
});
