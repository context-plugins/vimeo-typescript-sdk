import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections22Schema, type Connections22 } from "./connections22.js";

/** Metadata about the preset. */
export type Metadata23 = {
  /** A list of resource URIs related to the preset. */
  connections: Connections22;
};

export const metadata23Schema: Schema<Metadata23> = s.object<Metadata23>({
  connections: connections22Schema,
});
