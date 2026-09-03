import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Watched = {
  added: boolean;
  addedTime: string;
  options: string[];
  uri: string;
};

export const watchedSchema: Schema<Watched> = s.object<Watched>({
  added: s.boolean(),
  addedTime: s.string(),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
