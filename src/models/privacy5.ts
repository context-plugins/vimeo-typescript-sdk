import { s, type Schema } from "../core/index.js";
import { view6Schema, type View6 } from "./view6.js";

export type Privacy5 = {
  password?: string;
  view: View6;
};

export const privacy5Schema: Schema<Privacy5> = s.object<Privacy5>({
  password: s.optional(s.string()),
  view: view6Schema,
});
