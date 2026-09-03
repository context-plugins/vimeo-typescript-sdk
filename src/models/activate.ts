import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Activate = {
  options: string[];
  uri: string;
};

export const activateSchema: Schema<Activate> = s.object<Activate>({
  options: s.array(s.string()),
  uri: s.string(),
});
