import { s, type Schema } from "../core/index.js";
import { codesSchema, type Codes } from "./codes.js";

export type Connections18 = {
  codes: Codes;
};

export const connections18Schema: Schema<Connections18> = s.object<Connections18>({
  codes: codesSchema,
});
