import { s, type Schema } from "../core/index.js";

export type Properties1 = {
  name: string;
  options: string[];
  required: boolean;
};

export const properties1Schema: Schema<Properties1> = s.object<Properties1>({
  name: s.string(),
  options: s.array(s.string()),
  required: s.boolean(),
});
