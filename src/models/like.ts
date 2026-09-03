import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Like = {
  added: boolean;
  addedTime: string;
  options: string[];
  showCount: boolean;
  uri: string;
};

export const likeSchema: Schema<Like> = s.object<Like>({
  added: s.boolean(),
  addedTime: s.string(),
  options: s.array(s.string()),
  showCount: s.boolean(),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
    showCount: "show_count",
  },
});
