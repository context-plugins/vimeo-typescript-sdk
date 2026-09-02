import { s, type Schema } from "../core/index.js";
import { report2Schema, type Report2 } from "./report2.js";

export type Interactions9 = {
  report: Report2;
};

export const interactions9Schema: Schema<Interactions9> = s.object<Interactions9>({
  report: report2Schema,
});
