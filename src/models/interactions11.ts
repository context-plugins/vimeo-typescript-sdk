import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { edit3Schema, type Edit3 } from "./edit3.js";

/** A list of resource URIs related to the event destination. */
export type Interactions11 = {
  /** Information about where and how to edit an item. */
  edit: Edit3 | null;
};

export const interactions11Schema: Schema<Interactions11> = s.object<Interactions11>({
  edit: s.nullable(s.lazy(() => edit3Schema)),
});
