import { s, type Schema } from "../core/index.js";

export type Colors2 = {
  primary: string;
  secondary: string;
};

export const colors2Schema: Schema<Colors2> = s.object<Colors2>({
  primary: s.string(),
  secondary: s.string(),
});
