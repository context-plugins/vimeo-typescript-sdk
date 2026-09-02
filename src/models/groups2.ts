import { s, type Schema } from "../core/index.js";

export type Groups2 = {
  options: string[];
  uri: string;
};

export const groups2Schema: Schema<Groups2> = s.object<Groups2>({
  options: s.array(s.string()),
  uri: s.string(),
});
