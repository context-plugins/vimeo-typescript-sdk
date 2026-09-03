import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  developerMessage: string;
  error: string;
  errorCode: number;
  link: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  developerMessage: s.string(),
  error: s.string(),
  errorCode: s.number(),
  link: s.string(),
  _keysMap: {
    developerMessage: "developer_message",
    errorCode: "error_code",
  },
});
