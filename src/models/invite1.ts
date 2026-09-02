import { s, type Schema } from "../core/index.js";

export type Invite1 = {
  options: string[];
  uri: string;
};

export const invite1Schema: Schema<Invite1> = s.object<Invite1>({
  options: s.array(s.string()),
  uri: s.string(),
});
