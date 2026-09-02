import { s, type Schema } from "../core/index.js";

export type Delete2 = {
  options: string[];
  uri: string;
};

export const delete2Schema: Schema<Delete2> = s.object<Delete2>({
  options: s.array(s.string()),
  uri: s.string(),
});
