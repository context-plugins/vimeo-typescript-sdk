import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Standard = {
  Aicc: "aicc",
  Cmi5: "cmi5",
  Scorm12: "scorm12",
  Scorm20043Rd: "scorm2004_3rd",
  Tincan: "tincan",
} as const;
export type Standard = (typeof Standard)[keyof typeof Standard] | (string & {});

export const standardSchema: EnumSchema<Standard> = s.enumOf<Standard>(Standard);
