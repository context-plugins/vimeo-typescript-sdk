import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections7Schema, type Connections7 } from "./connections7.js";

/** Information about the activity's metadata. */
export type Metadata7 = {
  /** A list of resource URIs related to the activity. */
  connections: Connections7;
};

export const metadata7Schema: Schema<Metadata7> = s.object<Metadata7>({
  connections: connections7Schema,
});
