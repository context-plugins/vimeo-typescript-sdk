import { s, type Schema } from "../core/index.js";
import { view3Schema, type View3 } from "./view3.js";

export type Privacy2 = {
  view: View3;
};

export const privacy2Schema: Schema<Privacy2> = s.object<Privacy2>({
  view: view3Schema,
});
