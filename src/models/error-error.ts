import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorError = {
  developerMessage: string;
  error: string;
  errorCode: number;
  link: string;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>({
  developerMessage: s.string(),
  error: s.string(),
  errorCode: s.number(),
  link: s.string(),
  _keysMap: {
    developerMessage: "developer_message",
    errorCode: "error_code",
  },
});
