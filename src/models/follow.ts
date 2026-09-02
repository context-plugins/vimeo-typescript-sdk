import { s, type Schema } from "../core/index.js";

export type Follow = {
  added: boolean;
  addedTime: string | null;
  uri: string;
};

export const followSchema: Schema<Follow> = s.object<Follow>({
  added: s.boolean(),
  addedTime: s.nullable(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
