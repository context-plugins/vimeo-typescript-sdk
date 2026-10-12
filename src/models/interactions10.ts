import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activateSchema, type Activate } from "./activate.js";
import { delete3Schema, type Delete3 } from "./delete3.js";
import { edit3Schema, type Edit3 } from "./edit3.js";

/** A list of resource URIs related to the event. */
export type Interactions10 = {
  /** Information about where and how to activate the event. */
  activate: Activate | null;
  /** Information about where and how to delete an item. */
  delete: Delete3 | null;
  /** Information about where and how to edit an item. */
  edit: Edit3 | null;
};

export const interactions10Schema: Schema<Interactions10> = s.object<Interactions10>({
  activate: s.nullable(s.lazy(() => activateSchema)),
  delete: s.nullable(s.lazy(() => delete3Schema)),
  edit: s.nullable(s.lazy(() => edit3Schema)),
});
