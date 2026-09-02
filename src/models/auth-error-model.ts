import { s, type Schema } from "../core/index.js";

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
