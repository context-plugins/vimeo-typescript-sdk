import { s, type Schema } from "../core/index.js";

export type Delete = {
  options: string[];
  uri: string;
};

export const deleteSchema: Schema<Delete> = s.object<Delete>({
  options: s.array(s.string()),
  uri: s.string(),
});
