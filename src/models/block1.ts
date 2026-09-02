import { s, type Schema } from "../core/index.js";

export type Block1 = {
  added: boolean;
  addedTime?: string;
  options: string[];
  uri: string;
};

export const block1Schema: Schema<Block1> = s.object<Block1>({
  added: s.boolean(),
  addedTime: s.optional(s.string()),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
