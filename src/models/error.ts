import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  /** The error message that technical users receive. */
  developerMessage: string;
  /** The error message that general users receive. */
  error: string;
  /** The error code. */
  errorCode: number;
  /** A link to more information about the error. */
  link: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  developerMessage: s.string(),
  error: s.string(),
  errorCode: s.float64(),
  link: s.string(),
  _keysMap: {
    developerMessage: "developer_message",
    errorCode: "error_code",
  },
});
