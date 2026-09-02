import { s, type Schema } from "../core/index.js";

export type Watchlater2 = {
  added: boolean;
  addedTime: string;
  uri: string;
};

export const watchlater2Schema: Schema<Watchlater2> = s.object<Watchlater2>({
  added: s.boolean(),
  addedTime: s.string(),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
