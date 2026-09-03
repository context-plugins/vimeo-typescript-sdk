import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Invite3 = {
  options: string[];
  uri: string;
};

export const invite3Schema: Schema<Invite3> = s.object<Invite3>({
  options: s.array(s.string()),
  uri: s.string(),
});
