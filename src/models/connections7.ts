import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { related1Schema, type Related1 } from "./related1.js";

/** A list of resource URIs related to the activity. */
export type Connections7 = {
  /** The activity's related content. */
  related: Related1 | null;
};

export const connections7Schema: Schema<Connections7> = s.object<Connections7>({
  related: s.nullable(s.lazy(() => related1Schema)),
});
