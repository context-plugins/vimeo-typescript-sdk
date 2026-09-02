import { s, type Schema } from "../core/index.js";

export type AddTo1 = {
  options: string[];
  uri: string;
};

export const addTo1Schema: Schema<AddTo1> = s.object<AddTo1>({
  options: s.array(s.string()),
  uri: s.string(),
});
