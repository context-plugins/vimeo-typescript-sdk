import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthErrorModel = {
  error: string;
  errorDescription: string;
};

export const authErrorModelSchema: Schema<AuthErrorModel> = s.object<AuthErrorModel>({
  error: s.string(),
  errorDescription: s.string(),
  _keysMap: {
    errorDescription: "error_description",
  },
});
