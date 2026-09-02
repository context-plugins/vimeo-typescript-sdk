import { s, type Schema } from "../core/index.js";

export type Channel1 = {
  options: string[];
  uri: string;
};

export const channel1Schema: Schema<Channel1> = s.object<Channel1>({
  options: s.array(s.string()),
  uri: s.string(),
});
