import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections23Schema, type Connections23 } from "./connections23.js";

/** The item's metadata. */
export type Metadata24 = {
  /** A list of resource URIs related to the item. */
  connections: Connections23;
};

export const metadata24Schema: Schema<Metadata24> = s.object<Metadata24>({
  connections: connections23Schema,
});
