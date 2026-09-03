import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewPrivacy1 = {
  options: string[];
  uri: string;
};

export const viewPrivacy1Schema: Schema<ViewPrivacy1> = s.object<ViewPrivacy1>({
  options: s.array(s.string()),
  uri: s.string(),
});
