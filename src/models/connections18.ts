import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codesSchema, type Codes } from "./codes.js";

export type Connections18 = {
  codes: Codes;
};

export const connections18Schema: Schema<Connections18> = s.object<Connections18>({
  codes: codesSchema,
});
