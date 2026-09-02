import { s, type Schema } from "../core/index.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Follow1 = {
  added: boolean;
  addedTime: string | null;
  type: Type1 | null;
  uri: string;
};

export const follow1Schema: Schema<Follow1> = s.object<Follow1>({
  added: s.boolean(),
  addedTime: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => type1Schema)),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
