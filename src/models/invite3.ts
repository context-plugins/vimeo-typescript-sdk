import { s, type Schema } from "../core/index.js";

export type Invite3 = {
  options: string[];
  uri: string;
};

export const invite3Schema: Schema<Invite3> = s.object<Invite3>({
  options: s.array(s.string()),
  uri: s.string(),
});
