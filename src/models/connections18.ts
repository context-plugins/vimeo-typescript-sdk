import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codesSchema, type Codes } from "./codes.js";

/** A list of resource URIs related to the promotion. */
export type Connections18 = {
  /** Information about the codes associated with the promotion. */
  codes: Codes;
};

export const connections18Schema: Schema<Connections18> = s.object<Connections18>({
  codes: codesSchema,
});
