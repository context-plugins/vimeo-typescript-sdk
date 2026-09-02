import { s, type Schema } from "../core/index.js";

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
