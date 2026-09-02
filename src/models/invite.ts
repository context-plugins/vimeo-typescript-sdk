import { s, type Schema } from "../core/index.js";

export type Invite = {
  options: string[];
  uri: string;
};

export const inviteSchema: Schema<Invite> = s.object<Invite>({
  options: s.array(s.string()),
  uri: s.string(),
});
