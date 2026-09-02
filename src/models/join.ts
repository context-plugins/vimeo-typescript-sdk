import { s, type Schema } from "../core/index.js";
import { type8Schema, type Type8 } from "./type8.js";

export type Join = {
  added: boolean;
  addedTime: string | null;
  title: string | null;
  type: Type8 | null;
  uri: string;
};

export const joinSchema: Schema<Join> = s.object<Join>({
  added: s.boolean(),
  addedTime: s.nullable(s.string()),
  title: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => type8Schema)),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
