import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { joinSchema, type Join } from "./join.js";

export type Interactions5 = {
  join: Join;
};

export const interactions5Schema: Schema<Interactions5> = s.object<Interactions5>({
  join: joinSchema,
});
