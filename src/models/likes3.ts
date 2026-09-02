import { s, type Schema } from "../core/index.js";

export type Likes3 = {
  added: boolean;
  addedTime: string;
  uri: string;
};

export const likes3Schema: Schema<Likes3> = s.object<Likes3>({
  added: s.boolean(),
  addedTime: s.string(),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
