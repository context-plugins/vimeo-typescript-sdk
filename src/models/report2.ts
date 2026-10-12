import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Report2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * A list of predefined reasons for which the comment can be reported. These reasons correspond to
   * the available flagging options.
   */
  reason: string[];
  /** The URI to use for sending a report request for the comment. */
  uri: string;
};

export const report2Schema: Schema<Report2> = s.object<Report2>({
  options: s.array(s.string()),
  reason: s.array(s.string()),
  uri: s.string(),
});
