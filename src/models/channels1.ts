import { s, type Schema } from "../core/index.js";

export type Channels1 = {
  options: string[];
  total: number;
  uri: string;
};

export const channels1Schema: Schema<Channels1> = s.object<Channels1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
