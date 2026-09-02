import { s, type Schema } from "../core/index.js";

export type Status3 = {
  required: boolean;
  value: string;
};

export const status3Schema: Schema<Status3> = s.object<Status3>({
  required: s.boolean(),
  value: s.string(),
});
