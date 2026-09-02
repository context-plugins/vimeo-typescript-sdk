import { s, type Schema } from "../core/index.js";

export type AddTo = {
  options: string[];
  uri: string;
};

export const addToSchema: Schema<AddTo> = s.object<AddTo>({
  options: s.array(s.string()),
  uri: s.string(),
});
