import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Invite = {
  options: string[];
  uri: string;
};

export const inviteSchema: Schema<Invite> = s.object<Invite>({
  options: s.array(s.string()),
  uri: s.string(),
});
