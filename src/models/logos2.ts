import { s, type Schema } from "../core/index.js";
import { custom2Schema, type Custom2 } from "./custom2.js";

export type Logos2 = {
  custom: Custom2;
  vimeo: boolean;
};

export const logos2Schema: Schema<Logos2> = s.object<Logos2>({
  custom: custom2Schema,
  vimeo: s.boolean(),
});
