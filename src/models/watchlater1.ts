import { s, type Schema } from "../core/index.js";

export type Watchlater1 = {
  added: boolean;
  addedTime: string;
  options: string[];
  uri: string;
};

export const watchlater1Schema: Schema<Watchlater1> = s.object<Watchlater1>({
  added: s.boolean(),
  addedTime: s.string(),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
