import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type View2 = {
  options: string[];
  uri: string;
};

export const view2Schema: Schema<View2> = s.object<View2>({
  options: s.array(s.string()),
  uri: s.string(),
});
