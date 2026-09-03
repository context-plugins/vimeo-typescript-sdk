import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom2Schema, type Custom2 } from "./custom2.js";

export type Logos2 = {
  custom: Custom2;
  vimeo: boolean;
};

export const logos2Schema: Schema<Logos2> = s.object<Logos2>({
  custom: custom2Schema,
  vimeo: s.boolean(),
});
